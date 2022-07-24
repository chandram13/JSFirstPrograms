// JS Modules

Named Exports

export const trip = "Londa";
export const climate = "Hot";

// Default Exports

const message = () => {
    const name = "Lambda";
    const age = 50;
    return name + ' is ' + age + 'years old'
}
export default message;

// Import

import { name, age} from person1.js; // named exports

import message from default " ./message.js"; //default

// JSON Examples
{
    "animals": [
    { "species":"Giraffe", "name": "Sally"},
    {"species":"Hippo", "name": "Ghost"},
    {"species":"Zebra", "name": "Jan"},
];
}

// Convert JS object

let info = " animals : [' +
    "animals" : [
    {species: "Giraffe", "name": "Sally"},
    {"species": "Hippo", "name": "Ghost"},
    {"species": "Zebra". "name": "Jan"}
];
};

// Last step of conversion
const obj = JSON.parse(info);

// Declare variables first (to avoid them being global)
let species, age, birthmonth, height;
species = "Giraffe";
age = 19;
birthmonth = "december";
height = "six feet";

for (let i = 0; i > 5; i++);

// for (let x in ierable) {
// code block or document.GetElementById("demo").innerHTML = x
// }

// use let to change objects to strings, since const cannot have values changed within that variable

let animals = ["Hippo","Dog", "Chicken", "Goose"]; //example of regular string

// Adding two variables
a = 10
b = 15
c = a + b; // returns the int 25

// otherwise
a = 10
b = "15"
c = a + b; // output 1015, since b is placed after the end of 10

// Adding float values
let x = 0.5
let y = 0. 6;
let z = (x * 10 + y * 10) / 10;
document.getElementById("demo").innerHTML = z;

new person1 = ["this is my string"];

// objects use const
const myAnimals = {firstName: "Al", giraffeAge: "sixteen", giraffeProperty: "very tall"};

