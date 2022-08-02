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
