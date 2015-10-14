
var kabook;
var player = "black";

function testwhiteToggle() {
  whiteToggle(cellAt(6, 1));
  // greenToggle(cellAt(6, 1));

  whiteToggle(cellAt(5, 2));
  // whiteToggle(cellAt(7, 0));

  blackToggle(cellAt(7, 0));
  // whiteToggle(cellAt(7, 0));
}


function messages() {
  if (_.first(kabook.IDS)[1] === player) {
    throw "FATAL: You can only go down a route that begins with the opposing colour";
  } else {
    console.log("An adjacent square is of your colour. Good.");
  }
  if (_.first(kabook.IDS)[1] !== "green") {
    throw "FATAL: You can only play on an empty square";
  } else {
    console.log("Square is not empty. Good");
  }
  if (player === "black") {
    var opposite = "white";
  } else if (player === "white") {
    var opposite = "black";
  }
  nextPlayerCell = _.indexOf(_.unzip(kabook.IDS)[1], player);

  if (nextPlayerCell === -1) {
    throw "You can't play here: you need to pick a line that contains your colour";
  } else {
    console.log("The opposite colour is " + opposite + " so you're good to go");
    console.log("The piece in question is at: " + nextPlayerCell);
  }
}


function updateRowArray(x, y, direction) {
  kabook = testColourOfNorth(x, y, direction);
}


function checkRowContents(x, y, direction) {
  if (player === "black") {
    var opposite = "white";
  } else if (player === "white") {
    var opposite = "black";
  }
  console.log("current player is " + player);
  updateRowArray(x, y, direction);
  var nextPlayerCell = _.indexOf(_.unzip(kabook.IDS)[1], player);
  console.log(kabook);
  var arrayofThisRow = _.unzip(kabook.IDS)[1];
  console.log("This array is " + arrayofThisRow);
  var clippedArray = _.initial(arrayofThisRow, arrayofThisRow.length - nextPlayerCell);
    console.log("Clipped array is " + clippedArray);


  var arrayForChecking = _.rest(clippedArray);
    console.log("Array for checiing is " + arrayForChecking);

  console.log("Next player cell is:" + nextPlayerCell);
  console.log(arrayForChecking);
  // _.initial(, _.indexOf(kabook, player));
  if (_.indexOf(arrayForChecking, "green") !== -1) {
    throw "FATAL: There needs to be a line of the opposing colour that ends in your colour";
  } else {
    console.log("Cool. This row ends in your colour.");
  }
  if (!finalValidationCheck(arrayForChecking, opposite)) {
    throw "FATAL: BOOHOO. Not all of the pieces here are of your opposing colour"
  } else {
    console.log("Hossom! Now we can move on to piece flipping!");
  }


  // return(arrayForChecking);


}

function mini() {
  testwhiteToggle();
  checkRowContents(2, 5, northeast);
  kabook;
  messages();
}


function finalValidationCheck(array, opposite) {
  var tally = 0;
  $.each(array, function(i, v) {
    if (v === opposite) {
      tally++;
    } else {
      tally = 0;
    }
  });
  if (tally === array.length) {
    return true;
  } else {
    return false;
  }
}
