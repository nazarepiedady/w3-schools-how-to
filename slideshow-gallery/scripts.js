var slideDefaultIndex = 1;

function previousSlide() {
  showSlide(slideDefaultIndex += -1);
}

function nextSlide() {
  showSlide(slideDefaultIndex += 1);
}
