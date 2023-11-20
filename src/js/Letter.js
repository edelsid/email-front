export default class Letter {
  constructor(id, from, subject, body, received) {
    this.id = id;
    this.from = from;
    this.subject = subject;
    this.body = body;
    this.received = received;
  }
}
