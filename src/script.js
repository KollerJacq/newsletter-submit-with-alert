const cardSuccess = document.querySelector(".card-success");
const container = document.querySelector(".container");
const form = document.querySelector("form");
const email = document.getElementById("email").value;

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

if (!isValidEmail(email.value)) {
  email.classList.add("error-sign");
  return;
}

container.classList.add("hidden");
cardSuccess.classList.remove("hidden");

function isValidEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

const button = document.querySelector(".card-success button");

button.addEventListener("click", () => {
  cardSuccess.classList.add("hidden");
  CSSContainerRule.classList.remove("hidden");

  form.reset();
});
