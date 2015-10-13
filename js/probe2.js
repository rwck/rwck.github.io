var probedArray = []

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
  var doodie = direction;
  console.log(direction);
  var rowLength = Math.sqrt(Object.keys(testObject).length);
  var rowProbed = [];
  var startingColour = (testObject[cellAt(x, y)].colour);
  rowProbed.push(startingColour);
  for (var i = 0; i < rowLength; i++) {
    // var
    // rowProbed.push(startingColour);
    var nextCoords = (addArrayItems([x, y], doodie));
    var x = nextCoords[0];
    var y = nextCoords[1];
    var boo = cellAt(x, y);
    // console.log(boo);

    try {
      console.log(testObject[boo].colour);
      var colourToPush = testObject[boo].colour;
      rowProbed.push(colourToPush);
    } catch (error) {
    }
  }
  return rowProbed;
}
