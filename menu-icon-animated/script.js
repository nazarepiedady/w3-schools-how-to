(function init() {
  function activeMenu(event) {
    var $target = event.target;
    $target.classList.toggle('menu-icon--active');
  }

  var $menuIcon = document.querySelector('.menu-icon');

  $menuIcon.addEventListener('click', activeMenu);
})();
