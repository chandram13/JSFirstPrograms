// JS Types

// Convert string to a number
Number()

// Unary operator
let y = "6";
let x = + y;

// Convert Nums to strs
// String()

x.toString()

// Converting dates to strings
String(Date());
Date().toString();

// Converting bools to strings
String(false) // returns false

// Automatic Type
document.getElementById("demo").innerHTML = myVar;

// Regular Expressions
// format
/pattern/modifiers;
// /w3schools/i, -->w3schools is pattern, i --> modifier

// String Methods: search(), replace()

let text = "Welcome home!";
let d = text.search("home:);

    // search() with regular expression
let text = "Welcome home!";
let d = text.Search(/home/i);

// using string replace()
let text = "Welcome home!";
let result = text.replace("home","dude");

// using string replace() regexp
let text = "Welcome home!";
let result = text.replace(/home/i, "dude");

// using test()

/f/.test("You have a cool life.");

// using exec()
/e/.exec("You have a cool life.");

// throw statement, create custom error
throw "Please try again";

// JS Scope
{
    let x = 5; //only valid here
}
{
    var x = 5;
}
// var can be used here

// Global JS Variables
let storyName = "Jill and Billy"; //defined by itself
    //code here can use storyName

// Auto Global
myFunction(); // can call before this function is defined

function myFunction() {
    storyName = "Jill and Billy";
}
// in HTML use var =

// Declare Strict Mode, must be written at the beginning of ur program
"use strict"

// this in a Method

brandModel: function() {
    return this.honda + "" + this.fit;
}

// example of a map and function

const animal = {
    species: "Giraffe",
    height: "ten feet",
    age: "twelve",
    giraChar: function (
    return this.species + "" + this.height;
);

    const animal = {
    giraChar: function(
        return this.species + "" + this.height;
    )
}

const homeYard ={
    back : "very clean";
    front : "structured";
    }
}
animal.giraChar.call(animal);

// bind same as example above, but...

let favoriteAnimal = animal.giraChar.bind(animal);


// Classes in JS, always add constructor methods

// syntax
class ClassName {
    constructor() { ... }
}

class Commercial {
    constructor(x, z) {
        this.x = x;
        this.z = z;
    }
}

// adding parameters

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

let date = newDate();
let year = date.getFullYear();

let myCar = new Car("Uro",2019);
document.getElementById("demo").innerHTML = "My car is" + myCar.age(year) + "years old.";

// another example

class Truck {
    constructor(title, serial) {
        this.title = title;
        this.serial = serial;
    }
    age(x){
        return x - this.serial;
    }
 }
 let date = newDate();
let year = date.getFullYear();

let myTruck = new Truck(title = "New", serial = 14);
document.getElementById("demo").innerHTML = "My truck is " + myTruck.age(year) + "years old.";




