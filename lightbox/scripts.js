var slideDefaultIndex = 1;


function openModal() {
  var $modal = document.getElementById('modal');
  $modal.style.display = 'block';
}

function closeModal() {
  var $modal = document.getElementById('modal');
  $modal.style.display = 'none';
}

function previousSlide() {
  showSlide(slideDefaultIndex += -1);
}

function nextSlide() {
  showSlide(slideDefaultIndex += 1);
}

function showSlide(slideIndex) {
  var slides = document.getElementsByClassName('slide');
  var $slideCaption = document.getElementById('slide-caption');
  var thumbs = document.getElementsByClassName('thumbnail-image');

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
    thumbs[index].clalssName = thumbs[index].className.replace(' active', '');
  }

  slides[slideDefaultIndex - 1].style.display = 'block';
  thumbs[slideDefaultIndex - 1].className += 'active';
  $slideCaption.textContent = thumbs[slideDefaultIndex - 1].alt;
}
