// Checking username and password (simple)
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = form.username.value;
    const password = form.password.value;

    const authenticated = authentication(username, password);

    if(authenticated) {
        alert("Authentication successful!");
        window.location.href = "menu2.html";
    }
    else {
        alert("Wrong Credentials");
    }

})

let storageUsername = localStorage.getItem('Username');
let storagePassword = localStorage.getItem('Password');

function authentication(username, password) {
    if(username === storageUsername && password === storagePassword){
        return true;
    }
    else {
        return false;
    }
}