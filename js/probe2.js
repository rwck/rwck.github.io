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

var a = [1, 2, 3],
  b = [10, 20, 30];
a.map(function(item, i) {
  return item + b[i]
});
[11, 22, 33]

// directions
var north = [0, -1]
var south = [0, 1]
var east = [1, 0]
var west = [-1, 0]
var northwest = [-1, -1]
var northeast = [1, -1]
var southwest = [-1, 1]
var southeast = [1, 1]


function testColourOfNorth(x, y, direction) {
  console.log(typeof(direction));
  console.log(direction);
  var rowLength = Math.sqrt(Object.keys(testObject).length);
  console.log("Row length is " + rowLength);
  var rowProbed = [];
  var objectProbed = {};
  var startingColour = (testObject[cellAt(x, y)].colour);
  console.log("Starting colour is " + startingColour);
  var startingID = (testObject[cellAt(x, y)].hash);
  objectProbed.IDS = []
  console.log(objectProbed);
  objectProbed.IDS.push([startingID, startingColour]);
  console.log(objectProbed);

  rowProbed.push(startingColour);

  var a = x;
  var b = y;

  for (var i = 0; i < rowLength; i++) {

    nextCoords = [a, b];

    var nextCoords = addArrayItems([a, b], direction);
    console.log(nextCoords);
    // var
    // rowProbed.push(startingColour);

    console.log("x is " + x);
    console.log("y is " + y);
    console.log("Doodie is : " + direction);
    console.log(typeof(doodie));
    var bloob = addArrayItems([a, b], direction);
    console.log(direction);
    console.log("Bloob is " + bloob);
    console.log("next coordinates are ") + nextCoords;
    // var a = nextCoords[0];
    // console.log(x);
    // console.log(y);
    // var b = nextCoords[1];
    var boo = cellAt(a, b);
    console.log("this is boo value " + boo);
    // console.log(boo);

    try {
      console.log(testObject[boo].colour);
      var colourToPush = testObject[boo].colour;
      var IDtoPush = testObject[boo].hash;
      rowProbed.push(colourToPush);
      objectProbed.IDS.push[IDtoPush, colourToPush];
      console.log(objectProbed.IDS);
      console.log("Next coordinates are " + a +  " and " + b);
  } catch (error) {
  }
   var kabook = objectProbed;
   a = bloob[0];
   b = bloob[1];
  }
  var kabook = objectProbed;

  // return rowProbed;
  // var kabook = objectProbed;
  return kabook;
}
