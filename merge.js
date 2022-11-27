let firstHigherBound, secondHigherBound;
let temp = [];
let tempPosition = 0;
let i = 0;
let j = 0;

function sortArrayToTempArray(array) {
  while (i <= firstHigherBound && j <= secondHigherBound) {
    if (array[i] <= array[j]) {
      temp[tempPosition] = array[i];
      i++;
    } else {
      temp[tempPosition] = array[j];
      j++;
    }
    tempPosition++;
  }
}

function addLastValuesToTempArray(array) {
  while (i <= firstHigherBound) {
    temp[tempPosition++] = array[i++];
  }
  while (j <= secondHigherBound) {
    temp[tempPosition++] = array[j++];
  }
}

function mergeSort(array) {
  const length = array.length;
  temp = [];
  let secondLowerBound, firstLowerBound;
  for (let size = 1; size < length; size *= 2) {
    firstLowerBound = 0;
    tempPosition = 0; 

    while (firstLowerBound + size < length) {
      firstHigherBound = firstLowerBound + size - 1;
      secondLowerBound = firstHigherBound + 1;
      secondHigherBound = secondLowerBound + size - 1;

      if (secondHigherBound >= length) secondHigherBound = length - 1;

      i = firstLowerBound;
      j = secondLowerBound;

      sortArrayToTempArray(array);
      addLastValuesToTempArray(array);
      firstLowerBound = secondHigherBound + 1;
    } 

    for (let i = firstLowerBound; tempPosition < length; i++) {
      temp[tempPosition++] = array[i];
    }

    for (let i = 0; i < length; i++) {
      array[i] = temp[i];
    }
  } 

  return array;
}

const array = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(mergeSort(array, array.length));
