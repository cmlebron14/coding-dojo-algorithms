const reverseArr = arr => {
  let tempVal;
  for (var i = 0; i < (arr.length / 2); i++) {
    tempVal = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVal;
  }
}

const rotate = (arr, shiftBy) => {
  let x = Math.abs(shiftBy);
  while (x > 0) {
    if (shiftBy > 0) {
      let temp = arr[arr.length - 1];
      for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
      }
      arr[0] = temp;
    } 
  }
  return arr;
}

const filterRange = (arr, min, max) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > min && arr[i] < max) {
      for (let j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr.length = arr.length - 1;
      i--;
    }
  }
  return arr;
}

const arrConcat = (arr1, arr2) => {
  let newArr = [];
  newArrLength = arr1.length + arr2.length;
  for (var i = 0; i < newArrLength - 1; i++) {
    while (newArr.length < arr1.length) {
      newArr[i] = arr1[i];
    }
    while (newArr.length < newArrLength) {
      newArr[i] = arr2[i];
    }
  }
}