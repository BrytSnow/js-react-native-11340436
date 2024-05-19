//Task 1
function processArray(arr) {
  return arr.map((num) => {
    if (num % 2 === 0) {
      return num * num;
    } else {
      return num * num * num;
    }
  });
}

//Task 2
function formatArrayStrings(stringArray, numberArray) {
  return stringArray.map((str, index) => {
    if (numberArray[index] % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}
export { processArray, formatArrayStrings};
