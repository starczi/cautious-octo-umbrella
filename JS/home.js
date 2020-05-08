// JavaScript source code
const app = {
    firstName: document.getElementById("firstName"),
    surname: document.getElementById("surname"),
    email: document.getElementById("email"),
    textarea: document.getElementById("textarea")
}

const button = document.getElementById("btn");

button.addEventListener("click", function() {
    ClearForm();
    alert("Message Sent!");
});

function ClearForm() {
    app.firstName.value = "";
    app.surname.value = "";
    app.email.value = "";
    app.textarea.value = "";
}