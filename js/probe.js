// basic test functions

function testRight(x, y) {
  var testHash = (parseInt(x) + 1) + "_" + y;
  if (testObject[testHash] === undefined) {
    throw "Nothing to the right";
  }
  console.log(testObject[testHash]);
  return testObject[testHash];
}

function testLeft(x, y) {
  var testHash = (parseInt(x) - 1) + "_" + y;
  // console.log(testObject[testHash]);
  if (testObject[testHash] === undefined) {
    throw "Nothing to the left";
  }
  return testObject[testHash];
}

function testDown(x, y) {
  var testHash = x + "_" + (parseInt(y) + 1);
  console.log(testObject[testHash]);
  if (testObject[testHash] === undefined) {
    throw "Nothing below";
  }
  return testObject[testHash];
}

function testUp(x, y) {
  var testHash = x + "_" + (parseInt(y) - 1);
  if (testObject[testHash] === undefined) {
    throw "Nothing above";
  }
  console.log(testObject[testHash]);
  return testObject[testHash];
}

function testUpRight(x, y) {
  var testHash = (parseInt(x) + 1) + "_" + (parseInt(y) - 1);
  if (testObject[testHash] === undefined) {
    throw "Nothing above and to the right";
  }
  console.log(testObject[testHash]);
  return testObject[testHash];
}

function testUpLeft(x, y) {
  var testHash = (parseInt(x) - 1) + "_" + (parseInt(y) - 1);
  if (testObject[testHash] === undefined) {
    throw "Nothing above and to the left";
  }
  console.log(testObject[testHash]);
  return testObject[testHash];
}

function testDownRight(x, y) {
  var testHash = (parseInt(x) + 1) + "_" + (parseInt(y) + 1);
  if (testObject[testHash] === undefined) {
    throw "Nothing below and to the right";
  }
  console.log(testObject[testHash]);
  return testObject[testHash];
}

function testDownLeft(x, y) {
  var testHash = (parseInt(x) - 1) + "_" + (parseInt(y) + 1);
  if (testObject[testHash] === undefined) {
    throw "Nothing below and to the left";
  }
  console.log(testObject[testHash]);
  return testObject[testHash];
}

var doodoo = [];
function blob(key) {
  init();
  try {
    testObject[key].testUp();
  }
  catch(err) {
    console.log("BooHoo");
    doodoo.push(key);
  }
}
