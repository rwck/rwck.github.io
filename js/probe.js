// basic test functions

function testRight(x, y) {
  var testHash = (parseInt(x) + 1) + "_" + y;
  console.log(testObject[testHash]);
  return testObject[testHash];
}

function testLeft(x, y) {
  var testHash = (parseInt(x) - 1) + "_" + y;
  console.log(testObject[testHash]);
  return testObject[testHash];
}

function testDown(x, y) {
  var testHash = x + "_" + (parseInt(y) + 1);
  console.log(testObject[testHash]);
  return testObject[testHash];
}

function testUp(x, y) {
  var testHash = x + "_" + (parseInt(y) - 1);
  console.log(testObject[testHash]);
  return testObject[testHash];
}

function testUpRight(x, y) {
  var testHash = (parseInt(x) + 1) + "_" + (parseInt(y) - 1);
  console.log(testObject[testHash]);
  return testObject[testHash];
}

function testUpLeft(x, y) {
  var testHash = (parseInt(x) - 1) + "_" + (parseInt(y) - 1);
  console.log(testObject[testHash]);
  return testObject[testHash];
}

function testDownRight(x, y) {
  var testHash = (parseInt(x) + 1) + "_" + (parseInt(y) + 1);
  console.log(testObject[testHash]);
  return testObject[testHash];
}

function testDownLeft(x, y) {
  var testHash = (parseInt(x) - 1) + "_" + (parseInt(y) + 1);
  console.log(testObject[testHash]);
  return testObject[testHash];
}
