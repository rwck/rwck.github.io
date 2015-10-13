function blackToggle(hash) {
  testObject[hash].colour = "black";
  var hashID = "#" + hash;
  $(hashID).removeClass().toggleClass("black");
}

function whiteToggle(hash) {
  testObject[hash].colour = "white";
  var hashID = "#" + hash;
  $(hashID).removeClass().toggleClass("white");
}

function greenToggle(hash) {
  testObject[hash].colour = "green";
  console.log(testObject[hash].colour);
  var hashID = "#" + hash;
  $(hashID).removeClass().toggleClass("green");
}
