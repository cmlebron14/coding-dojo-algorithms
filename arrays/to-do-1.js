let pushFront = (arr, val) => {
  let newArray = [val];
  for (var i = 1; i < arr.length; i++) {
    newArray[i] = arr[i - 1];
  }
  return newArray;
}
// console.log(`push front: ${pushFront([2, 3, 4, 5, 6], 1)}`);

let popFront = arr => {
  let valueOne = arr[0];
  let newArray = [];
  for (var i = 0; i < arr.length - 1; i++) {
    newArray[i] = arr[i + 1];
  }
  // console.log(`old array: ${newArray}`);
  return valueOne;
}
// console.log(`pop front: ${popFront([1, 2, 3, 4, 5])}`);

let insertAt = (arr, index, val) => {
  let newArray = [];
  let i = 0;
  do {
    newArray[i] = arr[i];
    i++;
  } while (i < index)
  newArray[index] = val;
  i++;
  do {
    newArray[i] = arr[i - 1];
    i++;
  } while (i <= arr.length)
  return newArray;
}
// console.log(insertAt([0, 1, 2, 4, 5, 6], 3, 3));

let removeAt = (arr, index) => {
  let newArray = [];
  let i = 0;
  do {
    newArray[i] = arr[i];
    i++;
  } while (i < index)
  do {
    newArray[i] = arr[i + 1];
    i++;
  } while (i < (arr.length - 1))
  return newArray;
}
// console.log(removeAt([0, 1, 2, 3, 4, 5, 6], 3));

let swapPairs = arr => {
  for (var i = 0; i < (arr.length - 1); i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}
// console.log(swapPairs([0, 1, 2, 3, 4]));

let removeDuplicates = arr => {
  for (var i = 0; i < (arr.length - 1); i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}