function openPage(pageName, $element, color) {
  var $tabcontent = document.getElementsByClassName('tabcontent');
  for (var index = 0; index < $tabcontent.length; index++) {
    $tabcontent[index].style.display = 'none';
  }

  var $tablinks = document.getElementsByClassName('tablink');
  for (var index = 0; index < $tablinks.length; i++) {
    $tablinks[index].style.backgroundColor = '';
  }

  document.getElementById(pageName).style.display = 'block';
  $element.style.backgroundColor = color;
}
