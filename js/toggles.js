function blackToggle(hash) {
  testObject[hash].colour = "black";
  // console.log(testObject[hash].colour);
  var hashID = "#" + hash;
  $(hashID).toggleClass("black");
  console.log("Current player: " + whoseTurn);
  playerToggle();
  clickToggleSelector();
  console.log("New player: " + whoseTurn);
}

function whiteToggle(hash) {
  testObject[hash].colour = "white";
  // console.log(testObject[hash].colour);
  var hashID = "#" + hash;
  $(hashID).toggleClass("white");
  console.log("Current player: " + whoseTurn);
  playerToggle();
  clickToggleSelector();
  console.log("New player: " + whoseTurn);
}

function greenToggle(hash) {
  testObject[hash].colour = "green";
  console.log(testObject[hash].colour);
  var hashID = "#" + hash;
  $(hashID).toggleClass("green");
}
