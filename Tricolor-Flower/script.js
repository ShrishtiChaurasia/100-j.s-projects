let container = document.querySelector(".container");
// select container
let leaf = document.querySelector(".leaf");
//seclect every leaf

//create a function that help to create multiple leafs
const leafCreation = (colors) => {
  let leafs = document.createElement("div");
  leafs.setAttribute("class", "leaf");
  leafs.style.backgroundColor = "white";
  leafs.classList.add("animation");
  container.appendChild(leafs);
};

//total no of leafs created
for (let i = 0; i < 35; i++) {
  leafCreation("grey");
}
//make array that hold every leaf
let allLeafs = Array.from($(".container").find(".leaf"));

//go to every single leaf
allLeafs.forEach((single, index) => {
  let time = new TimelineMax({});
  index = index + 1;
  let rotate = (360 / 18) * index;

  time.to(single, 7, {
    rotation: rotate + "deg",
    backgroundColor: "black",
    opacity: 0.2,
  });
});
