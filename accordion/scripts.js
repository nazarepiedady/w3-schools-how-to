var $accordionList = document.getElementsByClassName('accordion');


for (var index = 0; index < $accordionList.length; index++) {
  $accordionList[index].addEventListener('click', function() {
    var $painel = this.nextElementSibling;
    this.classList.toggle('accordion--active');
    if ($painel.style.display === 'block') {
      $painel.style.display = 'none';
    } else {
      $painel.style.display = 'block';
    }
  });
}
