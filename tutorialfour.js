// JS Array ITERATION, forEach()

const points = [10, 30, 40, 65, 23, 18];
let doc = "";
points.forEach(myFunction);

function myFunction(value, index, array) {
    doc += value + "<br>";
}

// JS Array Map

const array1 = [45, 34, 32, 22, 54];
const array2 = array1.map(myFunction);

function myFunction(value, index, array) {
    return value * 5;
}
// simplify with just value parameter

const array1 = [45, 34, 32, 22, 54];
const array2 = array1.map(myFunction);

function myFunction(value) {
    return value * 5;
}

// using filter(), comparing for value greater than the int 10
const array1 = [45, 34, 32, 22, 54];
const array2 = array1.filter(myFunction);

function myFunction(value, index, array){
    return value > 10;
}

// using filter(), but only with value parameter
const array1 = [45, 34, 32, 22, 54];
const array2 = array1.filter(myFunction);

function myFunction(value){
    return value > 10
}

// using reduce()
const myNumbers = [22, 21, 20, 19, 18];
let sum = myNumbers.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}
// using reduce() without the index, array arguments

const myNumbers = [22, 21, 20, 19, 18];
let sum = myNumbers.reduce(myFunction);

function myFunction(total, value) {
    return total + value;
}

// using reduceRight() without the index, array arguments (same as reduce())
const myNumbers = [22, 21, 20, 19, 18];
let sum = myNumbers.reduceRight(myFunction);

function myFunction(total, value) {
    return total + value;
}

// using Every() to check if given value is larger than given integer original args: value, index, array
const myNumbers = [22, 21, 20, 19, 18];
let sum = myNumbers.every(myFunction);

function myFunction(value) { // simplified with just value parameter
    return value > 30;
}

// using some()
const myNumbers = [22, 21, 20, 19, 18];
let sum = myNumbers.some(myFunction);

function myFunction(value, index, array){
    return value > 30;
}

// using indexOf() method
const myColors = ["Red","Green","Burgundy","Cobalt Blue"];
let position = myColors.indexOf("Burgundy") + 1;
document.getElementbyId("demo").innerHTML = " My favorite color in the world is " + position;

// using lastIndexOf()
const myColors = ["Red","Green","Burgundy","Cobalt Blue"];
let position = myColors.lastIndexOf("Red") + 1;
document.getElementById("demo").innerHTML = "My favorite color in the world is " + position;

// using find()
const myConstants = [14, 15, 16, 17, 18];
let search = myConstants.find(myFunction)

function myFunction(value, index, array) {
    return value > 15;
}

// using findIndex()
const myConstants = [14, 15, 16, 17, 18];
let search = myConstants.findIndex(myFunction);

function myFunction(value, index, array) {
    return value > 15;
}

// Array.from() --> Array.from("EFGHIJ") Array.form passes through given string

// Array Keys()
const objects = ["Paperclip","Stapler","Paper","Notebook","Keyboard"];
const keys = objects.keys();
for (let x of keys) {
    text += x + "<br>";
}

// Array entries()
const objects = ["Paperclip","Stapler","Paper","Notebook","Keyboard"];
const k = objects.entries();
for (let x of k ) {
    document.getElementById("demo").innerHTML += x
}

// Array includes
const objects = ["Paperclip","Stapler","Paper","Notebook","Keyboard"];
objects.includes("Stapler");

// Redeclaring Arrays
var toys = ["barbie dolls","toy solider"];
var toys = ["Barbie","toy soldier"];
toys = ["GI Joe","Markers"];

