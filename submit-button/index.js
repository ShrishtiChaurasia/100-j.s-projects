const btn = document.querySelector(".btn");
const span = document.querySelector("span");

btn.addEventListener("click",() => {
  let body = document.body;
  body.style.background = " rgb(60, 60, 203)";
  btn.innerHTML = "SUBMITTED";
  btn.style.animation = "animate 0.6s ease";
  span.innerText = "Your Data Is Submitted";
});