// game model to store state of the game

function Game(board_str) {
  // generates a board with the given start ('0000202000000000')
  this.board = _.map(board_str.split(""), function(cell) {parseInt(cell)});
  this.board = board_str.split("")

  this.cells = [];
  for (var i = 0; i < this.board.length; i++) {
    $('.cell').append(this.board[i]);
    this.cells.push(this.board[i])
  }
  // this.generateBoard();
   // this.generateBoard();
  // this.cells = [];
  // var rows = board_str.split(",");
  // this.y = rows.length;
  // this.x = rows[0].length;
  // for (var i = 0; i < rows.length; i++) {
  //   this.cells[i] = rows[i].split("").map(this.cellAliveFromChar);
  // }

}


Game.prototype.generateBoard = function() {

}



Game.prototype.toString = function() {

}





// Questions:
// -  purpose of toString