
var kabook;
var player;

function testwhiteToggle() {
  whiteToggle(cellAt(6, 1));
  whiteToggle(cellAt(5, 2));
  whiteToggle(cellAt(7, 0));
  blackToggle(cellAt(7, 0));
}

function yaroo() {
player = "black";
kabook = testColourOfNorth(2, 5, northeast);
  if (_.first(kabook) === "green") {
    console.log("BOOP");
    console.log(kabook);
    console.log("Player is: " + player);
    console.log("First item is: " + _.first(kabook));
    return true;
  } else {
    console.log(kabook);
    console.log("Player is: " + player);
    console.log("First item is " + _.first(kabook));
    return false;
  }
}

function messages() {
  if (_.first(kabook) === player) {
    throw "FATAL: You can only go down a route that begins with the opposing colour";
  }
  if (_.first(kabook) !== "green") {
    throw "FATAL: You can only play on an empty square";
  } else {
    console.log("Square is not empty. Good");
  }
  if (player === "black") {
    var opposite = "white";
  } else if (player === "white") {
    var opposite = "black";
  }
  nextPlayerCell = _.indexOf(_.rest(kabook), player);
  if (nextPlayerCell === -1) {
    throw "You can't play here: you need to pick a line that contains your colour";
  } else {
    console.log("The opposite colour is " + opposite + " so you're good to go");
    console.log("The piece in question is at: " + nextPlayerCell);
  }
}


function updateRowArray() {
  kabook = testColourOfNorth(2, 5, northeast);
}


function checkRowContents() {
  updateRowArray();
  var nextPlayerCell = _.indexOf(kabook, player);
  yaroo();
  console.log(kabook);
  var clippedArray = _.initial(kabook, kabook.length - nextPlayerCell);
    console.log(clippedArray);

  var arrayForChecking = _.rest(clippedArray);

  console.log("Length of kabook " + kabook.length);
  console.log("Next player cell is:" + nextPlayerCell);
  console.log(arrayForChecking);
  // _.initial(, _.indexOf(kabook, player));
  if (_.indexOf(arrayForChecking, "green") !== -1) {
    throw "FATAL: There needs to be a line of the opposing colour that ends in your colour";
  }
  return(arrayForChecking);
  // if $.each(arrayForChecking) === "white";
  // GOT UP TO HERE - NEXT THING IS TO CHECK ALL ELEMENTS IN CHECKIGN ARRAY ARE THE SAME AND OPPOSITE OF PLAYER. IF SO, JOLLY GOOD. FLIP THEM.
}

function mini() {
  testwhiteToggle();
  yaroo();
  kabook;
  messages();
}






// underscorejs functoins

// _.rest(array, [index])
// _.initial(array, [n])
// _.last(array, [n])
