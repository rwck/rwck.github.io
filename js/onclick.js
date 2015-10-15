// function clickToggleSelector() {
//   if (whoseTurn === playerBlack) {
//     clickToggleBlack();
//   } else if (whoseTurn === playerWhite) {
//     clickToggleWhite();
//   }
//   // playerToggle();
// }


function setClickers() {
  $("td").click(function() {
    // CLICK();
    var myID = this.id;
    alert(myID);
    clickTestSquare(myID);
  });
}

// if (clickTestSquare(myID)) {
// CLICK(myID);





//
// testColourOfNorth()





function clickTestSquare(id) {
  var x = parseInt(testObject[id]["x"]);
  var y = parseInt(testObject[id]["y"]);
  alert("Player is " + player);
  try {
    checkRowContents(x, y, north, player)
  } catch (error) {
    console.log(error);
  }
  try {
    checkRowContents(x, y, south, player)
  } catch (error) {
    console.log(error);
  }

  try {
    checkRowContents(x, y, east, player)

  } catch (error) {
    console.log(error);
  }
  try {
    checkRowContents(x, y, west, player)

  } catch (error) {
    console.log(error);
  }
  try {
    checkRowContents(x, y, northeast, player)

  } catch (error) {
    console.log(error);
  }
  try {
    checkRowContents(x, y, northwest, player)

  } catch (error) {
    console.log(error);
  }
  try {
    checkRowContents(x, y, southeast, player)

  } catch (error) {
    console.log(error);
  }
  try {
    checkRowContents(x, y, southwest, player)
  } catch (error) {
    console.log(error);
  }

  if (player === "black") {
    if (testObject[id].legalForBlack === true) {
      alert("That is a valid move!!!" + id);
    } else {
      alert("That is not a valid move" + id);
    }
    if (player === "white") {
      if (testObject[id].legalForWhite === true) {
        alert("That is a valid move!!!" + id);
      } else {
        alert("That is not a valid move" + id);
      }
    }
  }
}


// for (var i = 0; i < arrayOfDirections.length; i++) {
//     testColourOfNorth(x, y, arrayOfDirections[i]);


// _.each(arrayOfDirections, function(direction) {
// testColourOfNorth(x, y, direction)


function CLICK(myID) {
  if (whoseTurn === playerBlack) {
    blackToggle(myID);
    console.log(myID);
  } else if (whoseTurn === playerWhite) {
    whiteToggle(myID);
  }
  playerToggle();
  console.log(whoseTurn);
}


function clickToggleBlack() {
  $("td").off();
  $("td").click(function() {
    // alert("Hello. You've clicked me. My ID is: " + this.id);
    blackToggle(this.id);
    // playerToggle();
    console.log("Kabooom - changed to player: " + whoseTurn);
    // return this.(
  });
}

function clickToggleWhite() {
  $("td").off();
  $("td").click(function() {
    // alert("Hello. You've clicked me. My ID is: " + this.id);
    whiteToggle(this.id);
    // playerToggle();
    console.log("Kabooom - changed to player: " + whoseTurn);
  });
}

function clickToggleGreen() {
  $("td").off();
  $("td").click(function() {
    // alert("Hello. You've clicked me. My ID is: " + this.id);
    greenToggle(this.id);
    // return this.(
  });
}

// turn selector

var playerBlack = "playerBlack";
var playerWhite = "playerWhite"
var whoseTurn = playerBlack;

function playerToggle() {
  if (whoseTurn === playerBlack) {
    whoseTurn = playerWhite;
    $(".currentPlayerIndicator").css('background-color', 'white');
  } else if (whoseTurn === playerWhite) {
    whoseTurn = playerBlack;
    $(".currentPlayerIndicator").css('background-color', 'black');
  }
  return whoseTurn;
}

// function whereAmI(ID) {
//   var myID = ID
//   var myCoords = [testObject[ID].x, testObject[ID].y];
//   alert(myCoords);
// }
//
// console.log(whoseTurn);
// console.log(playerBlack);
// console.log(whoseTurn === playerBlack);
// console.log(playerWhite);
