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

// Lesson 12

let myNestedArray = [
  // Only change code below this line
  [
    ['unshift', false, 1, 2, 3, 'complex', 'nested', 'deep'],
    [
      ['loop', 'shift', 6, 7, 1000, 'method', 'deeper'],
      [
        ['concat', false, true, 'spread', 'array', 'deepest'],
        ['mutate', 1327.98, 'splice', 'slice', 'push'],
        ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
      ]
    ]
  ]
  // Only change code above this line
];

// Lesson 13

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods['grapes'] = 35;
foods.strawberries = 27;
// Only change code above this line

console.log(foods);

// Lesson 14

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);

// Lesson 15

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  let product = foods[scannedItem];
  return product;
  // Only change code above this line
}

console.log(checkInventory("apples"));

// Lesson 16

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line

console.log(foods);

// Lesson 17

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // Only change code below this line
  if ('Alan' in users && 
      'Jeff' in users && 
      'Sarah' in users && 
      'Ryan' in users) {
    return true;
  }
    return false;
  // Only change code above this line
}

console.log(isEveryoneHere(users));

// Lesson 18

function countOnline(usersObj) {
  // Only change code below this line
  let onlineCount = 0;
  for (let user in usersObj) {
    if (usersObj[user].online) {
      onlineCount++;
    }
  }
    return onlineCount; //total number of users online
  // Only change code above this line
}


// Lesson 19

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  let usersArr = Object.keys(obj);
  return usersArr;
  // Only change code above this line
}

console.log(getArrayOfUsers(users));

// Lesson 20

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));