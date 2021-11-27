const signinBtn = document.querySelector(".signinBtn");
const signupBtn = document.querySelector(".signupBtn");
const formbox = document.querySelector(".formbox");
const body = document.querySelector("body");

signupBtn.onclick = () => {
  formbox.classList.add("active");
  body.classList.add("active");
};
signinBtn.onclick = () => {
  formbox.classList.remove("active");
  body.classList.remove("active");
};

