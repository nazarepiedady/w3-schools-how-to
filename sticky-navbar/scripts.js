function stickyMenuToTopOnScroll() {
  var $navbar = document.getElementById('navbar');
  var stickyOffset = $navbar.offsetTop;

  if (window.pageYOffset >= stickyOffset) {
    $navbar.classList.add('sticky');
  } else {
    $navbar.classList.remove('sticky');
  }
}

window.onscroll = function() {
  stickyMenuToTopOnScroll();
};
