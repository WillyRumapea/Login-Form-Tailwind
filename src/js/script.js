const checkbox = document.getElementById("checkbox");
const passwordInput = document.getElementById("password");

checkbox.addEventListener("click", () => {
  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
});
