/* ---------------- contact form variables ----------------*/
const screenwidth = window.innerWidth;
const form = document.getElementById('contact-form');
const emailRegex = /^([a-z|\d])+@+([a-z]){2,}\.+([a-z)]{2,})/;
let emailInput = document.getElementById('email');
let nameInput = document.querySelector('#name');
let msgInput = document.querySelector('#message');
let firstnameInput = document.querySelector('#firstname');
let lastnameInput = document.querySelector('#lastname');
let emailErrorMessage = document.querySelector('.email-error');
let formErrorMessage = document.querySelector('.form-error');
let nameErrorMessage = document.querySelector('.name-error');
let messageErrorMessage = document.querySelector('.message-error');
let firstnameErrorMessage = document.querySelector('.firstname-error');
let lastnameErrorMessage = document.querySelector('.lastname-error');

/* ---------- Store Data -------------- */

let formDB = {
  name: '',
  firstname: '',
  lastname: '',
  email: '',
  message: '',
}

const getFormInputs = (data) => {
  nameInput.value = data.name;
  emailInput.value = data.email;
  msgInput.value = data.message;
  firstnameInput.value = data.firstname;
  lastnameInput.value = data.lastname;
}

if(localStorage.getItem('formDB')) {
  formDB = JSON.parse(localStorage.getItem('formDB'));
  getFormInputs(formDB);
}

/* ---------- Validation Contact Form -------------- */

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
  } else if (screenwidth >= 768 && firstnameInput.value !== '' && msgInput.value !== '' && emailRegex.test(emailInput.value) && lastnameInput.value !== '') {
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

    if (screenwidth >= 768 && firstnameInput.value === '') {
      firstnameErrorMessage.textContent = 'the first name is required';
      firstnameErrorMessage.style.display = 'block'
    } else {
      firstnameErrorMessage.textContent = '';
      firstnameErrorMessage.style.display = 'none';
    }

    if (screenwidth >= 768 && lastnameInput.value === '') {
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

nameInput.addEventListener('input', () => {
  if(nameInput.value === '' && formDB.name === '' && formDB.firstname !== '' && formDB.lastname !== '') {
    formDB.name = formDB.firstname + ' ' + formDB.lastname;
  } else {
    formDB.name = nameInput.value;
  }
  localStorage.setItem('formDB', JSON.stringify(formDB));
});

emailInput.addEventListener('input', () => {
  formDB.email = emailInput.value;
  localStorage.setItem('formDB', JSON.stringify(formDB));
});

msgInput.addEventListener('input', () => {
  formDB.message = msgInput.value;
  localStorage.setItem('formDB', JSON.stringify(formDB));
});

firstnameInput.addEventListener('input', () => {
  formDB.firstname = firstnameInput.value;
  localStorage.setItem('formDB', JSON.stringify(formDB));
});

lastnameInput.addEventListener('input', () => {
  formDB.lastname = lastnameInput.value;
  localStorage.setItem('formDB', JSON.stringify(formDB));
});
