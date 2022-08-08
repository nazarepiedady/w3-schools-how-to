var columns = document.getElementsByClassName('column');

function showOneColumnGrid() {
  var columnsLength = columns.length;
  for (var index = 0; index < columnsLength; index++) {
    columns[index].style.flex = '100%';
  }
}

function showTwoColumnGrid() {
  var columnsLength = columns.length;
  for (var index = 0; index < columnsLength; index++) {
    columns[index].style.flex = '50%';
  }
}

function showFourColumnGrid() {
  var columnsLength = columns.length;
  for (var index = 0; index < columnsLength; index++) {
    columns[index].style.flex = '25%';
  }
}

function startHighlightButton() {
  var $header = document.getElementById('header');
  var buttons = $header.getElementsByClassName('button');
  var buttonsLength = buttons.length;

  function highlightButton() {
    var $current = $header.getElementsByClassName('active');
    $current[0].className = $current[0].className.replace(' active', '');
    this.className += ' active';
  }

  for (var index = 0; index < buttonsLength; index++) {
    buttons[index].addEventListener('click', highlightButton);
  }
}

startHighlightButton();
