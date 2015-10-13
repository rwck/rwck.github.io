// basic test functions

function testEmpty(x, y) {
  var testHash = (parseInt(x) + "_" + parseInt(y));
  if (testObject[testHash].colour !== "green") {
    throw "FATAL: square is not empty";
  }
}


function cellAt(x, y) {
  return parseInt(x) + "_" + parseInt(y);
}


function testAllSquaresforEmpty() {
  $.each(Object.keys(testObject), function(i, k) {
    var testX =

    testEmpty()
    console.log(testObject[k].x, testObject[k].y);



    // testEmpty(testObject[k].x, testObject[k].y)
})};



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


// var output = ""
// try {
//   testUp(x, y);
// } catch(err) {
//   output += err;
// }
// try {
//   testDown(x, y);
// } catch (err) {
//   output += err;
// }
// try
// // testLeft(x, y);
// // testRight(x, y);
// // testUpLeft(x, y);
// // testUpRight(x, y);
// // testDownLeft(x, y);
// // testDownRight(x, y);
// console.log(output);


function fullSweep(x, y) {
  var errorTally = 0;
  var output = ""
  try {
    testUp(x, y);
  } catch(error) {
    output += error;
    errorTally ++;
    }
  try {
    testDown(x, y);
  } catch(error) {
    output += error;
    errorTally ++;
    }
  try {
    testLeft(x, y);
  } catch(error) {
    output += error;
    errorTally ++;
  }
  try {
    testRight(x, y);
  } catch(error) {
    output += error;
    errorTally ++;
  }
  try {
    testUpLeft(x, y);
  } catch(error) {
    output += error;
    errorTally ++;
  }
  try {
    testUpRight(x, y);
  } catch(error) {
    output += error;
    errorTally ++;
  }
  try {
    testDownLeft(x, y);
  } catch(error) {
    output += error;
    errorTally ++;
  }
  try {
    testDownRight(x, y);
  } catch(error) {
    output += error;
    errorTally ++;
  }
  try {
  } catch(error) {
    output += error;
    errorTally ++;
  }
  console.log(output);
  console.log(errorTally);
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
