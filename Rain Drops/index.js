setInterval(fallRain,50);

function fallRain(){
    let container = document.querySelector(".container");

    const span = document.createElement("span");
    span.classList.add("contain");

    const drop = document.createElement("i");
    drop.classList.add("fas", "fa-tint");

    drop.style.fontSize = 20 + Math.random() * 40 + "px";
    span.style.left = Math.random() * window.innerWidth + "px";
    span.style.animationDuration = 1 + Math.random() * 3 + "s";

    span.appendChild(drop);
    container.appendChild(span);

    setTimeout(() => {
        span.remove();
    },5000);


}
