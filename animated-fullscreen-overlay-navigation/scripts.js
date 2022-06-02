function activatePushRightAnimation() {
  var $overlay = document.querySelector('.overlay--push-right');
  $overlay.style.width = '100%';
}

function deactivatePushRightAnimation() {
  var $overlay = document.querySelector('.overlay--push-right');
  $overlay.style.width = '0';
}

function activateSlideDownAnimation() {
  var $overlay = document.querySelector('.overlay--slide-down');
  $overlay.style.height = '100%';
}

function deactivateSlideDownAnimation() {
  var $overlay = document.querySelector('.overlay--slide-down');
  $overlay.style.height = '0';
}


function openNav() {
  //activatePushRightAnimation(); // active the push to right animation
  activateSlideDownAnimation();
}

function closeNav() {
  //deactivatePushRightAnimation() // deactive the push to right animation
  deactivateSlideDownAnimation();
}
