/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import {
  interval, catchError, throwError, map,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import LetterView from './LetterView';

export default class Email {
  constructor(container, url) {
    this.bindToDOM(container);
    this.url = url;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  init() {
    this.stream();
  }

  stream() {
    const stream$ = interval(5000);

    stream$.subscribe((int) => this.getMessages());
  }

  getMessages() {
    const dataStream$ = ajax.getJSON(`${this.url}/messages/unread`).pipe(
      catchError((err) => throwError(() => err)),
      map((res) => {
        if (res.messages.length === 0) {
          throw new Error();
        } else {
          return res;
        }
      }),
    );

    dataStream$.subscribe(
      (res) => this.renderMessages(res.messages),
      (err) => console.log('empty mailbox'),
    );
  }

  renderMessages(arr) {
    arr.forEach((el) => {
      const letter = new LetterView(el);
      const letterElement = letter.formation(el.subject);
      this.container.prepend(letterElement);
    });
  }
}
