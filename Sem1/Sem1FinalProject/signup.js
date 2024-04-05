let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validation();
});

const setError = (ele, msg) => {
    let box = ele.parentElement;
    let error = box.querySelector(".error");

    error.innerText = msg;
    box.classList.add("error");
    box.classList.remove("success");
};
const setSuccess = (ele) => {
    let box = ele.parentElement;
    let error = box.querySelector(".error");

    error.innerText = "";
    box.classList.add("success");
    box.classList.remove("error");
};

// validate all the information
function validation() {
    let user = username.value.trim();
    let pass1 = password.value.trim();
    let pass2 = password2.value.trim();

    localStorage.setItem("Username", user);
    localStorage.setItem("Password", pass1);
    localStorage.setItem("Cpassword", pass2);

    // validate username
    if (user === "") {
        setError(username, "Username is required");
    } else if (!userFormat(user)) {
        setError(username, "Digital are not allowed");
    } else {
        setSuccess(username);
    }
    // validate password
    if (pass1 === "") {
        setError(password, "Password is required");
    } else if (!passFormat(pass1)) {
        setError(password, "Password must be a minimum of 8 characters including number, Upper, Lower And one special character");
    } else {
        setSuccess(password);
    }

    // validate second password
    if (pass2 === "") {
        setError(password2, "Please confirm your password");
    } else if (pass2 != pass1) {
        setError(password2, "Passwords does't match");
    } else {
        setSuccess(password2);
    }
}

















// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });



// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// const setSuccess = (element) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();

//     // storing in local storage. (new code)
//     localStorage.setItem("Username", usernameValue);
//     localStorage.setItem("Password", passwordValue);
//     localStorage.setItem("Cpassword", password2Value);
//     // CHECK USERNAME
//     if (usernameValue === '') {
//         setError(username, 'Username is required');
//     }
//     else {
//         setSuccess(username);
//     }
//     // CHECK PASSWORD
//     if (passwordValue === '') {
//         setError(password, 'Password is required');
//     }
//     else if (passwordValue.length < 8) {
//         setError(password, 'Password must be at least 8 character.')
//     }
//     else {
//         setSuccess(password)
//     }
//     // CHECK PASSWORD AGAIN
//     if (password2Value === '') {
//         setError(password2, 'Password is required');
//     }
//     else if (password2Value !== passwordValue) {
//         setError(password2, "Password doesn't match")
//     }
//     else {
//         setSuccess(password2);
//     }
// }

