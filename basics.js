
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
