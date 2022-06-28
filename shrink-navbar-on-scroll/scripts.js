function shrinkNavBarOnScroll() {
  var $body = document.body;
  var $document = document.documentElement;
  var $logo = document.getElementById('logo');
  var $navbar = document.getElementById('navbar');

  if ($body.scrollTop > 80 || $document.scrollTop > 80) {
    $logo.style.fontSize = '25px';
    $navbar.style.padding = '30px 10px';
  } else {
    $logo.style.fontSize = '35px';
    $navbar.style.padding = '80px 10px';
  }
}
