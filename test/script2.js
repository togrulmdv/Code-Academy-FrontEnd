document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleSubmit);
});

function validateForm() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    let isValid = true;

    if (usernameInput.validity.valueMissing || usernameInput.value.length < 3 || usernameInput.value.length > 15) {
        showError(usernameInput);
        isValid = false;
    } else {
        hideError(usernameInput);
    }

    if (passwordInput.validity.valueMissing || passwordInput.value.length > 6) {
        showError(passwordInput);
        isValid = false;
    } else {
        hideError(passwordInput);
    }

    if (confirmPasswordInput.validity.valueMissing || passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput);
        isValid = false;
    } else {
        hideError(confirmPasswordInput);
    }

    return isValid;
}

function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formResults = document.getElementById('formResults');
    const resultElement = document.createElement('div');
    resultElement.textContent = `Username: ${username}, Email: ${email}, Password: ${password}`;

    formResults.appendChild(resultElement);

    document.getElementById('loginForm').reset();
}

function showError(input) {
    input.classList.add('error');
}

function hideError(input) {
    input.classList.remove('error');
}


// function validateForm() {
//     const inputs = [
//         { id: 'username', minLength: 3, maxLength: 15, errorMessage: 'Username must be between 3 and 15 characters' },
//         { id: 'email', regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errorMessage: 'Email is not valid' },
//         { id: 'password', maxLength: 6, errorMessage: 'Password must be 6 characters or less' },
//         { id: 'confirmPassword', customValidator: (value, form) => value === form.password.value, errorMessage: 'Passwords do not match' }
//     ];

//     let isValid = true;

//     inputs.forEach(input => {
//         const inputElement = document.getElementById(input.id);
//         const errorLabel = document.querySelector(`label[for="${input.id}"]`);

//         if (input.minLength && inputElement.value.length < input.minLength || input.maxLength && inputElement.value.length > input.maxLength) {
//             inputElement.classList.add('error');
//             errorLabel.innerHTML = input.errorMessage;
//             isValid = false;
//         } else if (input.regex && !input.regex.test(inputElement.value)) {
//             inputElement.classList.add('error');
//             errorLabel.innerHTML = input.errorMessage;
//             isValid = false;
//         } else if (input.customValidator && !input.customValidator(inputElement.value, form)) {
//             inputElement.classList.add('error');
//             errorLabel.innerHTML = input.errorMessage;
//             isValid = false;
//         } else {
//             inputElement.classList.remove('error');
//             errorLabel.innerHTML = "";
//         }
//     });

//     return isValid;
// }


// function validateForm() {
//     const fields = [
//         { id: 'username', minLength: 3, maxLength: 15, errorMessage: 'Username must be between 3 and 15 characters' },
//         { id: 'password', minLength: 0, maxLength: 6, errorMessage: 'Password must be 6 characters or less' },
//         { id: 'confirmPassword', minLength: 0, maxLength: Infinity, errorMessage: 'Passwords do not match' }
//     ];

//     let isValid = true;

//     fields.forEach(field => {
//         const input = document.getElementById(field.id);
//         const errorLabel = document.querySelector(`[data-error-for="${field.id}"]`);

//         if (input.value.length < field.minLength || input.value.length > field.maxLength) {
//             input.classList.add('error');
//             errorLabel.innerHTML = field.errorMessage;
//             isValid = false;
//         } else {
//             input.classList.remove('error');
//             errorLabel.innerHTML = '';
//         }
//     });

//     return isValid;
// }


// function togglePasswordVisibility() {
//     const password = document.getElementById('password');
//     const eye = document.getElementById('eye');
//     const eyeSlash = document.getElementById('eye-slash');
//     if (password.type === 'password') {
//         password.type = 'text';
//         eye.style.display = 'block';
//         eyeSlash.style.display = 'none';
//     } else {
//         password.type = 'password';
//         eye.style.display = 'none';
//         eyeSlash.style.display = 'block';
//     }
// }