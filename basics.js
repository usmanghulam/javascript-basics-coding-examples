
// Global Variables
const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date();
const div = document.getElementById('render');


// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const DateTime1 = () => {
    const today = `Today is ${days[date.getDay() - 1]}`;
    const currentHour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const currentMinute = date.getMinutes();
    const currentSec = date.getSeconds();
    const timeZone = currentHour > 12 ? "AM" : "PM";
    const currentTime = `Current time is : ${currentHour} ${timeZone} : ${currentMinute} : ${currentSec}`;
    return `${today} 
${currentTime}`;
}

// 2. Write a JavaScript program to print the contents of the current window.  Go to the editor

const printCurrentWindow = () => {
    window.print();
}

// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
const getCurrentDate = (format = "-") => {
    const todayDate = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const today = `${month}${format}${todayDate}${format}${year}`;
    return today;
}

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
        div.textContent = newString
    }, 200);
}

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

const getLeapYears = (year) => {
    if (year % 4 === 0) {
        return "Leap Year";
    }
    return "Ordinary year";
}

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

const firstJanuaryOnSunday = (date1 = 2014, date2 = 2050) => {
    const diff = Math.abs(date1 - date2);
    const arr = [];
    for(let i=0; i <= diff; i++) {
        const date = `1 jan ${date1 + i}`;
        const day = new Date(date).getDay();
        if (days[day] == "Sunday") {
            arr.push(date1 + i);
        }
    }
    return arr;
}

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. 
// If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 

const guessNumber = (guess= 2) => {
    const guessNumber = Math.floor(Math.random() * 10);
    if (guessNumber === guess) {
        return "Good work";
    }
    return "Not matched";
}

// 9. Write a JavaScript program to calculate days left until next Christmas.

const daysLeftChristmas = () => {
    const currentYear = date.getFullYear()
    const diff = Math.abs(new Date(`${currentYear} Dec 25`) - date);
    const remaningDays = diff / (1000 * 60 * 60 * 24);
    return Math.ceil(remaningDays);
}

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
// 12. Write a JavaScript program to get the website URL (loading page).
const getURL = () => {
    const url = window.location.href;
    return `You URL = ${url}`;
}

// 13. Write a JavaScript exercise to create a variable using a user-defined name.
// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double 
// the absolute difference.

// Algorithm
function abc(str1="aabc", str2="aaab"){
    let arr = [];
    for(let i=0; i < str1.length; i++) {
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
const sumDouble = n => {
    const num = 13;
    if (n < num) {
        return num - n;
    } else {
        return Math.abs((num - n) * 2);
    }
}

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns 
// triple their sum.  Go to the editor.

const sumTriple = (n1, n2) => {
    if (n1 === n2) {
        return (n1 + n2) * 3;
    }
    return n1 + n2;
}

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
// Returns triple their absolute difference if the specified number is greater than 19.

const sumTriple2 = n => {
    if (n > 19) {
        return (n *3);
    }
    return (19 - n);
}

// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

const SumOREqual50 = (n1, n2) => {
    if (n1 === 50 || n2 === 50 || (n1 + n2) === 50) {
        return true
    }
    return false;
}

// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given 
// string begins with "Py" then return the original string.
const createString = str => {
    if ("Py" === str.substring(0, 2)) {
        return str;
    }
    return `Py${str}`;
}

// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.  
const removeCharString = (string="usmanghulam", index=5) => {
    let newString = string.split("");
    newString.splice(index, 1);
    return newString.join().replaceAll(",","");
}

// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. 
// The string length must be greater than or equal to 1.
const changeString = str => {
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
}

// 24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
const frontBack = str => {
    let stringSplit = str.split("");
    let firstChar = str.charAt(0);
    stringSplit.unshift(firstChar);
    stringSplit.push(firstChar);
    return stringSplit.join().replaceAll(",", "");
}

// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
const multipleOF37 = n => {
    if (n % 3 === 0 || n % 7 === 0) {
        return true
    }
    return false;
}

// 28. Write a JavaScript program to check whether two given integer values are in
//  the range 50..99 (inclusive). Return true if either of them are in the said range.

const rangeNumber = n => {
    if (n >= 50 && n <= 99) {
        return true;
    }
    return false;
}

// QUICK ALGO
function stringFun(str="usmanghulam") {
    let obj = {};
    for(let i=0; i<str.length; i++) {
        if (obj[str.charAt(i)] === 1) {
           obj[str.charAt(i)] = obj[str.charAt(i)] + 1
        } else {
            obj[str.charAt(i)] = 1;
        }
    }
    return obj;
}

// 30. Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" 
// presents in the string return the string without "Script" otherwise return the original one. 

