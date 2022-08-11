function showImage($image) {
  var $imageCaption = document.getElementById('image-caption');
  var $expandedImage = document.getElementById('expanded-image');
  $expandedImage.src = $image.src;
  $imageCaption.textContent = $image.alt;
  $expandedImage.parentElement.style.display = 'block';
}
