function openCity(cityName, $element, color) {
  var $tabcontent = document.getElementsByClassName('tabcontent');
  for (var index = 0; index < $tabcontent.length; index++) {
    $tabcontent[index].style.display = 'none';
  }

  var $tablinks = document.getElementsByClassName('tablink');
  for (var index = 0; index < $tablinks.length; index++) {
    $tablinks[index].style.backgroundColor = '';
  }

  document.getElementById(cityName).style.display = 'block';
  $element.style.backgroundColor = color;
}

document.getElementById('defaultOpen').click();
