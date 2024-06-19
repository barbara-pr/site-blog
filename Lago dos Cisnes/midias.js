const slides = document.querySelector('.slides')
const slideImages = document.querySelectorAll('.slide')
const prevButton = document.querySelector('.control-prev')
const nextButton = document.querySelector('.control-next')

let currentIndex = 0
const totalSlides = slideImages.length

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0
    } else if (index < 0) {
        currentIndex = totalSlides - 1
    } else {
        currentIndex = index
    }
    slides.style.transform = `translateX(${-currentIndex * 100}%)`
}

function nextSlide() {
    showSlide(currentIndex + 1)
}

function prevSlide() {
    showSlide(currentIndex - 1)
}

nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', prevSlide)