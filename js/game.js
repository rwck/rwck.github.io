// create a a square playing grid of objects <squares> squared
function init() {
  createGridObject(8);
  kaboom();
  drawGrid();
}

function createGridObject(squares) { // this function works nicely
  var hash = ""
  var hashArray = [];
  for (var y = 0; y < squares; y++) {
    var y_coord = y.toString();
    for (var x = 0; x < squares; x++) {
      var x_coord = x.toString();
      hash = x_coord + "_" + y_coord;
      hashArray.push(hash);
    }
  }

  // console.log(hashArray)
  $hashArray = $(hashArray);
  return $hashArray;
}

var testObject = {};

function kaboom() { // this function works nicely
  for (var i = 0; i < $hashArray.length; i++) {
    var x = $hashArray[i][0];
    var y = $hashArray[i][$hashArray.length-1];
    var y = $hashArray[i][$hashArray[i].length-1];
    var z = $hashArray.length;
    testObject[$hashArray[i]] = new basicPlayingSquare(x, y, z);
  }
}

function test() {
  createGridObject(4);
  kaboom();
  printArray();
  testRightNeighbours();
  testDownNeighbours();
  testLeftNeighbours();
  testUpNeighbours();
  testUpLeftNeighbours();
  testUpRightNeighbours();
  testDownLeftNeighbours();
  testDownRightNeighbours();
}

var booboo = [];

function testRightNeighbours() {
  $.each($hashArray, function(i, l) {
    try {
      testObject[l].testRight();
    }
    catch(err) {
      console.log(err);
      if ($.inArray(l, booboo) < 0) {
        booboo.push(l);
      }
    }
  });
}

function testLeftNeighbours() {
  $.each($hashArray, function(i, l) {
    try {
      testObject[l].testLeft();
    }
    catch(err) {
      console.log(err);
      if ($.inArray(l, booboo) < 0) {
        booboo.push(l);
      }
    }
  });
}

function testDownNeighbours() {
  $.each($hashArray, function(i, l) {
    try {
      testObject[l].testDown();
    }
    catch(err) {
      console.log(err);
      if ($.inArray(l, booboo) < 0) {
        booboo.push(l);
      }
    }
  });
}

function testUpNeighbours() {
  $.each($hashArray, function(i, l) {
    try {
      testObject[l].testUp();
    }
    catch(err) {
      console.log(err);
      if ($.inArray(l, booboo) < 0) {
        booboo.push(l);
      }
    }
  });
}

var noDiagonalMove = []

function testUpRightNeighbours() {
  $.each($hashArray, function(i, l) {
    try {
      testObject[l].testUpRight();
    } catch (err) {
      console.log(err);
      if ($.inArray(l, booboo) < 0) {
        booboo.push(l);
      }
    }
  });
}

function testDownRightNeighbours() {
  $.each($hashArray, function(i, l) {
    try {
      testObject[l].testDownRight();
    } catch (err) {
      console.log(err);
      if ($.inArray(l, booboo) < 0) {
        booboo.push(l);
      }
    }
  });
}

function testUpLeftNeighbours() {
  $.each($hashArray, function(i, l) {
    try {
      testObject[l].testUpLeft();
    } catch (err) {
      console.log(err);
      if ($.inArray(l, booboo) < 0) {
        booboo.push(l);
      }
    }
  });
}

function testDownLeftNeighbours() {
  $.each($hashArray, function(i, l) {
    try {
      testObject[l].testDownLeft();
    } catch (err) {
      console.log(err);
      if ($.inArray(l, booboo) < 0) {
        booboo.push(l);
      }
    }
  });
}

function printArray() {
  $.each($hashArray, function(i, l) {
    // console.log(i);
    console.log(l);
  });
}

function initialSetUp() {
  var middle = Math.sqrt($hashArray.length) / 2;
  // ($hashArray.length / 2) - 1;
  var blackStart1 = (middle - 1) + "_" + (middle - 1);
  var blackStart2 = middle + "_" + middle;
  var whiteStart1 = (middle - 1) + "_" + middle;
  var whiteStart2 = middle + "_" + (middle - 1);
  console.log(blackStart1, blackStart2, whiteStart1, whiteStart2);
  blackToggle(blackStart1);
  blackToggle(blackStart2);
  whiteToggle(whiteStart1);
  whiteToggle(whiteStart2);
}
