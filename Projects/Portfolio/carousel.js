let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

console.log(totalSlides);
console.log(slides);

document.getElementById("carousel_btn_next").addEventListener("click", function(){
    moveToNext();
})
document.getElementById("carousel_btn_previous").addEventListener("click", function(){
    moveToPrevious();
})
function updateSlidePosition() {
    for (let slide of slides){
        slide.classList.remove("item_visible");
        slide.classList.add("item_hidden");
    }
    slides[slidePosition].classList.add("item_visible")
}
function moveToNext() {
    if (slidePosition === totalSlides -1) {
        slidePosition = 0;
    } else {
        slidePosition++
    }
    updateSlidePosition();
}

function moveToPrevious() {
    if (slidePosition === 0) {
        slidePosition = totalSlides -1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}