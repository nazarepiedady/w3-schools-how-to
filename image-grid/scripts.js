var columns = document.getElementsByClassName('column');


function showOneColumnGrid() {
  var columnsLength = columns.length;
  for (var index = 0; index < columnsLength; index++) {
    columns[index].style.flex = '100%';
  }
}
