function activatePushRightAnimation() {
  var $overlay = document.querySelector('.overlay--push-right');
  $overlay.style.width = '100%';
}

function deactivatePushRightAnimation() {
  var $overlay = document.querySelector('.overlay--push-right');
  $overlay.style.width = '0';
}


function openNav() {
  activatePushRightAnimation(); // active the push to right animation
  //document.getElementById('navigation').style.width = '100%';
}

function closeNav() {
  //deactivatePushRightAnimation() // deactive the push to right animation
  //document.getElementById('navigation').style.width = '0';
}
