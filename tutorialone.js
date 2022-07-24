// changing HTML content

document.getElementById("demo").innerHTML = "Hello Javascript";

document.getElementById("demo2").innerHTML = "My First Code Line";
// accepts demo or demo2 with single quote ''

// change HTML styles (css)
document.getElementById("demo").style.fontsize:"35px";

document.getElementById("demo2").style.fontsize:"65px";

// hide HTML elements
document.getElementById("demo").style.display = "none";

// show HTML elements
document.getElementById("demo").style.display = "block"

// <script> tag
<script>
    document.getElementById("demo").innerHTML = "My first code line";
    </script>

// scripts placed in the <body> or <head> sections (in web page)
// <head>, <body> tags come before function in JS

// External JS, References
// <script src={"firstScript.js"}</script>

//<script src="https://www.myschool.com/js/demoScript.js"</script> # using url
//<script src="/js/demoScript.js"</script> # locate file comp
// <script src="demoScript.js"></script> # no file path

// OUTPUT
// innerHTML
<script>
document.getElementById("demo3").innerHTML = 11 + 9;
</script>

// document.write ONLY FOR TESTING
<script>
    document.write(11 + 9);
</script>

// window.alert() // alert box to display data
<script>
    window.alert(5 + 9);
</script>
// BETTER WAY: <script> alert(5 + 9); </script>

// print statement: console.log("This will print");

// window.print()

// functions

let b = function(12,24);
function(a1,a2) {
    return a1 * a2;
}
// calling
function(a1,a2);

// Function example: Convert F to C
function toFahren(celsius) {
    return (9/5) * (celsius+32);
}
document.getElementById("demo").innerHTML = toFahren(30);

let temp1 = toFahren(celsius);
let text = "The current temperature is" + temp1 + "Fahrenheit.";

// local variables are defined within the function

// Objects , key value pairing

const shoe = {brand:"Converse",color:"black",type:"low tops"};

// Accessing properties

shoe.brand;
shoe.color;
shoe.type;

// Methods

const demographic = {
    country: "United States",
    age: "30",
    length:"Six feet",
    fullDemo : function() {
        returnthis.country + " " + this.length;
    }
}
// accessing object methods

my home = demographic.country();

// Events
// HTML elements

<element event='first line'>
</element> // or <element event = "first line"></element>

// onclick attribute
<button onclick="document.getElementById("demo").innerHTML = Day()">The day is?</button>

// changing innerHTML with onclick, we used this b/c we are changing the value in Day()
<button onclick="this.innerHTML = Day()">The day is?</button>

// Creating strings

let animal = "Giraffe";
let length = animal.length;

let warriors = "We are from \"San Francisco\" and are proud. ";

// break up code lines

let lakers = "We are from Los Angeles \ and have good players.";

// string addition
document.getElementById("demo").innerHTML = "Apple" + "Macintosh";

// String Methods

// slice(start,end)
// substring(start,end)
// substr(start, length)

// let str = "Cow, Buffalo, Chicken";
// let part = slice(4,8);

// substring function
// let str = "Green, Orange, White";
// let newPart = str.substring(8,11);

// substr()
// let str = "Pears, Plums, Peaches";
// let newerPart = str1.substr(7,5);

// Replace String Content
let intro = "Please visit our store";
let newIntro = text.replace("Please", "Go");

// follow same process as replace but with toUpperCase and toLowerCase ^^

// Concatenation

let x = "The";
let y = "Sound";
let z = x.concat("New", y);

// padStart(), padEnd()

// Extracting String characters
charAt(position); let var x = "bye" let char = charAt(2);
charCodeAt(position); let var y = "see ya" let char = y.charCodeAt(4);
Property access[]

// Converting a String to an Array
intro.split(",")
intro.split(" ")

// String Search

let vrm = "Please please find me where 'this' is at!";
vrm.indexOf('this');

// lastIndexOf() method
let vrm = "Please please find me where 'this' is at!";
vrm.lastIndexOf('this');
// using just search()
let vrm = "Just found a new 'toy' to play with!";
vrm.search('toy');

// String match()
let text2 = "The rain in BRITAIN stays warm and cool."
text2.match(/ain/g);
// syntax string.match(regexp)

// includes(method) --> format: string.includes(searchvalue, start)
// startsWith() --> verifies starting value string.startsWith(searchvalue,start)
// endsWith() --> verifies ending value string.endsWith(searchvalue,length)
let food = "cabbage and rice";
food.includes("cabbage");


