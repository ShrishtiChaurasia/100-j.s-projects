let mousestartAtX = 0;
let mousestartAtY = 0;
let mouseendAtX = window.innerWidth;
let currentXPosition = 0;
let fractionalXvalue = 0;
let pupilstartPoint = -50;
let pupilrange = 100;

let mouseendAtY = window.innerHeight;
let currentYPosition = 0;
let fractionalYvalue = 0;
let mouseXrange = mouseendAtX - mousestartAtX;
let mouseYrange = mouseendAtY - mousestartAtY;

let pupils = document.getElementsByClassName("pupil");
let pupilArr = Array.from(pupils);

function mouseMove(e){
   currentXPosition = e.clientX - mousestartAtX;
   fractionalXvalue = currentXPosition / mouseXrange;

   currentYPosition = e.clientY - mousestartAtY;
   fractionalYvalue = currentYPosition / mouseYrange;

   let pupilcurrentpos = pupilstartPoint + (fractionalXvalue * pupilrange);
   let pupilcurrentposs = pupilstartPoint + (fractionalYvalue * pupilrange);

   pupilArr.forEach((currentpupil) => {
    currentpupil.style.transform = `translate(${pupilcurrentpos}px, ${pupilcurrentposs}px)`;
   });
}

function mouseresize(e){
    mouseendAtX = window.innerWidth;
    mouseendAtY = window.innerHeight;
    mouseXrange = mouseendAtX - mousestartAtX;
    mouseYrange = mouseendAtY - mousestartAtY;
}

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", mouseresize);
