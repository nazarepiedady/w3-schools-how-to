function myFunction() {
  var input, filter, ul, li, a, i;

  input = document.getElementById('mySearch');
  filter = input.value.toUpperCase();
  ul = document.getElementById('myMenu');
  li = ul.getElementsByClassName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0];

    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    }

  }

}
