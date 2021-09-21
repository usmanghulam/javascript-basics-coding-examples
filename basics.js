
// Global Variables
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
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

