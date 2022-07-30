var $modal = document.getElementById('modal');
var $modalImage = document.getElementById('modal-image');
var $modalCaption = document.getElementById('modal-caption');
var $thumbnailImage = document.getElementById('thumbnail-image');
var $modalCloseButton = document.getElementById('modal-close-button');


$thumbnailImage.onclick = function showModal() {
  $modalImage.src = this.src;
  $modal.style.display = 'block';
  $modalCaption.textContent = this.alt;
};

$modalCloseButton.onclick = function hideModal() {
  $modal.style.display = 'none';
}
