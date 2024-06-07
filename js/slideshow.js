function init() {
    hideSlides();
    showSlide(0);
    setInterval(doSomething, 2000);
}

function showSlide(index) {
    let slides;
    slides = document.querySelectorAll('ul.slideShowMaster li');
    slides[index].style.opacity = "1";
    slides[index].classList.toggle("active");
}
function changeSlide(index){
    let targetSlideNumber, slides;
    slides = document.querySelectorAll('ul.slideShowMaster li');

    if (index === undefined) {
        targetSlideNumber = getRandomInt(0, slides.length);
        console.log("[SlideShow] Warning | Paramert 'Index' of changeSlide function is not provided. Function selected:", targetSlideNumber, " as random index from range (", slides.length  ,").")
    }
    else if (index < 0 || index >= slides.length){
        targetSlideNumber = getRandomInt(0, slides.length);
        console.log("[SlideShow] Warning | Paramert 'Index' of changeSlide function is out of scope. Function selected:", targetSlideNumber, "as random slide from range (", slides.length ,").");
    }
    else { targetSlideNumber = index }

    hideSlides();
    showSlide(targetSlideNumber);
}
function hideSlides() {
    let slides = document.querySelectorAll('ul.slideShowMaster li');
    slides.forEach((slide) => {
        slide.style.opacity = 0;
        slide.classList.remove("active");
    }) 
}

function doSomething(){
    let slides, activeElement;
    slides = document.querySelectorAll('ul.slideShowMaster li');
    activeElement = document.querySelector('ul.slideShowMaster li.active')
    console.log(slides);
    console.log(activeElement.nextElementSibling);
    if (activeElement.nextElementSibling === null){
        console.log("you reach toend of slides, next one will be the first of all");
    }
}




function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
init();