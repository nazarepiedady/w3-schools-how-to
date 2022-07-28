var slideDefaultIndex = 1;

function previousSlide() {
  showSlide(slideDefaultIndex += -1);
}

function nextSlide() {
  showSlide(slideDefaultIndex += 1);
}

function currentSlide(slideIndex) {
  showSlide(slideDefaultIndex = slideIndex);
}

function showSlide(slideIndex) {
  var slides = document.getElementsByClassName('slide');
  var thumbs = document.getElementsByClassName('demo-image');
  var $slideCaption = document.getElementById('slide-caption');

  if (slideIndex > slides.length) {
    slideDefaultIndex = 1;
  }

  if (slideIndex < 1) {
    slideDefaultIndex = slides.length;
  }

  for (var index = 0; index < slides.length; index++) {
    slides[index].style.display = 'none';
  }

  for (var index = 0; index < thumbs.length; index++) {
    thumbs[index].className = thumbs[index].className.replace(' active', '');
  }

  slides[slideDefaultIndex - 1].style.display = 'block';
  thumbs[slideDefaultIndex - 1].className += ' active';
  $slideCaption.textContent = thumbs[defaultSlideIndex - 1].alt;
}
