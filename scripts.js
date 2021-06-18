const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const fname_error = document.getElementById('fname_error');
const lname_error = document.getElementById('lname_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');
const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


form.addEventListener('submit', (e) => {

    console.log('Toimii');

    if (fname.value === '' || fname.value === null) {
        fname_error.innerText = 'First Name cannot be empty';
        fname.style = 'border-color: var(--primary1); margin-bottom: 4px; background: url(images/icon-error.svg) no-repeat scroll; background-position: 95% center';
        e.preventDefault();
    } else {
        fname_error.innerText = '';
        fname.style = 'border-color: #eee; margin-bottom: 0;'
    }

    if (lname.value === '' || lname.value === null) {
        lname_error.innerText = 'Last Name cannot be empty';
        lname.style = 'border-color: var(--primary1); margin-bottom: 4px; background: url(images/icon-error.svg) no-repeat scroll; background-position: 95% center';
        e.preventDefault();
    } else {
        lname_error.innerText = '';
        lname.style = 'border-color: #eee; margin-bottom: 0;'
    }
    
    if (email.value === '' || email.value === null) {
        email_error.innerText = 'Email cannot be empty';
        email.style = 'border-color: var(--primary1); margin-bottom: 4px; background: url(images/icon-error.svg) no-repeat scroll; background-position: 95% center';
        e.preventDefault();
    } else if (!regex.test(email.value)) {
        email_error.innerText = 'Email is not valid';
        email.style = 'border-color: var(--primary1); margin-bottom: 4px; color: var(--primary1); background: url(images/icon-error.svg) no-repeat scroll; background-position: 95% center'
        e.preventDefault()
    } else {
        email_error.innerText = '';
        email.style = 'border-color: #eee; margin-bottom: 0;'
    }

    if (password.value === '' || password.value === null) {
        password_error.innerText = 'Password cannot be empty';
        password.style = 'border-color: var(--primary1); margin-bottom: 4px; background: url(images/icon-error.svg) no-repeat scroll; background-position: 95% center;'
        e.preventDefault();
    } else {
        password_error.innerText = '';
        password.style = 'border-color: #eee; margin-bottom: 0;'
    }
});