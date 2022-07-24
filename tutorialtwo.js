// JS Template Literals

let ura = `we use backticks here`;

let ura2 = ` The best pizza is located in "Italy"! `;

// Interpolation ${...}

let taste = "Tempura";
let chew = "slow";
let flavoring = (`Just ${taste} + ${chew}`);

// Numbers
// 1. Numbers are added (+), strings use concatenation (+) allows combining one int with a str
let  x = "10";
let y = "even"
let z = x + y;
document.getElementById("demo").innerHTML(z) // prints result

// Number methods
// returns a number as a string
 let v = 233;
v.toString();
(100).toString();

// toExponetial Method

let n = 43;
n.toExponential(10);
n.toExponential(4);

// toFixed()
let pi = 3.1456343;
pi.toFixed(1);
pi.toFixed(8);
pi.toFixed(9);

// toPrecision()
let precise = 4.78;
precise.toPrecision(1);
precise.toPrecision(3);

// valueOf Method let x = 124; x.valueOf(); (101).valueOf(); "returns a num as a num"

// Variables to Numbers
// Number() returns a num
// parseInt() parses arg, returns int
// parseFloat() parses arg, returns float







