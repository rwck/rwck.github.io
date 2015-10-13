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

var moveToCoords = addArrayItems([12, 33], north)

var a = [1, 2, 3],
  b = [10, 20, 30];
a.map(function(item, i) {
  return item + b[i]
});
[11, 22, 33]










function repeat(fn, times) {
  for (var i = 0; i < times; i++) {
    fn;
  }
}


function testColourOfNorth(x, y) {
  var rowLength = Math.sqrt(Object.keys(testObject).length);
  var rowProbed = [];
  for (var i = 0; i < rowLength; i++) {
    var startingColour = (testObject[cellAt(x, y)].colour);
    rowProbed.push(startingColour);
    var nextCoords = (addArrayItems([x, y], north));
    var x = nextCoords[0];
    var y = nextCoords[1];
    var boo = cellAt(x, y);
    try {
      var nextCellColour = testObject[boo].colour;
    } catch (error) {
    }
  }
  return rowProbed;
}
