// Global Variables
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const alphabeticCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const date = new Date();
const div = document.getElementById("render");

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const DateTime1 = () => {
  const today = `Today is ${days[date.getDay() - 1]}`;
  const currentHour =
    date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const currentMinute = date.getMinutes();
  const currentSec = date.getSeconds();
  const timeZone = currentHour > 12 ? "AM" : "PM";
  const currentTime = `Current time is : ${currentHour} ${timeZone} : ${currentMinute} : ${currentSec}`;
  return `${today} 
${currentTime}`;
};

// 2. Write a JavaScript program to print the contents of the current window.  Go to the editor

const printCurrentWindow = () => {
  window.print();
};

// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
const getCurrentDate = (format = "-") => {
  const todayDate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const today = `${month}${format}${todayDate}${format}${year}`;
  return today;
};

// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by
// periodically removing one letter from the end of the string and attaching it to the front.

// const rotateString = (str = "w3resource") => {
//     const length = str.length;
//     const output = [];
//     setInterval(() => {
//         output = [];
//         for(let i=0; i<=length; i++) {
//             output.push(str.charAt(length - i));
//         }
//     }, 2000)
// }
// function name(s) {
//     const str = s || "usman";
//     const length = str.length;
//     var output = [];
//     for(let i=0; i<length; i++) {
//         output.push(str.charAt((length-1) - i))
//     }
//     return output.join().replaceAll(",", "");
// }
// function name1(s) {
//     const str = s || "usman";
//     const length = str.length;
//     var output = [`${str.charAt(length - 1)}`];
//     let i = 1;
//     setInterval(() => {
//      if (i === length) {
//         i = 1;
//         output = [`${str.charAt(length - 1)}`];
//      }
//      else {
//         output.push(str.charAt(length - i))
//      }
//     i++;
//     return output.join().replaceAll(",","");

//     }, 1000);
// }
// console.log(name1());
const rotateString = (str = "w3resource") => {
  const length = str.length;
  let i = 0;
  var newString = "";
  setInterval(() => {
    if (i > length) {
      i = 0;
    } else {
      newString = str.substring(length - i);
    }
    i++;
    div.textContent = newString;
  }, 200);
};

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

const getLeapYears = (year) => {
  if (year % 4 === 0) {
    return "Leap Year";
  }
  return "Ordinary year";
};

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

const firstJanuaryOnSunday = (date1 = 2014, date2 = 2050) => {
  const diff = Math.abs(date1 - date2);
  const arr = [];
  for (let i = 0; i <= diff; i++) {
    const date = `1 jan ${date1 + i}`;
    const day = new Date(date).getDay();
    if (days[day] == "Sunday") {
      arr.push(date1 + i);
    }
  }
  return arr;
};

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number.
// If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

const guessNumber = (guess = 2) => {
  const guessNumber = Math.floor(Math.random() * 10);
  if (guessNumber === guess) {
    return "Good work";
  }
  return "Not matched";
};

// 9. Write a JavaScript program to calculate days left until next Christmas.

const daysLeftChristmas = () => {
  const currentYear = date.getFullYear();
  const diff = Math.abs(new Date(`${currentYear} Dec 25`) - date);
  const remaningDays = diff / (1000 * 60 * 60 * 24);
  return Math.ceil(remaningDays);
};

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
// 12. Write a JavaScript program to get the website URL (loading page).
const getURL = () => {
  const url = window.location.href;
  return `You URL = ${url}`;
};

// 13. Write a JavaScript exercise to create a variable using a user-defined name.
// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double
// the absolute difference.

// Algorithm
function abc(str1 = "aabc", str2 = "aaab") {
  let arr = [];
  for (let i = 0; i < str1.length; i++) {
    let character = str1.charAt(i);
    let index = str2.indexOf(character);
    if (index >= 0) {
      if (arr[index]) {
        arr[index + 1] = character;
      } else {
        arr[index] = character;
      }
    }
  }
  const newArr = arr.join().replaceAll(",", "");
  if (newArr === str1) {
    return "Success";
  }
  return "Fail";
}

// 15. Write a JavaScript program to get the difference between a given number and 13,
//  if the number is greater than 13 return double the absolute difference.
const sumDouble = (n) => {
  const num = 13;
  if (n < num) {
    return num - n;
  } else {
    return Math.abs((num - n) * 2);
  }
};

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns
// triple their sum.  Go to the editor.

const sumTriple = (n1, n2) => {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  }
  return n1 + n2;
};

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19.
// Returns triple their absolute difference if the specified number is greater than 19.

const sumTriple2 = (n) => {
  if (n > 19) {
    return n * 3;
  }
  return 19 - n;
};

// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

const SumOREqual50 = (n1, n2) => {
  if (n1 === 50 || n2 === 50 || n1 + n2 === 50) {
    return true;
  }
  return false;
};

// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given
// string begins with "Py" then return the original string.
const createString = (str) => {
  if ("Py" === str.substring(0, 2)) {
    return str;
  }
  return `Py${str}`;
};

// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
const removeCharString = (string = "usmanghulam", index = 5) => {
  let newString = string.split("");
  newString.splice(index, 1);
  return newString.join().replaceAll(",", "");
};

// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters.
// The string length must be greater than or equal to 1.
const changeString = (str) => {
  if (str.length > 1) {
    let charFirst = str.charAt(0);
    let charLast = str.charAt(str.length - 1);
    let newString = str.split("");
    newString.shift();
    newString.pop();
    newString.unshift(charLast);
    newString.push(charFirst);
    return newString.join().replaceAll(",", "");
  }
  return "Invalid String";
};

// 24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
const frontBack = (str) => {
  let stringSplit = str.split("");
  let firstChar = str.charAt(0);
  stringSplit.unshift(firstChar);
  stringSplit.push(firstChar);
  return stringSplit.join().replaceAll(",", "");
};

// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
const multipleOF37 = (n) => {
  if (n % 3 === 0 || n % 7 === 0) {
    return true;
  }
  return false;
};

// 28. Write a JavaScript program to check whether two given integer values are in
//  the range 50..99 (inclusive). Return true if either of them are in the said range.

const rangeNumber = (n) => {
  if (n >= 50 && n <= 99) {
    return true;
  }
  return false;
};

// QUICK ALGO
function stringFun(str = "usmanghulam") {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str.charAt(i)] === 1) {
      obj[str.charAt(i)] = obj[str.charAt(i)] + 1;
    } else {
      obj[str.charAt(i)] = 1;
    }
  }
  return obj;
}

// 30. Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script"
// presents in the string return the string without "Script" otherwise return the original one.

const checkScript = (str) => {
  if (!str.includes("Script")) return str;
  if (str.indexOf("Script") === 5) {
    return str.replace("Script", "");
  }
  return str;
};

// 31. Write a JavaScript program to find the largest of three given integers.  Go to the editor

const findLargest = (...rest) => {
  let largerNumber = 0;
  for (let i = 0; i < rest.length; i++) {
    if (largerNumber < rest[i]) {
      largerNumber = rest[i];
    }
  }
  return largerNumber;
};

// 33. Write a JavaScript program to check whether two numbers are in range 40..60
// or in the range 70..100 inclusive.  Go to the editor

// 35. Write a program to check whether a specified character exists within the 2nd to 4th position
// in a given string.  Go to the editor

const checkStringChar = (string, char) => {
  if (string.charAt(1) === char && string.charAt(3) === char) {
    return true;
  }
  return false;
};

// 36. Write a JavaScript program to check whether the last digit of the three given
// positive integers is same.  Go to the editor

const lastthreeDigit = (n1, n2, n3) => {
  let number1 = n1.toString();
  number2 = n2.toString();
  number3 = n3.toString();
  if (
    number1.charAt(number1.length - 1) === number2.charAt(number2.length - 1) &&
    number2.charAt(number2.length - 1) === number3.charAt(number3.length - 1)
  ) {
    return true;
  }
  return false;
};

// 37. Write a JavaScript program to create new string with first 3 characters are in lower case from
// a given string. If the string length is less than 3 convert all the characters in upper case.

const createNewString = (str) => {
  if (str.length < 3) {
    return str.toUpperCase();
  }
  let remaningStr = str.substring(3);
  let threeChar = str.substring(0, 3);
  return `${threeChar.toLowerCase()}${remaningStr}`;
};

// 38. Write a JavaScript program to check the total marks of a student in various examinations.
// The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination
// is "Final-exam." the student will get A+ grade and total
// marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise

// 39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range
// 50..80 return 65 other wise return 80.

// Write a function that accepts a positive integer range and, for each increment in the range, prints:
// - "Fizz" if a multiple of 3
// - "Buzz" if a multiple of 5
// - "Bazz" after consecutive Fizzes/Buzzes.
// - The integer itself otherwise.
// Example:
// for f(12,16), the output is "Fizz 13 14 FizzBuzz Bazz".
// for f(4,11), the output is “4 Buzz Fizz Bazz 8 Fizz Buzz Bazz”.

const BuzzFizz = (n1, n2) => {
  const arr = [];
  const range = Math.abs(n1 - n2);
  let startingNumber = n1 < n2 ? n1 : n2;
  for (let i = 0; i <= range; i++) {
    if (startingNumber % 3 === 0) {
      arr.push("Fizz");
    } else if (startingNumber % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(startingNumber);
    }
    startingNumber = startingNumber + 1;
  }
  return arr.join().replaceAll(",", "");
};

//   39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

const SumTwoInteger = (n1, n2) => {
  const sum = n1 + n2;
  if (sum >= 50 && sum <= 80) return 65;
  else return 80;
};

// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  Go to the editor

const findDifference = (n1, n2) => {
  if (n1 === 8 || n2 === 8 || n1 + n2 === 8 || Math.abs(n1 - n2) === 8)
    return true;
  else false;
};

// 41. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
const sameNumber = (n1, n2, n3) => {
  if (n1 === n2 && n2 === n3) return 30;
  else if (n1 === n2 || n2 === n3) return 40;
  else return 20;
};

// 44. Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.

const largerNumber1 = (...rest) => {
  const [a, b, c] = rest;
  if (a >= 20 && a < b && a < c) return true;
  else if (b >= 20 && b < a && b < c) return true;
  else if (c >= 20 && c < a && c < b) return true;
  else return false;
};

// 45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.
const findDifference1 = (...rest) => {
  const [a, b] = rest;
  if (a === 15 || b === 15 || a + b === 15) return true;
  else return false;
};

// 46. Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.
const Multipleof711 = (n1, n2) => {
  if (n1 % 7 === 0 || n1 % 11 === 0 || n2 % 7 === 0 || n2 % 11 === 0)
    return true;
  else false;
};

// 48. Write a JavaScript program to reverse a given string.
const reverseString = (str) => {
  // const arr = str.split("");
  // return arr.reverse().join().replaceAll(",","");
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + str.charAt(i);
  }
  return newString;
};

// 50. Write a JavaScript program to capitalize the first letter of each word of a given string.

const capitalizeString = (str) => {
  const newString = str.split(" ");
  let newReturnString = "";
  for (let singleString of newString) {
    if (singleString !== undefined) {
      newReturnString =
        newReturnString +
        " " +
        (singleString.charAt(0).toUpperCase() + singleString.slice(1));
    }
  }
  return newReturnString;
};

// 52. Write a JavaScript program to convert the letters of a given string in alphabetical order.

const alphabeticalOrder = (str) => {
  return str.split("").sort().join().replaceAll(",", "");
};

// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

const ABseperated = (str) => {
  const arr = str.split("");
  const indexes = [];
  for (let index in arr) {
    if (arr[index] === "a") {
      indexes.push(index);
    }
  }
  for (let index of indexes) {
    if (arr[Number(index) + 4] === "b") {
      return true;
    }
  }
  return false;
};

// 54. Write a JavaScript program to count the number of vowels in a given string.  Go to the editor

const FindVovels = (str) => {
  const VOVELS = ["A", "E", "I", "O", "U"];
  const vovels = ["a", "e", "i", "o", "u"];
  const string = str.split();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (VOVELS.includes(str.charAt(i)) || vovels.includes(str.charAt(i))) {
      count++;
    }
  }
  return count;
};

// 56. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.  Go to the editor
const FormatedCommas = (n1, n2) => {
  const arrString = Math.round(n1 / n2)
    .toString()
    .split("");
  return arrString.join();
};

// 57. Write a JavaScript program to create a new string of specified copies (positive number) of a given string.  Go to the editor

const CopiesString = (str, numberOfCopies) => {
  let copies = "";
  if (numberOfCopies > 0) {
    for (let i = 0; i < numberOfCopies; i++) {
      copies = copies + str;
    }
  } else return false;
  return copies;
};

// 58. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string.
// The length of the given string must be 3 and above.  Go to the editor

const ModifiedString = (str) => {
  if (str.length < 3) return false;
  const newString = str.substring(str.length - 3, str.length);
  let returnString = "";
  for (let i = 0; i < 4; i++) {
    returnString += newString;
  }
  return returnString;
};

// const DIfferenceBtwVarLet = () => {
//     let div1 = document.getElementById('div1');
//     let div2 = document.getElementById('div2');
//     if (div1.style.color === "black") {
//         div1.style.color === "blue"
//     } else {
//         div1.style.color === "black"
//     }
// }
// const btn = document.createElement('button');
// const div1 = document.createElement('div');
// div1.setAttribute("id", "div1");
// div1.style.color = "black";
// const div2 = document.createElement("div");
// div2.setAttribute("id", "div2")
// div2.style.color = "blue";

// btn.innerText = "Click Me";
// btn.addEventListener('click', DIfferenceBtwVarLet)
// div.appendChild(btn);
// div.appendChild(div1);
// div.appendChild(div2);

// 59. Write a JavaScript program to extract the first half of a string of even length.

// const firstHalfString = str => {
//     let lengthHalf = str.length / 2;
//     return str.substring(0, lengthHalf);
// }
// console.log(firstHalfString("usman ghulam"))

// 60. Write a JavaScript program to create a new string without the first and last character of a given string.

// const extractString = str => {
//     let removeFirstChar = str.substring(1);
//     return removeFirstChar.substring(0, removeFirstChar.length - 1);
// }
// console.log(extractString("Usman Ghulam"));

// 61. Write a JavaScript program to concatenate two strings except their first character.  Go to the editor
let data = {
  left: {
    left: {
      left: {
        left: {},
        right: {},
        value: 2,
      },
      right: {
        left: {},
        right: {},
        value: 2,
      },
      value: 2,
    },
    right: {
      left: {
        left: {},
        right: {},
        value: 2,
      },
      right: {
        value: 4,
      },
      value: 2,
    },
    value: 2,
  },
  right: {
    left: {
      left: {
        left: {},
        right: {},
        value: 2,
      },
      right: {
        left: {},
        right: {},
        value: 2,
      },
      value: 2,
    },
    right: {
      left: {
        value: 5,
      },
      right: {
        left: {},
        right: {},
        value: 2,
      },
      value: 2,
    },
    value: 3,
  },
  value: 1,
};

let arr = [];

// const recursiveFunction = (obj) => {
//     console.log(obj);
//     if (Object.keys(obj).length === 1 && obj.value) {
//         arr.push(obj.value)
//     }
//     else {
//         Object.keys(obj).forEach(key => {
//             recursiveFunction(obj[key]);
//         })
//     }
// }

// Object.keys(data).forEach(key => {
//     if (typeof data[key] === "object") {
//         recursiveFunction(data[key]);
//     }
// })

// Q2: Given a string, reverse each word in the sentence
const reversetEachStringChar = (
  str = "Hi Myself Usman from Islamabad, And I'm a Full Stack Developer thanks!"
) => {
  const stringArray = str.split(" ");
  const reverseArray = [];
  stringArray.forEach((str) => {
    reverseArray.push(str.split("").reverse().join().replaceAll(",", ""));
  });
  return reverseArray;
};

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

const createBase = (number) => {
  return function (N) {
    return number * N;
  };
};

const addSix = createBase(6);

var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func: this.foo=" + this.foo); //bar
    console.log("outer func: self.foo = " + self.foo); //bar
    (function () {
      console.log("inner func: this.foo = " + this.foo); //undefined
    })();
  },
};

// (function() {
//   console.log(1);
//   setTimeout(function(){
//     console.log(2)
//   }, 1000);
//   setTimeout(function(){
//     console.log(3)
//   }, 0);
//   console.log(4);
// })();

const sum = (...rest) => {
  if (rest.length > 1) {
    return rest[0] + rest[1];
  }
  const [a] = rest;
  return (b) => {
    return a + b;
  };
};

// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', function(){
//     console.log(i);
//   });
//   document.body.appendChild(btn);
// }

// var d = {};
// [ 'zebra', 'horse' ].forEach(function(k) {
//   d[k] = 1;
// });
// console.log({d});

// var arr1 = "john".split(''); //[n, h, o, j, [j, o , n, e, s]];
// var arr2 = arr1.reverse(); //[n, h, o, j, [j, o , n, e, s]];
// var arr3 = "jones".split(''); //[j,o,n,e,s]
// console.log({ arr1, arr2, arr3 })
// arr2.push(arr3); //[n, h, o, j, j, o , n, e, s];
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); // 5 // [n]
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); //5 // [s]

// console.log(1 + "2" + "2"); //122
// console.log(1 + +"2" + "2"); //32
// console.log(1 + -"1" + "2"); //02
// console.log(+"1" + "1" + "2"); // 112
// console.log( "A" - "B" + "2"); //NaN2
// console.log( "A" - "B" + 2); // NaN

// var list = [1,2,3,4,5,6,7,8,9] // ||  readHugeList();
// var nextListItem = function() {
//   var item = list.pop();
//   console.log({item})
//   if (item) {
//     // console.log({item})
//     // process the list item...
//     nextListItem();
//   }
// };
// console.log(nextListItem());

// console.log("0 || 1 = "+(0 || 1));
// console.log("1 || 2 = "+(1 || 2));
// console.log("0 && 1 = "+(0 && 1));
// console.log("1 && 2 = "+(1 && 2));

// What will be the output when the following code is executed? Explain. console.log(false == '0') console.log(false === '0')

// var a={}, b={key:'b'}, c={key:'c'};
// a[b]=123;
// a[c]=456;
// console.log(a[b]);

// console.log((function f(n){
//   return ((n > 1) ? n * f(n-1) : n);
// })(10));

// // 10 * 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9

// (function(x) {
//   return (function(y) {
//     console.log(x);
//   })(2)
// })(1);

// var hero = {
//   _name: 'John Doe',
//   getSecretIdentity: function (){
//     return this._name;
//   }
// };
// var stoleSecretIdentity = hero.getSecretIdentity;
// console.log(stoleSecretIdentity()); // undefined
// console.log(hero.getSecretIdentity()); // John Doe

// not answered
// Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function. The arguments to the function should be:
// a DOM element
// a callback function (that takes a DOM element as its argument)

// var length = 10;
// function fn() {
//   console.log(this.length);
// }
// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     arguments[0]();
//   }
// };
// obj.method(fn, 1);

// (function () {
//   try {
//     throw new Error();
//   }
//   catch (x) {
//     var x = 1, y = 2;
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();

// var x = 21;
// var girl = function () {
//   console.log(x);
//   var x = 20;
// };
// girl ();

// for (let i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, i * 1000 );
// }

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, i * 1000 );
// }

// var b = 1;
// function outer(){
//   var b = 2;
//   function inner(){
//     console.log({b})
//     b++;
//     console.log({b});
//     var b = 3;
//     console.log(b)
//   }
//   inner();
// }
// outer();

// for (var i = 0; i < 5; i++) {
//   function sum() {
//     var j=i;
//     setTimeout(function() {
//       console.log(j+1)
//     },10);
//   }
// sum()
// }

const reverseNumber = (num) => {
  return num.toString().split("").reverse().join().replaceAll(",", "");
};

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const palindrome = (word) => {
  if (typeof word !== "string") return "Please enter a string";
  const reverseWord = word.split("").reverse().join().replaceAll(",", "");
  if (word === reverseWord) return "palindrome Word";
  return "Not a palindrome Word";
};

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

const stringAlphabeticOrder = (str) => {
  return str.split("").sort().join().replaceAll(",", "");
};

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

const convertFirstChar = (str) => {
  const arr = str.split(" ");
  return arr
    .map((char) => {
      const firstChar = char.charAt(0).toUpperCase();
      return `${firstChar}${char.substring(1)}`;
    })
    .join()
    .replaceAll(",", " ");
};

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

const longestChar = (str) => {
  const arr = str.split(" ");
  let logestCharacter = "";
  arr.forEach((char) => {
    if (char.length >= logestCharacter.length) {
      logestCharacter = char;
    }
  });
  return logestCharacter;
};

const generateRandomPassword = (
  str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) => {
  const random = Math.floor(Math.random() * 10);
  const randomNumber = random < 5 ? 5 : random;
  const length = str.length;
  const arr = str.split("");
  const pass = [];
  for (let i = 0; i < randomNumber; i++) {
    const randomNumber = Math.floor(Math.random() * length);
    pass.push(arr[randomNumber]);
  }
  return pass.join().replaceAll(",", "");
};

const countCharacter = (str, char) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str.charAt(i)]) {
      obj[str.charAt(i)] = obj[str.charAt(i)] + 1;
    } else {
      obj[str.charAt(i)] = 1;
    }
  }
  return obj[char] || 0;
};

const notRepeatedCharacters = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str.charAt(i)]) {
      obj[str.charAt(i)] = obj[str.charAt(i)] + 1;
    } else {
      obj[str.charAt(i)] = 1;
    }
  }
  const notRepeatedCharacters = {};
  for (let key in obj) {
    if (obj[key] === 1) {
      notRepeatedCharacters[key] = 1;
    }
  }
  return notRepeatedCharacters;
};
// Solution 1
const bubbleSort = (arr = [1, 4, 3, 2, 23, 23231, 23232323]) => {
  const sort = [];
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    sort[number] = arr[i];
  }
  return sort.filter((val) => val);
};

const newArr = [];
const multipleOfArray = (arr = [1, 2, 3, 4, 5], start = 1) => {
  let num = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i !== start - 1) {
      num = num * arr[i];
    }
  }
  newArr.push(num);
  if (newArr.length !== arr.length) multiple(arr, (start = start + 1));
};

const bubbleSort1 = (originalArr = [1, 4, 3, 2]) => {
  const arr = originalArr.slice();
  for (let i = 0; i < originalArr.length; i++) {}
  return arr;
};
