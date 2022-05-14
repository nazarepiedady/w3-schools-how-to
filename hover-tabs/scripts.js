function openCity(event, cityName) {
  var $tabcontent = document.getElementsByClassName('tabcontent');
  for (var index = 0; index < $tabcontent.length; index++) {
    $tabcontent[index].style.display = 'none';
  }

  var $tablinks = document.getElementsByClassName('tablinks');
  for (var index = 0; index < $tablinks.length; index++) {
    $tablinks[index].className = $tablinks[index].className.replace(' active', '');
  }

  document.getElementById(cityName).style.display = 'block';
  event.currentTarget.className += ' active';
}
