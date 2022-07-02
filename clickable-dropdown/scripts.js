function showDropdownMenu() {
  var $dropdownMenu = document.getElementById('dropdown-menu');
  $dropdownMenu.classList.toggle('show-menu');
}

window.onclick = function hideDropdownMenu(event) {
  if (!event.target.matches('.drop-button')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for (var index = 0; index < dropdowns.length; index++) {
      var $openedDropdown = dropdowns[index];
      if ($openedDropdown.classList.contains('show-menu')) {
        $openedDropdown.classList.remove('show-menu');
      }
    }
  }
};
