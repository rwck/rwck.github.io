// creating objects

function basicPlayingSquare(x, y) {
  this.hash = x + "_" + y;
  this.x_coordinate = x;
  this.y_coordinate = y;
  this.colour = "green";
  this.permittedMove = false;
  this.locked = false;
  this.borderPiece = false;
  // this function returns the value of the object to the right of this one
  this.testRight = function() { // this function works nicely
    testRight(x, y);
  };
  this.testLeft = function() {
    testLeft(x, y);
  };
  this.testDown = function() {
    testDown(x, y);
  };
  this.testUp = function() {
    testUp(x, y);
  };
  this.testUpRight = function() {
    testUpRight(x, y);
  };
  this.testUpLeft = function() {
    testUpLeft(x, y);
  };
  this.testDownRight = function() {
    testDownRight(x, y);
  };
  this.testDownLeft = function() {
    testDownLeft(x, y);
  };
}
