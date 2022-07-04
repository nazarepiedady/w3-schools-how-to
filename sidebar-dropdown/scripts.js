var index = 0;
var dropdowns = document.getElementsByClassName('dropdown-button');

for (index = 0; index < dropdowns.length; index++) {
  dropdowns[index].addEventListener('click', function showDropdownMenu() {
    this.classList.toggle('active');
    var $dropdownContent = this.nextElementSibling;
    if ($dropdownContent.style.display === 'block') {
      $dropdownContent.style.display = 'none';
    } else {
      $dropdownContent.style.display = 'block';
    }
  });
}
