var previousScrollPosition = window.pageYOffset;

function showNavbarOnScroll() {
  var $navbar = document.getElementById('navbar');
  var currentScrollPosition = window.pageYOffset;
  if (previousScrollPosition > currentScrollPosition) {
    $navbar.style.top = '0';
  } else {
    $navbar.style.top = '-50px';
  }
  previousScrollPosition = currentScrollPosition;
}
