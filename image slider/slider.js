const slides = document.querySelectorAll("#slide");
let counter = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

function prew() {
    counter--;
    sliseImage();
}

function next() {
    counter++;
    sliseImage();
}

const sliseImage = () => {
    if (counter < 0) {
        counter = slides.length - 1; // Wrap to the last image if counter goes below 0
    } else if (counter >= slides.length) {
        counter = 0; // Wrap to the first image if counter exceeds the number of slides
    }

    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}
