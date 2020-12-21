const minToFront = arr => {
  let minVal = arr[0];
  let minValIndex = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
      minValIndex = i;
    }
  }
  for (var j = minValIndex; j > 0; j--) {
    var tempVal = arr[j];
    arr[j] = arr[j - 1];
    arr[j - 1] = tempVal;
  }
  return arr;
}