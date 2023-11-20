import Letter from './Letter';

export default class LetterView {
  constructor(data) {
    const {
      id, from, subject, body, received,
    } = data;
    this.letter = new Letter(id, from, subject, body, received);
  }

  formation(subject) {
    let shortDesk = subject;
    if (subject.length > 15) {
      shortDesk = `${subject.substring(0, 15)}...`;
    }

    const date = this.getDate();
    const letter = document.createElement('li');
    letter.className = 'letter';
    letter.id = this.letter.id;

    letter.innerHTML = `
      <span class="adress">${this.letter.from}</span>
      <span class="theme">${shortDesk}</span>
      <span class="date">${date}</span>`;

    return letter;
  }

  getDate() {
    const rawDate = new Date(this.letter.received);
    const yy = rawDate.getFullYear().toString().slice(-2);
    const mm = LetterView.insertZeroes(rawDate.getMonth() + 1);
    const dd = LetterView.insertZeroes(rawDate.getDate());
    const hh = LetterView.insertZeroes(rawDate.getHours());
    const min = LetterView.insertZeroes(rawDate.getMinutes());

    const date = `${hh}:${min} ${dd}.${mm}.${yy}`;
    return date;
  }

  static insertZeroes(value) {
    let newValue;
    if (value < 10) {
      newValue = `0${value}`;
      return newValue;
    }
    return value;
  }
}
