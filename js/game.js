// create a a square playing grid of objects <squares> squared
function createGridObject(squares) { // this function works nicely
  var hash = ""
  var hashArray = [];
  for (var x = 0; x < squares; x++) {
    var x_coord = x.toString();
    for (var y = 0; y < squares; y ++) {
      var y_coord = y.toString();
      hash = x_coord + "_" + y_coord;
      // console.log(hash);
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
    // console.log(x);
    var y = $hashArray[i][$hashArray.length-1];
    // console.log("Array length is " + $hashArray.length);
    // console.log("Array " + i + " is " + $hashArray[i]);
    // console.log("x value is " +  $hashArray[i][0]);
    // console.log("y value is " + $hashArray[i][$hashArray[i].length-1]);
    var y = $hashArray[i][$hashArray[i].length-1];
    testObject[$hashArray[i]] = new basicPlayingSquare(x, y);

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

function testRightNeighbours() {
  $.each($hashArray, function(i, l) {
    // console.log(i);
    // console.log(l);
    // console.log("i value is " + i + " l value is " + l);
    if (testObject[l].testRight() === undefined) {
      console.log("Found the right hand edge of the known universe!!! + It's at " + $hashArray[i]);
    } else {
      console.log("Good stuff! There's a piece next to me on the right!");
    }
  });
}

function testLeftNeighbours() {
  $.each($hashArray, function(i, l) {
    if (testObject[l].testLeft() === undefined) {
      console.log("Found the left hand edge of the known universe!!! + It's at " + $hashArray[i]);
    } else {
      console.log("Good stuff! There's a piece next to me on the left!");
    }
  });
}

function testDownNeighbours() {
  $.each($hashArray, function(i, l) {
    if (testObject[l].testDown() === undefined) {
      console.log("Found the uppermost edge of the known universe!!! It's at " + $hashArray[i]);
    } else {
      console.log("Good stuff! There's a piece above me!");
    }
  });
}

function testUpNeighbours() {
  $.each($hashArray, function(i, l) {
    if (testObject[l].testUp() === undefined) {
      console.log("Found the bottom edge of the known universe!!! It's at " + $hashArray[i]);
    } else {
      console.log("Good stuff! There's a piece below me!");
    }
  });
}

var noDiagonalMove = []

function testUpRightNeighbours() {
  $.each($hashArray, function(i, l) {
    if (testObject[l].testUpRight() === undefined) {
      console.log("Found the top right edge of the known universe!!! It's at " + $hashArray[i]);
      if (!$.inArray($hashArray[i]), noDiagonalMove) {
        noDiagonalMove.push($hashArray[i]);
      }
    } else {
      console.log("Good stuff! There's a piece above me and to the right!");
    }
  });
}

function testDownRightNeighbours() {
  $.each($hashArray, function(i, l) {
    if (testObject[l].testDownRight() === undefined) {
      console.log("Found the bottom right edge of the known universe!!! It's at " + $hashArray[i]);
      if (!$.inArray($hashArray[i]), noDiagonalMove) {
        noDiagonalMove.push($hashArray[i]);
      }
    } else {
      console.log("Good stuff! There's a piece below me and to the right!");
    }
  });
}

function testUpLeftNeighbours() {
  $.each($hashArray, function(i, l) {
    if (testObject[l].testUpLeft() === undefined) {
      console.log("Found the top left edge of the known universe!!! It's at " + $hashArray[i]);
      if (!$.inArray($hashArray[i]), noDiagonalMove) {
        noDiagonalMove.push($hashArray[i]);
      }
    } else {
      console.log("Good stuff! There's a piece above me and to the left!");
    }
  });
}

function testDownLeftNeighbours() {
  $.each($hashArray, function(i, l) {
    if (testObject[l].testDownLeft() === undefined) {
      console.log("Found the bottom left edge of the known universe!!! It's at " + $hashArray[i]);
      if (!$.inArray($hashArray[i]), noDiagonalMove) {
        noDiagonalMove.push($hashArray[i]);
      }
    } else {
      console.log("Good stuff! There's a piece below me and to the left!");
    }
  });
}

function printArray() {
  $.each($hashArray, function(i, l) {
    // console.log(i);
    console.log(l);
  });
}
