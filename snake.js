window.onload = (function startGame() {
var sg = this;

//хранение данных
sg.snakeData = [
{
keyboard: {
	left: 37,
	right: 39,
	up: 40,
	down: 38},
	
}
];
//создание матрицы функция
sg.createMatrix = function(){
	var cm = this;
	var matrix = document.getElementById('matrix')
	var n = 20 * 20;
	for (var i = 0; i < n; i++) {
	
	var div = document.createElement('div');

	              div.className = 'cell';

	              matrix.appendChild(div);

	          }
  
}
//получение ячеек
sg.getCell = function(row, col) {

	          var divs = document.querySelectorAll('.cell');

	          return divs[row * 20 + col]

	      }
//установка маркера ячеек
sg.setCell = function (row, col, val) {

	        var div = sg.getCell(row, col)

	        div.classList[val ? 'add' : 'remove']('mark')

	      }

sg.createMatrix(); //создание матрицы обьвление
sg.setCell(0, 0, true);
}
)
