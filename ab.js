// // function someFunc() {
// //     return new Promise((resolve, reject)=> {
// //       setTimeout(() => {
// //         resolve("First")
// //       }, 0)
// //     })
// //   }
  
// //   function someFunc2(val) {
// //     return new Promise((resolve, reject)=> {
// //       setTimeout(() => {
// //         console.log("second")
// //         resolve(`After ${val}`)
// //       }, 0)
// //     })
// //   }
  
// //   function someFunc3(val) {
// //     return new Promise((resolve, reject)=> {
// //       setTimeout(() => {
// //         console.log("last")
// //         resolve(`At the end ${val}`)
// //       }, 0)
// //     })
// //   }

// //   const fullname = "usamn"

// //   let resursiveobject = {
// //     left: {
// //       left: {
// //         left: {
// //           left: {},
// //           right: {},
// //           value: 2,
// //         },
// //         right: {
// //           left: {},
// //           right: {},
// //           value: 2,
// //         },
// //         value: 2,
// //       },
// //       right: {
// //         left: {
// //           left: {},
// //           right: {},
// //           value: 2,
// //         },
// //         right: {
// //           value: 4,
// //         },
// //         value: 2,
// //       },
// //       value: 2,
// //     },
// //     right: {
// //       left: {
// //         left: {
// //           left: {},
// //           right: {},
// //           value: 2,
// //         },
// //         right: {
// //           left: {},
// //           right: {},
// //           value: 2,
// //         },
// //         value: 2,
// //       },
// //       right: {
// //         left: {
// //           value: 5,
// //         },
// //         right: {
// //           left: {},
// //           right: {},
// //           value: 2,
// //         },
// //         value: 2,
// //       },
// //       value: 3,
// //     },
// //     value: 1,
// //   };
// //   const newarr = [];
// //   function resursiveFunc(resursiveobject) {
// //     Object.keys(resursiveobject).forEach(key => {
        
// //     })
// // }

// // const ele = document.getElementById('render');
// // const callback = (e, observer) => {
// //   console.log(e, observer);
// // }
// // const observer = new MutationObserver(callback);
// // observer.observe(ele, {
// //   characterData: true,
// //   characterDataOldValue: true,
// // });

// // const ele = document.getElementById("input");
// // const callback = (el, obs) => {
// //   console.log(el, obs);
// // }
// // const inputObserver = new MutationObserver(callback);
// // inputObserver.observe(ele, {
// //   attributes: true, 
// //   childList: true, 
// //   subtree: true
// // });

// const isPrimeNumbers = (num) => {
//     if (num === 1) return false;
//     let primenumber = true;
//     for (let i = 2; i < 100; i++) {
//         if (num !== i && num % i === 0) {
//             primenumber = false;
//         }
//     }
//     return primenumber;
// };

// const gen = generators();
// console.log(gen.next());
// console.log("usman");
// function *generators() {
//     yield "abcd";
//     yield "efgh";
// }

// const reverseString = str => {
//     const l = str.split('');
//     const r = l.reverse().join('').replaceAll(',','');
//     return r;
// }
// console.log(reverseString("a but tuba"));


// function sum(n) {
//     const length = arguments.length;
//     let sum = 0;
//     for(let i = 0; i < length; i++) {
//         sum = sum + arguments[i];
//     }
//     return sum;
// }

// console.log(sum(2)(3))

// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', function(){ console.log(i); });
//     document.body.appendChild(btn);
//   }

// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', (function(i) {
//       return function() { console.log(i); };
//     })(i));
//     document.body.appendChild(btn);
//   }

// var d = {};

// ['zebra', 'horse'].forEach(key => {
//     d[key] = undefined;
// })

// console.log(d)

// var arr1 = "john".split('');
// var arr2 = [...arr1].reverse();

// console.log({  arr1, arr2 });

// const 

// 122
// 122
// 02
// 112
// NaN2
// NaN 

// var name = "usman";
// var name = "ghulam";

// console.log(name)

// for (let i = 0; i < 5; i++) {
//     setTimeout(function() { console.log(i); }, 0 );
// } 
const alphabeticalOrder = str => {
    const alphabeticCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const characters = [];
    const string = str.replaceAll(' ', '');
    const length = str.length;
    for(let i=0; i< length; i++) {
        const character = string.charAt(i);
        const index = alphabeticCharacters.indexOf(character);
        characters[index] = character;
    }
    return characters.filter(char => char).toString().replaceAll(',','');
}

const convertFirstChar = str => {
    const string = str.split(' ');
    const arr = [];
    for(let i = 0; i < string.length; i ++) {
        const firstChar = string[i].charAt(0).toUpperCase();
        arr.push(`${firstChar}${string[i].substring(1)}`);
    }
    return arr.toString().replaceAll(',',' ')
}

const findLongestNumber = str => {
    const string = str.split(' ');
    let charlength = 0;
    let index = 0;
    for(let i =0; i< string.length; i++) {
        const length = string[i].length;
        if (length > charlength) {
            charlength = length;
            index = i;
        }
    }
    return string[index];
}

let val = 1;
const findFictorial = n => {
    if (n === 0) return;
    val = val * n;
    findFictorial(n - 1);
}

// Write a JavaScript program to get the integers in range (x, y)

const IntegerArr = [];
const findTheInteger = (s, e) => {
    if (s === e - 1) return;
    let start = s + 1;
    IntegerArr.push(start);
    findTheInteger(start, e);
}

// Write a JavaScript program to compute the sum of an array of integers.
// Example : var array = [1, 2, 3, 4, 5, 6]

let sum = 0;
const computeSumOfArr = (arr, val) => {
    if ((val) !== arr.length) {
        sum = sum + arr[val]
        computeSumOfArr([1, 2, 3, 4, 5, 6], val + 1)
    }
    return sum;
}

// Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

const array = [2,3,6,4, 7];
const find = (a) => {
  const length = a.length;
  const arr = a.slice();
  let value = 0;
  let usman = 0;
  for(let i=0; i < length; i++) {
    const isOdd = arr[i] % 2 !== 0;
    if (isOdd && (i+1) !== length) {
      const nextValueIsEven = arr[i + 1] % 2 === 0; 
      if (nextValueIsEven) {
        // Replace
        const odd = arr[i];
        const even = arr[i + 1];
        arr[i] = even;
        arr[i + 1] = odd;
        value+=1;
        if (value === 2) {
          value =0;
          usman+=1;
        }
      }
      else {
        // find Next Even and Replace
        const number = arr.slice(i + 1).find(n => n % 2 ===0);
        const index = arr.indexOf(number);
        const current = arr[i];
        const temp = arr[index];
        arr[i] = temp;
        arr[index] = current;
        if (value === 2) {
          value =0;
          usman+=1;
        }
      }
    }
  }
  console.log(arr.filter(val => val), usman);
};

function timeConversion(s = "07:05:45PM") {
    let [hours, mins, seconds] = s.split(':');
    let spliting = seconds.split('');
    let timeZone = "";
    seconds = `${spliting[0]}${spliting[1]}`;
    timeZone = `${spliting[2]}${spliting[3]}`;
    if (hours == 12) {
      hours = '00';
    }
    if (timeZone == "PM") {
      hours = parseInt(hours, 10) + 12;
    }
    console.log(`${hours}:${mins}:${seconds}`);
  }

  const findNumber = (arr, num) => {
    let counter = 0;
    for(let i=0; i<arr.length; i++) {
      const value = arr[i];
      if (value === num) {
        counter+=1
      }
    }
    return counter;
  }
  
  function lonelyinteger(arr) {
    // Write your code here // unique elements
    const noDuplicate = [];
    const length = arr.length;
    for(let i=0; i < length; i++) {
      const current = arr[i];
      const find = findNumber(arr, current);
      if (find === 1) {
        noDuplicate.push(current);
      } 
    }
    console.log(noDuplicate)
  }


function diagonalDifference(arr) {
    // Write your code here
    let left=0,right=0;
    for(let i=0; i<arr.length; i++) {
      const singleArr = arr[i];
      for(let j=0; j <= singleArr.length; j++) {
        const value = singleArr[j];
        const index = (singleArr.length - 1) - i;
        const value2 = singleArr[index];
        if (i === j) {
          left+= value;
          right+=value2;
        }
      }
    }
    return Math.abs(left - right);
  }
  const diagnolArr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ]
//   console.log(diagonalDifference(diagnolArr));