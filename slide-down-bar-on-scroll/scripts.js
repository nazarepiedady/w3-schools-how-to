function showMenuOnScroll() {
  var bodyScrollTopNumber = document.body.scrollTop;
  var documentScrollTopNumber = document.documentElement.scrollTop;

  if (bodyScrollTopNumber > 20 || documentScrollTopNumber > 20) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-50px';
  }
}
