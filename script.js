// const left = document.querySelector('.left');
// const right = document.querySelector('.right');
// const slider = document.querySelector('.slider');
// const img = document.querySelectorAll('.s-img');

// let slideNum = 1;
// const len = img.length;

// const nextSlide = () => {
//     if(slideNum < len) {
//         slider.style.transform = `translateX(-${slideNum * 1000}px)`;
//         slideNum++;
//     }
// }

// const prevSlide = () => {
//     if(slideNum > 1) {
//         slider.style.transform = `translateX(-${(slideNum - 2) * 1000}px)`;
//         slideNum--;
//     }
// }

// right.addEventListener('click', () => {
//     nextSlide();
// });

// left.addEventListener('click', () => {
//     prevSlide();
// });

const year = document.getElementById("year");
const currentYear = new Date().getFullYear();
year.setAttribute("datetime", currentYear);
year.textContent = currentYear;