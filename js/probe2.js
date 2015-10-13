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

var a = [1, 2,3], b = [10, 20, 30];
a.map(function(item, i){
  return item + b[i] });
[11, 22, 33]


function probeNorth() {

}



var rowProbed = [];

var rowLength = Math.sqrt(Object.keys(testObject).length);

 {

}
function testColourOfNorth(x, y) {
  $.each(rowLength, function(i, val) {
    console.log(testObject[cellAt(x, y)].colour);
    var colourToPush = (testObject[cellAt(x, y)].colour);
    var nextCoords =  addArrayItems([x, y], north);
    console.log(nextCoords);
    rowProbed.push(colourToPush);
    console.log(rowProbed);
  }
}

testObject
