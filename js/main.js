let slideIndex = 0;
slideShow();

function slideShow() {
  let i;
  let slides = document.querySelectorAll('ul.slideShowMaster li');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.opacity = "1";
  setTimeout(slideShow, 10000); // Change image every 2 seconds
}

