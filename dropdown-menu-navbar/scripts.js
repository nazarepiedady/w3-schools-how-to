function showDropdownMenu() {
  var $dropdownMenu = document.getElementById('dropdown-menu');
  $dropdownMenu.classList.toggle('show-dropdown-menu');
}


window.onclick = function hideDropdownMenu(event) {
  if (!event.target.matches('.drop-button')) {
    var $dropdownMenu = document.getElementById('dropdown-menu');
    if ($dropdownMenu.classList.contains('show-dropdown-menu')) {
      $dropdownMenu.classList.remove('show-dropdown-menu');
    }
  }
}
