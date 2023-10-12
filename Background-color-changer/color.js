
const btn = document.getElementById("btn");
const para = document.getElementById("para");

//create function for change the color
const changeColor = () => {
    let randNum = Math.floor(Math.random() * 1677215);
    let randColor = `#${randNum}`.toString(16);
    // console.log(randColor);
    // console.log(randNum);
    document.body.style.backgroundColor = randColor;
    para.innerText = `Color code : ${randColor}`;
    
};

//change color click on the button
btn.addEventListener("click",changeColor);
changeColor();