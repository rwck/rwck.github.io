var kabook;
var player;

function testwhiteToggle() {
  whiteToggle(cellAt(6, 1));
  // greenToggle(cellAt(6, 1));

  whiteToggle(cellAt(5, 2));
  // whiteToggle(cellAt(7, 0));

  blackToggle(cellAt(7, 0));
  // whiteToggle(cellAt(7, 0));
}


// function messages() {
//   if (_.first(kabook.IDS)[1] === player) {
//     throw "FATAL: You can only go down a route that begins with the opposing colour";
//   } else {
//     console.log("An adjacent square is of your colour. Good.");
//   }
//   if (_.first(kabook.IDS)[1] !== "green") {
//     throw "FATAL: You can only play on an empty square";
//   } else {
//     console.log("Square is not empty. Good");
//   }
//   if (player === "black") {
//     var opposite = "white";
//   } else if (player === "white") {
//     var opposite = "black";
//   }
//   nextPlayerCell = _.indexOf(_.unzip(kabook.IDS)[1], player);
//
//   if (nextPlayerCell === -1) {
//     throw "You can't play here: you need to pick a line that contains your colour";
//   } else {
//     console.log("The opposite colour is " + opposite + " so you're good to go");
//     console.log("The piece in question is at: " + nextPlayerCell);
//   }
// }


function updateRowArray(x, y, direction) {
  kabook = testColourOfNorth(x, y, direction);
}

function checkRowContents(x, y, direction, player) {
  var kabook = testColourOfNorth(x, y, direction);
  console.log("************** THIS IS KABOOOOOOOK" + kabook);
  if (player === "black") {
    var opposite = "white";
  } else if (player === "white") {
    var opposite = "black";
  };
  console.log("$$$$$$$$$$$" + (kabook.IDS)[1]);
  if (kabook.IDS[1][1] === player) {
    throw "FATAL: You can only go down a route that begins with the opposing colour";
  } else {
    console.log("An adjacent square is of your colour. Good.");
  }
  if (_.first(kabook.IDS)[1] !== "green") {
    throw "FATAL: You can only play on an empty square";
  } else {
    console.log("Square is empty. Good");
  }

  var nextPlayerCell = _.indexOf(_.unzip(kabook.IDS)[1], player);
  console.log(_.unzip(kabook.IDS)[1]);
  console.log(nextPlayerCell);

  if (nextPlayerCell === -1) {
    throw "You can't play here: you need to pick a line that contains your colour";
  } else {
    console.log("The opposite colour is " + opposite + " so you're good to go");
    console.log("The piece in question is at: " + nextPlayerCell);
  }

  console.log("current player is " + player);
  updateRowArray(x, y, direction);
  var nextPlayerCell = _.indexOf(_.unzip(kabook.IDS)[1], player);
  console.log(kabook);
  var arrayofThisRow = _.unzip(kabook.IDS)[1];
  var arrayofThisRowHashes = _.unzip(kabook.IDS)[0];
  console.log("This row is " + arrayofThisRow);
  var clippedArray = _.initial(arrayofThisRow, arrayofThisRow.length - nextPlayerCell);
  var clippedArrayOfHashes = _.initial(arrayofThisRowHashes, arrayofThisRowHashes.length - nextPlayerCell);
  console.log("Clipped array is " + clippedArray);

  var arrayForChecking = _.rest(clippedArray);
  var arrayForFlipping = _.rest(clippedArrayOfHashes);
  console.log("Array for checking is " + arrayForChecking);

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
    var myHash = x + '_' + y;
    console.log("My hash at this point is " + myHash);
    if (player === "black") {
      testObject[myHash].legalForBlack = true;
      testObject[myHash].directionOfTest.push(_.findKey(directionsObject, direction));
      console.log("Setting object " + myHash + "to true for black");
    }
    if (player === "white") {
      testObject[myHash].legalForWhite = true;
      testObject[myHash].directionOfTest.push(_.findKey(directionsObject, direction));
    }
    if (testObject[myHash].directionOfTest.length > 1) {
      alert("More than one row can be flipped.");
      var additionalDirectionsToFlip = _.initial(testObject[myHash].directionOfTest)
      alert("The remaining row to flip is " + additionalDirectionsToFlip);
      // this is where it's broken.


      
      for (var i = 0; i < additionalRowsToFlip.length; i++) {
        if (player === "white") {
          whiteToggle(additionalRowsToFlip[i]);
        }
        if (player === "black") {
          blackToggle(additionalRowsToFlip[i]);
        }
      }
    }
  }
  hashesToFlip = arrayForFlipping;
}

function mini() {
  testwhiteToggle();
  checkRowContents(2, 5, northeast, "black");

  kabook;

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

function testMe() {
  console.log(testObject['2_5'].legalForBlack);
  console.log(testObject['2_5'].legalForWhite);
  console.log(testObject['3_5'].legalForBlack);
  console.log(testObject['3_5'].legalForWhite);
}
