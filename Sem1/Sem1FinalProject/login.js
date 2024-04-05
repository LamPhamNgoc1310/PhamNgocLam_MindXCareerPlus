// Checking username and password (simple)
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = form.username.value;
    const password = form.password.value;

    const authenticated = authentication(username, password);

    if(authenticated) {
        alert("Authentication successful!");
        window.location.href = "menu.html";
    }
    else {
        alert("Wrong Credentials");
    }

})


function authentication(username, password) {
    if(username === "admin" && password === "password"){
        return true;
    }
    else {
        return false;
    }
}