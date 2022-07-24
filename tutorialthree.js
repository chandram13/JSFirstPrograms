
// Arrays setup
const array_name = [item1, item2,...];

const days = [];
day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";
day[7] = "Sunday";
// accessing an element
let day = day[2];
// changing a value in an element
day[5] = "Holiday";

// access full array
document.getElementById("demo").InnerHTML = day;

// Having keys and values

const light ={paintColor:"green",actorName:"Gatsby",richOrnot:"wealthy"};

// Array properties var.length, var.sort()

const years = ["1990", "1991", "1992", "1993"];
let year = years[years.length - 1];

// Looping Arrays
const years = ["1990", "1991", "1992", "1993"];
let yLen = years.length

let text = "<ul>";
for (let i = 0; i < yLen; i++) {
    text += "<li>" + yLen[i] + "<li>";
}
text += "<ul>"

// Adding Array Elements

const years = ["1990", "1991", "1992", "1993"];
let text = "<ul>";
years.forEach(myFunction);
text += "</ul>";

function myFunction(value){
    text += "<li>" + value + "</li>"
}

// using push element

const years = ["1990","1991","1992","1993"];
years.push("1994");

// using length property
const years = ["1990","1991","1992","1993"];
years[years.length] = "1995";

// Associative Arrays
const playingCards = [];
playingCards[0] = "spade";
playingCards[1] = "heart";
playingCards[2] = "ace";
playingCards.length;
playingCards[1];

// new Array()

const items = new Array();
const items = [];

const goals = newArray(19, 30, 45, 32, 100, 199); // new produces unexpected results
const goals = [];

int drivingSpeeds = tooFast(85, 90, 95, 100, 110);
let recognize = typeof drivingSpeeds;

// Array methods

const brands = ["ajaga","bucci","pakla","ordea"];
document.getElementById("demo").innerHTML = brands.toString();

// join method
const pens = ["Maka", "Naka", "Faka"]
document.getElementById("demo").innerHTML = brothers.join(" / ");

// pop method
const fitness = ["H","Naka","Bool"];
let fitness = fitness.pop();

// push method .push (adds new element at end)
// shift method shift() (removes first array elem and then shifts the rest
// unshift()

// delete a value in given variable set
const birthdayMonths = ["February","March","April","November"];
delete birthdayMonths[2];

// Merging Arrays

const cartoonsHD = ["Baku","Troublemakers","What's up, Jamie?"];
const realityTvs = ["Hang out or sleep","Find me cafe","catching up"];

const myEntertainment = cartoonsHD.concat(realityTv);

// use splice() and slice() at end of variable
// realityTV.splice(0,1);
// realityTV.slice();

// Automatic toString()

// Sorting Arrays

const realityTvs = ["Hang out or sleep","Find me cafe","catching up"];
realityTvs.sort();

// Reverse, organize arrangement --> (after declaring const) realityTVs.reverse();

// Sort func

const digits = [90, 32, 55, 11, 67, 14];
digits.sort(function(a,b){return a - b}; // a-b specifies a range

// Compare func
// function(b,c){return b - c)

 // Fisher Yates, data science method for sorting numbers

const points = [10, 30, 40, 65, 23, 18];
for (let i = points.length - 1; i > 0;i--) {
    let j = Math.floor(Math.random() * i) // nested method
    let l = points[i]
    points[i] = points[j]
    points[j] = points[l]
}

// sort ascending
const points = [10, 30, 40, 65, 23, 18];
points.sort(function(a,b){return a - b});

// sort descending
const points = [10, 30, 40, 65, 23, 18];
points.sort(function(a,b){return b - a};

// math.max() on array
function myArrayMax(arr) {
    return math.maxapply(null, arr);
}

// math.min() on array
function myArrayMin(arr) {
    return math.minapply(null, arr);
}

// Sorting object arrays

const videoGames = [
    type: {"EA", game: "Need for Speed"}
    type: {"gearbox", game: "Borderlands"}
    type: {"2k games", game: "NBA 2022"}
];

videoGames.sort(function(a,b){return a.game - b.game});





