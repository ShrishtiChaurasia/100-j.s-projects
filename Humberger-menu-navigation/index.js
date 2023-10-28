// function changeColor(color,delay,nxtclr){
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         if(nxtclr) nxtclr();
//     },1000);
// }

//     changeColor("blue",1000,() => {
//         console.log(changeColor.length);
//         changeColor("purple",1000,() => {
//             console.log(changeColor.length + 1);

//             changeColor("orange",1000,() =>{
//                 console.log(changeColor.length+2);

//             });
//         });
//     });
let container = document.querySelector(".container");

container.addEventListener("click",() => {
  container.classList.toggle("open");
})