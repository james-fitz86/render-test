const form = document.querySelector("#newsletter-form");
const resultDiv = document.querySelector("#result");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    resultDiv.innerHTML="";

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const number = document.getElementById('phone').value;

    if(!name||!email||!password||!number){
        resultDiv.innerHTML = '<p class="error">All Fields are required.</p>';
    }else if (name.length < 3) {
        resultDiv.innerHTML = '<p class="error">Name must contain at least 3 characters</p>';
    }else if (!/[@]/.test(email)) {
        resultDiv.innerHTML = '<p class="error">Email must contain "@".</p>';
    }else if(number.charAt(0) !== '0'||number.length !== 10){
        resultDiv.innerHTML = '<p class="error">Phone number must begin with zero and contain 10 digits</p>';
    }else if(password.length < 8){
        resultDiv.innerHTML = '<p class="error">Password must be at least 8 characters.</p>';
    }else if (!/[!@#$%^&*]/.test(password)) {
        resultDiv.innerHTML = '<p class="error">Password must contain at least one of these special characters: !@#$%^&*</p>';
    }else if (!/[a-z]/.test(password)) {
        resultDiv.innerHTML = '<p class="error">Password must contain at least one lowercase letter</p>';
    }else if (!/[A-Z]/.test(password)) {
        resultDiv.innerHTML = '<p class="error">Password must contain at least one uppercase letter</p>';
    }else if (!/[0-9]/.test(password)) {
        resultDiv.innerHTML = '<p class="error">Password must contain at least one number</p>';
    }
    else{
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('phone').value = '';
        resultDiv.innerHTML = '<p class="success">Form submitted successfully, you will receive a confirmation email shortly!</p>';
    }
});

const nameInput = document.getElementById('name');
    
nameInput.addEventListener('focusout', function(e) {
    const value = e.target.value.trim();
    let newDiv = document.getElementById('newDiv');
    
    if (value.length < 3) {
        if (!newDiv) {
            newDiv = document.createElement('div');
            newDiv.id = 'newDiv';
            nameInput.insertAdjacentElement("afterend", newDiv);
        }
        newDiv.innerHTML = '<p class="error">Name must be at least 3 characters long.</p>';
    } else {
        if (newDiv) {
                newDiv.remove();
        }
    }
});

const emailInput = document.getElementById('email');
emailInput.addEventListener('focusout', function (e) {
    const value = e.target.value.trim();
    let newDiv = document.getElementById('email-error');

    if (!value.includes('@')) {
        if (!newDiv) {
            newDiv = document.createElement('div');
            newDiv.id = 'email-error';
            emailInput.insertAdjacentElement("afterend", newDiv);
        }
        newDiv.innerHTML = '<p class="error">Email must contain "@".</p>';
    } else {
        if (newDiv) {
            newDiv.remove();
        }
    }
});


const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('focusout', function (e) {
    const value = e.target.value.trim();
    let newDiv = document.getElementById('phone-error');

    if (value.length !== 10 || value.charAt(0) !== '0') {
        if (!newDiv) {
            newDiv = document.createElement('div');
            newDiv.id = 'phone-error';
            phoneInput.insertAdjacentElement("afterend", newDiv);
        }
        newDiv.innerHTML = '<p class="error">Phone number must be 10 digits and start with "0".</p>';
    } else {
        if (newDiv) {
            newDiv.remove();
        }
    }
});


const passwordInput = document.getElementById('password');
const passwordContainer = document.getElementById('password-container');
passwordInput.addEventListener('focusout', function (e) {
    const value = e.target.value.trim();
    let newDiv = document.getElementById('password-error');

    const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(value);
    
    if (!isValid) {
        if (!newDiv) {
            newDiv = document.createElement('div');
            newDiv.id = 'password-error';
            passwordContainer.appendChild(newDiv);
        }
        newDiv.innerHTML = '<p class="error">Password must be at least 8 characters, with 1 uppercase, 1 lowercase, 1 number, and 1 special character(!@#$%^&*).</p>';
    } else {
        if (newDiv) {
            newDiv.remove();
        }
    }
});
function togglePassword(event) {
    event.preventDefault();
    let passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}