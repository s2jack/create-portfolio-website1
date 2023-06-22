/* ---------------- contact form variables ----------------*/
const screenwidth = window.innerWidth;
const form = document.getElementById('contact-form');
const emailRegex = /^([a-z|\d])+@+([a-z]){2,}\.+([a-z)]{2,})/;
const emailInput = document.getElementById('email');
const nameInput = document.querySelector('#name');
const msgInput = document.querySelector('#message');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const emailErrorMessage = document.querySelector('.email-error');
const formErrorMessage = document.querySelector('.form-error');
const nameErrorMessage = document.querySelector('.name-error');
const messageErrorMessage = document.querySelector('.message-error');
const firstnameErrorMessage = document.querySelector('.firstname-error');
const lastnameErrorMessage = document.querySelector('.lastname-error');

/* ---------- Contact Form -------------- */

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (screenwidth < 768 && nameInput.value !== '' && msgInput.value !== '' && emailRegex.test(emailInput.value)) {
    form.submit();
    formErrorMessage.textContent = 'Succesfully sent';
    formErrorMessage.style.color = 'green';
    emailErrorMessage.style.display = 'none';
    nameErrorMessage.style.display = 'none';
    messageErrorMessage.style.display = 'none';
    firstnameErrorMessage.style.display = 'none';
    lastnameErrorMessage.style.display = 'none';
  } else if (screenwidth >= 768 && firstname.value !== '' && msgInput.value !== '' && emailRegex.test(emailInput.value)) {
    form.submit();
    formErrorMessage.textContent = 'Succesfully sent';
    formErrorMessage.style.color = 'green';
    emailErrorMessage.style.display = 'none';
    nameErrorMessage.style.display = 'none';
    messageErrorMessage.style.display = 'none';
    firstnameErrorMessage.style.display = 'none';
    lastnameErrorMessage.style.display = 'none';
  } else {
    formErrorMessage.textContent = 'the form was not sent';

    if (!emailInput.value) {
      emailErrorMessage.textContent = 'email is required';
      emailErrorMessage.style.display = 'block';
    } else if (!emailRegex.test(emailInput.value)) {
      emailErrorMessage.textContent = 'the email input is not valid! Please follow this format: user@mail.com';
      emailErrorMessage.style.display = 'block';
    } else {
      emailErrorMessage.textContent = '';
      emailErrorMessage.style.display = 'none';
    }

    if (screenwidth < 768 && nameInput.value === '') {
      nameErrorMessage.textContent = 'the name is required';
      nameErrorMessage.style.display = 'block';
    } else {
      nameErrorMessage.textContent = '';
      nameErrorMessage.style.display = 'none';
    }

    if (screenwidth >= 768 && firstname.value === '') {
      firstnameErrorMessage.textContent = 'the first name is required';
      firstnameErrorMessage.style.display = 'block'
    } else {
      firstnameErrorMessage.textContent = '';
      firstnameErrorMessage.style.display = 'none';
    }

    if (screenwidth >= 768 && lastname.value === '') {
      lastnameErrorMessage.textContent = 'the last name is required';
      lastnameErrorMessage.style.display = 'block'
    } else {
      lastnameErrorMessage.textContent = '';
      lastnameErrorMessage.style.display = 'none';
    }

    if (msgInput.value === '') {
      messageErrorMessage.textContent = 'the message input is empty';
      messageErrorMessage.style.display = 'block';
    } else {
      messageErrorMessage.textContent = '';
      messageErrorMessage.style.display = 'none';
    }
  }
});