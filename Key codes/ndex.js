let container = document.querySelector(".container");

window.addEventListener("keydown", (e) => {
  container.innerHTML = `<div class="key-container"><h4>key</h4></div>
    ${e.key === " " ? "Space" : e.key}
    <div class="key-container"><h4>code</h4></div>${e.code}
    <div class="key-container"><h4>key code</h4></div>${e.keyCode}`;
});
