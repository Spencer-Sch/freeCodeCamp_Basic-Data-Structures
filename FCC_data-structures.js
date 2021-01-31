// freeCodeCamp Basic Data Structures

// Lesson 1

let yourArray = ["the first element", 42, true, "another element", false];

// Lesson 2

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "changed element";
// Only change code above this line
console.log(myArray);

// Lesson 3

function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

// Lesson 4

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// Lesson 5
// Note: Splice(x, y) x = index to begin splice y = number of elements
// to remove starting at position x (inclusive)
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1, 4);
// Only change code above this line
console.log(arr);

// Lesson 6
// the 3rd and beyond arguments of splice() will be added in place of what was removed
function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// Lesson 7
// slice(x, y) will copy array elements beginning at the index of x and ending at the index of y.
// x is inclusive while y is exlusive.

function forecast(arr) {
  // Only change code below this line
  let weather = arr.slice(2, 4);
  return weather;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Lesson 8

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

// Lesson 9

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());

// Last Commit
// Lesson 10

function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) >= 0) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Lesson 11

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i=0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) < 0 ) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));