// creating objects

function basicPlayingSquare(x, y, z) {
  this.square = z;
  this.x = x;
  this.y = y;
  this.hash = x + "_" + y;
  this.x_coordinate = x;
  this.y_coordinate = y;
  this.colour = "green";
  this.locked = false;
  this.borderPiece = false;
  this.javaScript = `<script>$.click(alert("You're clicking on a cell"))</script>`;
  this.newRow = "";
  this.endOfRow = "";
  this.legalForBlack = false;
  this.legalForWhite = false;
  if (parseInt(this.x) + 1 === Math.sqrt(this.square)) {
    this.endOfRow += `</tr>`;
  };
  this.directionOfTest = [];
  this.valueX = parseInt(this.x) + 1;
  this.testV = Math.sqrt(this.square);
  if (parseInt(this.x) === 0) {
    this.newRow += `<tr>`;
  };
  this.HTMLsnippet =  (this.newRow +
                      `<td id="` +
                      this.hash +
                      `">` +
                      `<span class="cell" ` +
                      // this.javaScript +
                      `>` +
                      `X</span></td>`+
                      this.endOfRow);

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
