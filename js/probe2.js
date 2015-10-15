var probedArray = [];
var objectProbed = {};

// testObject(cellAt(x, y));

$.each(Object.keys(testObject), function(i, k) {
  // console.log(k);
})

function addArrayItems(array1, array2) {
  var newCoordArray = [];
  array1.map(function(item, i) {
    newCoordArray.push(item + array2[i]);
    // console.log(newCoordArray);
  });
  return newCoordArray;
};

// var moveToCoords = addArrayItems([12, 33], north)



// directions
var north = [0, -1]
var south = [0, 1]
var east = [1, 0]
var west = [-1, 0]
var northwest = [-1, -1]
var northeast = [1, -1]
var southwest = [-1, 1]
var southeast = [1, 1]


var directionsObject = {
  north : [0, -1],
  south : [0, 1],
  east : [1, 0],
  west : [-1, 0],
  northwest : [-1, -1],
  northeast : [1, -1],
  southwest : [-1, 1],
  southeast : [1, 1],
}





var stringOfDirections = "north south east west northwest northeast southwest southeast"
var arrayOfDirections = stringOfDirections.split(" ");


function testColourOfNorth(x, y, direction) {
  console.log(objectProbed);
  console.log(typeof(direction));
  console.log(direction);
  var rowLength = Math.sqrt(Object.keys(testObject).length);
  console.log("Row length is " + rowLength);
  var rowProbed = [];
  var objectProbed = {};
  var startingColour = (testObject[cellAt(x, y)].colour);
  console.log("Starting colour is " + startingColour);
  // var startingID = (testObject[cellAt(x, y)].hash);
  objectProbed.IDS = []
  console.log(objectProbed);
  // objectProbed.IDS.push([startingID, startingColour]);
  console.log(objectProbed);

  // rowProbed.push(startingColour);

  var a = x;
  var b = y;

  for (var i = 0; i < rowLength; i++) {

    nextCoords = [a, b];
    console.log("A is " + a + " B is " + b);

    // var nextCoords = addArrayItems([a, b], direction);
    console.log(nextCoords);
    // var
    // rowProbed.push(startingColour);

    console.log("x is " + x);
    console.log("y is " + y);
    var hashAandB = cellAt(a, b);
    console.log("Doodie is : " + direction);
    console.log(typeof(doodie));
    var updatedAandB = addArrayItems([a, b], direction);
    console.log(direction);
    // console.log("Bloob is " + bloob);
    console.log("next coordinates are " + updatedAandB);


    console.log("the new hash value is " + updatedAandB);


    try {
      console.log(testObject[hashAandB].colour);
      var colourToPush = testObject[hashAandB].colour;
      var IDtoPush = testObject[hashAandB].hash;
      objectProbed.IDS.push([IDtoPush, colourToPush]);
      console.log("ARRay is currently: " + objectProbed.IDS);
      console.log("Next coordinates are " + a + " and " + b);
    } catch (error) {}
    a = updatedAandB[0];
    b = updatedAandB[1];
    var kabook = objectProbed;
    console.log(objectProbed);
  }
  return kabook;
}
