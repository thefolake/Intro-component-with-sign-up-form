function validateEmail(email) {
        var re =  /^\S+@\S+$/;
        return re.test(email);
}

function validateInput() {
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    let firstNameError = document.getElementById('first-name-error-msg');
    let lastNameError = document.getElementById('last-name-error-msg');
    let emailError = document.getElementById('email-error-msg');
    let passwordError = document.getElementById('password-error-msg');

    if (firstName.value.trim() === '' || firstName.value.trim() === 'null') {
        firstName.classList.add('warning');
        firstNameError.classList.remove('hidden');
    } else {
        firstNameError.classList.add('hidden');
        firstName.classList.remove('warning');
    }

    if (lastName.value.trim() === '' || lastName.value.trim() === 'null') {
        lastName.classList.add('warning');
        lastNameError.classList.remove('hidden');
    } else {
        lastNameError.classList.add('hidden');
        lastName.classList.remove('warning');
    }

    if (email.value.trim() === '' || email.value.trim() === 'null' || !validateEmail(email.value)) {
        email.classList.add('warning');
        emailError.classList.remove('hidden');
    } else {
        emailError.classList.add('hidden');
        email.classList.remove('warning');
    }

    if (password.value.trim() === '' || password.value.trim() === 'null') {
        password.classList.add('warning');
        passwordError.classList.remove('hidden');
    } else {
        passwordError.classList.add('hidden');
        password.classList.remove('warning');
    }

    firstName.addEventListener('keyup', () => {
        firstName.classList.remove('warning')
        firstNameError.classList.add('hidden')
    });
    
    lastName.addEventListener('keyup', () => {
        lastName.classList.remove('warning')
        lastNameError.classList.add('hidden')
    });

    email.addEventListener('keyup', () => {
        email.classList.remove('warning')
        emailError.classList.add('hidden')
    });

    password.addEventListener('keyup', () => {
        password.classList.remove('warning')
        passwordError.classList.add('hidden')
    });
}
