const signUpLink = document.querySelector(`nav a[href*="sign_up"]`);
const modalsContainer = document.querySelector(".modals_container");

const nav = document.querySelector("nav");
const submitButton = document.querySelector('button[type="submit"]');
// TO DO: review this https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors

signUpLink.addEventListener("click", function() {
  nav.style.display = "none";

  modalsContainer.style.marginTop = "30vh";

  modalsContainer.style.display = "block";

  submitButton.style.display = "none";

  UpdateFormFooter();
});

function UpdateFormFooter() {
  const stepDisabled = document.querySelector('a[href*="step1"]');

  // stepDisabled.addClass("disabled");
}

// FORM

const detailsLink = document.querySelector('a[href*="details"]');

const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
step2.style.display = "none";
step3.style.display = "none";

console.log(step2, step3);

// console.log(detailsLink);

detailsLink.addEventListener("click", function() {
  const form = document.querySelector("form");
  form.style.display = "block";

  const eltPresentChoice = document.querySelectorAll(".present_choice");

  console.log(eltPresentChoice);

  for (let i = 0; i < eltPresentChoice.length; i++) {
    eltPresentChoice[i].style.display = "none";
  }
});

// Close the modal
let close = document.getElementById("close");
close.addEventListener("click", function closeModal() {
  nav.style.display = "block";

  modalsContainer.style.display = "none";
});
