var defaultSlideIndex = 1;
//showSlide(slideIndex);


function showSlide(slideIndex) {
  var slides = document.getElementsByClassName('slide');
  var dotButtons = document.getElementsByClassName('dot-button');

  if (slideIndex > slides.length) {
    defaultSlideIndex = 1;
  }

  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (var index = 0; index < dotButtons.length; index++) {
    dotButtons[index].className =
      dotButtons[index].className.replace(' dot-button-active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dotButtons[slideIndex - 1].className += ' dot-button-active';
}

function previousSlide() {
  showSlide(slideIndex += -1);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function currentSlide(index) {
  showSlide(slideIndex = index);
}
