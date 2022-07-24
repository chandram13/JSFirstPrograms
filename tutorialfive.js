// JS Date Objects, Different Ways
const d = new Date(); // creates a new date object with current date and time
new Date(year, month, day, hours, minutes, seconds, milliseconds);
// const d = new Date(2018, Sunday, 8, 30, 60, 30);
// month parameter is NEEDED or first param treated as milliseconds i.e. const m = new Date(180);
new Date(milliseconds);
new Date(date string);

// newDate(dateString)
// const d = newDate("February 14, 2021 9:03:00");

// short dates
const d = new Date("03/18/2022");

// long dates
const d = new Date("Mar 18 2022");

// JS Get Date Methods

// getTime() returns num of milliseconds since 1/01/1970
const d = newDate();
d.getTime();
/* other methods: d.getFullYear, d.getMonth(),
d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds, d.getDay */

// Set Date Methods
// setFullYear
const d = newDate();
d.setFullYear(2023,08, 04);

// d.setMonth() sets month from 0-11
// d.setDate() sets days from 1-31
// d.setHours() sets hours from 0-23
// d.setMinutes() sets mins from 0-59
// d.setSeconds() sets secs from 0-59

// JS Random Function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * max - min) + min;
}

// JS Booleans
Boolean() //determines if true or false
let x = 0;
Boolean(x); //outputs true
let y = -0;
Boolean(y) //outputs false

// if let x = "" output false
// if let y = x (undefined, also false)
// if let x = null output false
// if let x = NaN output false

let x = new Boolean(false) // boolean becomes object

// comparing two JS objects always return false

// Comparisons

// == equal to, === equal value and type, != not equal, !== not equal value or type

// Conditional Operators
myVar = (condition) ? value1:value2

let age = (number < 21) ? "Too young":"Old Now"

age = Number(age);
if (isNaN(age)){
    voteable = "Input is not a number"
} else {
    voteable = (age < 21) ? "Too Young":"Old Now"
}

// JS if, else, and else if

if (condition) {
    document.getElement("demo").innerHTML = "some value"
}

if (alphabet > 26) {
    greeting = "There are not more than 26 letters in the alphabet"
}

if (score > 70) {
    greeting = "You have passed the course."; }
    else {
        greeting = "You need to repeat the course.";
    }
}
if (score > 50) {
    greeting = "You have successfully passed the course."; }
    else if (score > 60){
        greeting = "You have barely passed the course.";}
    else {
        greeting = "You need to repeat the course.";
    }

 // JS Switch Statements

switch(100 < x < 0) {
    case 1:
        x = 60 < x < 0;
        document.getElementById("demo").innerHTML = "You have failed the course."
        break;
    case 2:
        x = 80 < x < 70; {
        document.getElementById("demo").innerHTML = "You have received a C in the course."}
        break;
    case 3:
        x = 90 < x < 80; {
            document.getElementById("demo").innerHTML = "You have received a B in the course." }
        break;
    case 4:
        x = 100 < x < 90; {
            document.getElementById("demo").innerHTML = "You have received an A in the course!"
        break;
    }
        default:
            x = 100 < x < 0; {
            document.getElementbyId("demo").innerHTML = "Thank you for taking the course!" }
        break;
    }


