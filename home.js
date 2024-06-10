const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const radioButtons = document.querySelectorAll('.radio-buttons input[type="radio"]');

let counter = 0;
const size = images[0].clientWidth;
const intervalTime = 3000;

function moveCarousel() {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    updateCarousel();
}

function updateCarousel() {
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    radioButtons[counter].checked = true;
}

function handleRadioChange(e) {
    counter = [...radioButtons].indexOf(e.target);
    updateCarousel();
}

radioButtons.forEach((radio, index) => {
    radio.style.setProperty('--slide-index', index);
    radio.addEventListener('change', handleRadioChange);
});

// Move carousel every intervalTime
setInterval(moveCarousel, intervalTime);

// Initialize the first slide
updateCarousel();




// let menu_icon = document.getElementsByClassName(".menu_icon");
// let mobile_box = document.getElementsByClassName(".mobile_box");

// menu_icon.onclick = function(){
    // menu_icon.classList.toggle("active");
    // mobile_box.classList.toggle("active");
// }

