// creating objects

function basicPlayingSquare(x, y, z) {
  this.square = z;
  this.x = x;
  this.hash = x + "_" + y;
  this.x_coordinate = x;
  this.y_coordinate = y;
  this.colour = "green";
  this.permittedMove = false;
  this.locked = false;
  this.borderPiece = false;
  this.newRow = "";
  this.endOfRow = "";
  if (parseInt(this.x) + 1 === Math.sqrt(this.square)) {
    this.endOfRow += `</tr>`;
  };
  this.valueX = parseInt(this.x) + 1;
  this.testV = Math.sqrt(this.square);
  if (parseInt(this.x) === 0) {
    this.newRow += `<tr>`;
  };
  this.HTMLsnippet =  (this.newRow +
                      `<td id="` +
                      this.hash +
                      `">` +
                      `<span class="cell">X</span></td>`+
                      this.endOfRow);

  // [
  //                     `<td id="`,
  //                     this.hash,
  //                     `">`,
  //                     `<span class="cell">X</span></td>`,
  //
  //                   ]

   // this function returns the value of the object to the right of this one
  //  if (parseInt(x) === (Math.sqrt(Object.keys(testObject).length) - 1)) {
  //
  //  };
  //
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
