const Name = document.getElementById("name") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const password2 = document.getElementById("password2") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const address = document.getElementById("address") as HTMLInputElement;
const form = document.getElementById("form") as HTMLDivElement;
const gender = document.getElementById("gender") as HTMLInputElement;
const Status = document.getElementById("status") as HTMLInputElement;
const pic = document.getElementById("pic") as HTMLInputElement;
const age = document.getElementById("age") as HTMLInputElement;
const city = document.getElementById("city") as HTMLInputElement;
const state = document.getElementById("state") as HTMLInputElement;
const zip = document.getElementById("zip") as HTMLInputElement;
const country = document.getElementById("country") as HTMLInputElement;
const box = document.getElementById("box") as HTMLInputElement;

let errorname = document.getElementById("errorname") as HTMLElement;
let errorElement = document.getElementById("errorname") as HTMLElement;
let errorpass = document.getElementById("errorpass") as HTMLElement;
let errorpass2 = document.getElementById("errorpass2") as HTMLElement;

form.addEventListener("submit", (e) => {
  let messages: string[] = [];
  if (Name.value == null || Name.value === "") {
    messages.push("Name required");
    errorname.innerText = messages.join(", ");
  } else if (password.value === null || password.value === "") {
    messages.push("Password cannot be empty");
    errorpass.innerText = messages.join(", ");
  } else if (password.value.length <= 8) {
    messages.push("Password must be longer than 8 characters");
    errorpass.innerText = messages.join(", ");
  } else if (password.value !== password2.value) {
    messages.push("Re-enter correct password");
    errorpass2.innerText = messages.join(", ");
  } else if (Status.value == "Select") {
    messages.push("select a role");
  }

  if (messages.length > 0) {
    e.preventDefault();
  }
});
