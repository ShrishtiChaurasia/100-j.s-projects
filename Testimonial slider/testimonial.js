const images = document.querySelectorAll(".images");
        const btn = document.querySelectorAll(".btn");
        console.log(btn);
        let count = 0;

        images.forEach(
            (slide,index) => {
                slide.style.left = `${index*100}%`;
            }
        )

        function back(){
            count--;
            testimonialImages();
        }

        function noback(){
            count++;
            testimonialImages();
        }

        const testimonialImages = () => {
            if(count < 0){
                count = images.length - 1; 
            }else if(count >= images.length){
                count = 0;
            }
            images.forEach(
                (slide) => {
                    slide.style.transform = `translateX(-${count * 100}%)`;
                }
            )
        }

        btn[0].onclick = function(){
           count = 0;
           testimonialImages();
        }
        btn[1].onclick = function(){
            count = 1;
            testimonialImages();
        }
        btn[2].onclick = function(){
            count = 2;
            testimonialImages();
        }
        btn[3].onclick = function(){
            count = 3;
            testimonialImages();
        }