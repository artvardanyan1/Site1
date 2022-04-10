//Responsive menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function(){
    menu.classList.toggle('active');
    burger.classList.toggle('active')
})
////////

//Scroll Animation
const header = document.querySelector('header');

window.addEventListener('scroll', function(){
    if(this.window.pageYOffset>10){
        header.classList.add('scroll');
    }
    else{
        header.classList.remove('scroll')
    }
})
/////////


//Slider
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let slideIndex = 1;
showSlides(slideIndex);

//Prev slide
prev.addEventListener('click', function(n){
    n=-1;
    showSlides(slideIndex += n);
});
// Next slide
next.addEventListener('click', function(n){
    n=1;
    showSlides(slideIndex += n);
});


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
///////////

//View more
const viewbtn = document.querySelector('.view-more');
const cards = document.querySelectorAll('.hiden-card');
const card3 = document.querySelector('#card-3')

cards.forEach(function(item){
    viewbtn.addEventListener('click', function(){
        item.classList.toggle('hiden-card')
    })
})
///////////