let pi = Math.PI * 2;
let speed = 0.05;
let breaking = 0.15;

let person_to_follow = {
    x: 0,
    y: 0,
    render: () => {
        specificationofcircles(person_to_follow.x, person_to_follow.y, "red");
    }
};

let first_circle = {
    positionAtX: 0,
    positionAtY: 0,
    velocityAtX: 0,
    velocityAtY: 0,
    accelerationAtX: 0,
    accelerationAtY: 0,
    render: () => {
        specificationofcircles(first_circle.positionAtX, first_circle.positionAtY, "black");
    },
    update: () => {
        first_circle.accelerationAtX = (person_to_follow.x - first_circle.positionAtX) * speed;
        first_circle.accelerationAtY = (person_to_follow.y - first_circle.positionAtY) * speed;

        first_circle.positionAtX += first_circle.velocityAtX;
        first_circle.positionAtY += first_circle.velocityAtY;

        first_circle.velocityAtX += first_circle.accelerationAtX;
        first_circle.velocityAtY += first_circle.accelerationAtY;
        first_circle.velocityAtX *= 0.9 - breaking;
        first_circle.velocityAtY *= 0.9 - breaking;
    }
};

let second_circle = {
    positionAtX: 0,
    positionAtY: 0,
    velocityAtX: 0,
    velocityAtY: 0,
    accelerationAtX: 0,
    accelerationAtY: 0,
    render: () => {
        specificationofcircles(second_circle.positionAtX, second_circle.positionAtY, "green");
    },
    update: () => {
        second_circle.accelerationAtX = (person_to_follow.x - second_circle.positionAtX) * speed;
        second_circle.accelerationAtY = (person_to_follow.y - second_circle.positionAtY) * speed;

        second_circle.positionAtX += second_circle.velocityAtX;
        second_circle.positionAtY += second_circle.velocityAtY;

        second_circle.velocityAtX += second_circle.accelerationAtX;
        second_circle.velocityAtY += second_circle.accelerationAtY;
        second_circle.velocityAtX *= 0.7 - breaking;
        second_circle.velocityAtY *= 0.7 - breaking;
    }
};

let third_circle = {
    positionAtX: 0,
    positionAtY: 0,
    velocityAtX: 0,
    velocityAtY: 0,
    accelerationAtX: 0,
    accelerationAtY: 0,
    render: () => {
        specificationofcircles(third_circle.positionAtX, third_circle.positionAtY, "blue");
    },
    update: () => {
        third_circle.accelerationAtX = (person_to_follow.x - third_circle.positionAtX) * speed;
        third_circle.accelerationAtY = (person_to_follow.y - third_circle.positionAtY) * speed;

        third_circle.positionAtX += third_circle.velocityAtX;
        third_circle.positionAtY += third_circle.velocityAtY;

        third_circle.velocityAtX += third_circle.accelerationAtX;
        third_circle.velocityAtY += third_circle.accelerationAtY;
        third_circle.velocityAtX *= 0.9 - breaking;
        third_circle.velocityAtY *= 0.9 - breaking;
    }
};

let canvas, ctx, widthofCanvas, heightofCanvas;

let letsgetstarted = () => {
    document.body.onmousemove = function(e){
        person_to_follow.x = e.pageX;
        person_to_follow.y = e.pageY;
    };

    canvas = document.createElement("canvas");
    widthofCanvas = canvas.width = window.innerWidth - 20;
    heightofCanvas = canvas.height = window.innerHeight - 20;
    ctx = canvas.getContext("2d");

    first_circle.positionAtX = widthofCanvas / 2;
    first_circle.positionAtY = heightofCanvas / 2;
    first_circle.positionAtX += 100;
    first_circle.velocityAtX = -5;
    first_circle.velocityAtY = 2;

    second_circle.positionAtX = widthofCanvas / 2;
    second_circle.positionAtY = heightofCanvas / 2;
    second_circle.positionAtX += 50;
    second_circle.velocityAtX = 2;
    second_circle.velocityAtY = -5;

    third_circle.positionAtX = widthofCanvas / 2;
    third_circle.positionAtY = heightofCanvas / 2;
    third_circle.positionAtX += 30;
    third_circle.velocityAtX = 4;
    third_circle.velocityAtY = -10;

    document.body.appendChild(canvas);
    animatingallowObjects();
};

document.addEventListener("DOMContentLoaded", letsgetstarted);

function animatingallowObjects() {
    ctx.clearRect(0, 0, widthofCanvas, heightofCanvas);

    first_circle.update();
    second_circle.update();
    third_circle.update();

    person_to_follow.render();

    first_circle.render();
    second_circle.render();
    third_circle.render();

    requestAnimationFrame(animatingallowObjects);
}

function specificationofcircles(x, y, fillstyle) {
    ctx.fillStyle = fillstyle;
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, pi);
    ctx.closePath();
    ctx.fill();
}
