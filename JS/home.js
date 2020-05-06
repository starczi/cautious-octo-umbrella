// JavaScript source code
const app = {
    firstName: document.getElementById("firstName"),
    surname: document.getElementById("surname"),
    email: document.getElementById("email")
}

const button = document.getElementsByClassName("btn");

button.addEventListener("click", function() {
    console.log('click');
    ClearText
    alert("Message Sent!");
});

function ClearText() {
    app.firstName.textContent.clear();
    app.surname.textContent.clear();
    app.email.textContent.clear();
}