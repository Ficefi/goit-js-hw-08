const throttle = require('lodash.throttle');

const feedback = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

feedback.elements.email.value = localStorage.getItem(storageKey) ?? '';

let dataForm = JSON.parse(localStorage.getItem(storageKey)) || {};
const { email, message } = feedback.elements;
reloadPage();

feedback.addEventListener(
  'input',
  throttle(() => {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(storageKey, JSON.stringify(dataForm));
  }, 500)
);

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

feedback.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(storageKey);
  feedback.reset();
});
