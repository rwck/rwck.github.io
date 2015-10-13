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
    CLICK(myID);
  });
}


function CLICK(myID) {
  if (whoseTurn === playerBlack) {
    blackToggle(myID);
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
  } else if (whoseTurn === playerWhite) {
      whoseTurn = playerBlack;
  }
  return whoseTurn;
}


function whereAmI(ID) {
  var myID = ID
  var myCoords = [testObject[ID].x, testObject[ID].y];
  alert(myCoords);
}
//
// console.log(whoseTurn);
// console.log(playerBlack);
// console.log(whoseTurn === playerBlack);
// console.log(playerWhite);
