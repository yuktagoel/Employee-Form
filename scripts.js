var Name = document.getElementById("name");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var email = document.getElementById("email");
var address = document.getElementById("address");
var form = document.getElementById("form");
var gender = document.getElementById("gender");
var Status = document.getElementById("status");
var pic = document.getElementById("pic");
var age = document.getElementById("age");
var city = document.getElementById("city");
var state = document.getElementById("state");
var zip = document.getElementById("zip");
var country = document.getElementById("country");
var box = document.getElementById("box");
var errorname = document.getElementById("errorname");
var errorElement = document.getElementById("errorname");
var errorpass = document.getElementById("errorpass");
var errorpass2 = document.getElementById("errorpass2");
form.addEventListener('submit', function (e) {
    var messages = [];
    if (Name.value == null || Name.value === "") {
        messages.push("Name required");
        errorname.innerText = messages.join(', ');
    }
    else if (password.value === null || password.value === "") {
        messages.push("Password cannot be empty");
        errorpass.innerText = messages.join(', ');
    }
    else if (password.value.length <= 8) {
        messages.push("Password must be longer than 8 characters");
        errorpass.innerText = messages.join(', ');
    }
    else if (password.value !== password2.value) {
        messages.push("Re-enter correct password");
        errorpass2.innerText = messages.join(', ');
    }
    else if (Status.value == "Select") {
        messages.push("select a role");
    }
    if (messages.length > 0) {
        e.preventDefault();
    }
});
