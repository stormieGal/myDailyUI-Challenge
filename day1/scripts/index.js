const signUpLink = document.querySelector(`nav a[href*="sign_up"]`);

// TO DO: review this https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors

// console.log(signUpLink);

signUpLink.addEventListener("click", function() {
  const modalsContainer = document.querySelector(".modals_container");

  modalsContainer.style.display = "block";
});
