import Email from './Email';

const root = document.querySelector('.mail');

const app = new Email(root, 'https://email-65j9.onrender.com');

app.init();
