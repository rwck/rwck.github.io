function throwMeAnError(z) {
  var x = "blob";
  var y = "blobbington";
  if (z === "z") {
    throw [x, y];
  }
  else return y;
}
