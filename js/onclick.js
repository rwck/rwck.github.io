function setClickers() {

  $("td").click(function() {
    $("td").mousedown(function() {
      var myID = this.id;
      // clickShadow(myID);
      // CLICK();
      var myID = this.id;
      // alert(myID);
      clickTestSquare(myID);

    })
  })
};

var delay = 250;

function clickShadow(id) {
  $("#" + id).toggleClass("button-pressed");
  setTimeout(function() {
    $("#" + id).toggleClass("button-pressed")
  }, 250);
  // setTimeout(function() {
  //   $("#"+id).toggleClass("button-pressed")}, 250);
}

function clickTestSquare(id) {
  if (player === "black") {
    var opposite = "white";
  } else if (player === "white") {
    var opposite = "black";
  };
  var x = parseInt(testObject[id]["x"]);
  var y = parseInt(testObject[id]["y"]);
  var valid = false;
  // alert("Player is " + player);
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
      // alert("That is a valid move!!!" + id);
      valid = true;
    } else {
      // alert("That is not a valid move" + id);
    }
  }
  if (player === "white") {
    if (testObject[id].legalForWhite === true) {
      // alert("That is a valid move!!!" + id);
      valid = true;
    } else {
      // alert("That is not a valid move" + id);
    }
  }
  if (valid) {
    console.log(hashesToFlip);
    if (player === "black") {
      for (var i = 0; i < hashesToFlip.length; i++) {
        blackToggle(hashesToFlip[i]);
        blackToggle(id);

      }
    }
    if (player === "white") {
      for (var i = 0; i < hashesToFlip.length; i++) {
        whiteToggle(hashesToFlip[i]);
        whiteToggle(id);
      }
    }
    // alert(player);


    player = opposite;
    // alert(player);
    setCurrentPlayerCell();


  } else {
    // alert('spidoooooom');

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

function setCurrentPlayerCell() {
  if (player === "black") {
    $(".currentPlayerIndicator").css('background-color', 'black');
  } else if (player === "white") {
    $(".currentPlayerIndicator").css('background-color', 'white');
  }
}
