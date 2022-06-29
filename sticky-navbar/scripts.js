var $navbar = document.getElementById('navbar');
var stickyOffset = $navbar.offsetTop;

function stickyMenuToTopOnScroll() {
  if (window.pageYOffset >= stickyOffset) {
    $navbar.classList.add('sticky');
  } else {
    $navbar.classList.remove('sticky');
  }
}

window.onscroll = function() {
  stickyMenuToTopOnScroll();
};
