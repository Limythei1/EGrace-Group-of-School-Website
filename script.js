// ===============================
// GALLERY
// ===============================

const slides = document.querySelectorAll(".gallery-slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>slide.classList.remove("active"));
    dots.forEach(dot=>dot.classList.remove("active"));

    if(index>=slides.length){
        currentSlide=0;
    }

    if(index<0){
        currentSlide=slides.length-1;
    }

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

}

nextBtn.addEventListener("click",()=>{

    currentSlide++;

    showSlide(currentSlide);

});

prevBtn.addEventListener("click",()=>{

    currentSlide--;

    showSlide(currentSlide);

});

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide=index;

        showSlide(currentSlide);

    });

});

showSlide(currentSlide);


// ===============================
// AUTO SLIDE
// ===============================

setInterval(()=>{

    currentSlide++;

    showSlide(currentSlide);

},5000);


// ===============================
// MOBILE MENU
// ===============================

const menuToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});