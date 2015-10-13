function clickToggleSelector() {
  if (whoseTurn === playerBlack) {
    clickToggleBlack()
  } else if (whoseTurn === playerWhite) {
    clickToggleWhite();
  }
}


function clickToggleBlack() {
  $("td").click(function() {
    // alert("Hello. You've clicked me. My ID is: " + this.id);
    blackToggle(this.id);
    // return this.(
  });
}

function clickToggleWhite() {
  $("td").click(function() {
    // alert("Hello. You've clicked me. My ID is: " + this.id);
    whiteToggle(this.id);
  });
}

function clickToggleGreen() {
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

console.log(whoseTurn);
console.log(playerBlack);
console.log(whoseTurn === playerBlack);
console.log(playerWhite);


function playerClickSelector() {
  if (whoseTurn === playerBlack) {
    clickToggleWhite();
  } else if (whoseTurn === playerBlack) {
    clickToggleBlack();
  }
}



// $("td").append(`$.click(alert("You're clicking on a cell" + this`)
