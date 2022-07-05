function showMenu() {
  var $topnavbar = document.getElementById('topnav');

  if ($topnavbar.className === 'topnav') {
    $topnavbar.className += ' responsive';
  } else {
    $topnavbar.className = 'topnav';
  }

}
