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
