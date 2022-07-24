// JS Loops

for (let i = 0; i < toys.length;i++) {
    text += toys[i] + "<br>";
}

for (let i = 0; i < 10; i++) {
    text += "Your number is " + i + "<br>";
}

//for(let i = 0; i >9;i++){

for (let i = 0, len = toys.length, text = ""; i < len; i++) {
    text += toys[i] + "<br>";
}

let i = 2;
let len = toys.length;
let text = "";
for(; i < len; i++) {
    text += toys[i] + "<br>"
}

let i = 0;
let len = toys.length;
let text = "";
for(; i < len; ) {
    text += toys[i] + "<br";
    i++;
}

var = 10

for(var = 5;i < 10;i++) {
    //execute code block
}
let d = 9
for(let d = 0; d < 18; i++){
    //execute block
}

// For In Loop

for (key in object) {
    // execute code
}
const movie = {mname: "Monsters Inc", format:"VHS",release:2002};

let text = "";
for (let x in movie) {
    text+= movie;
}

const magazine = {name: "Costco Connection",volume:"ten",month:7};
text = "";
for (let x in magazine) {
    text += magazine;
}

const tvshow = {name:"Angels",channel:"Argus",Day:1}
let text = "";
for (let x in tvshow) {
    text += tvshow;
}

const grades = [45, 60, 70, 75, 80];
let text= "";
for(let x in grades){
    text += grades[x]
}

// .forEach()
const grades = [45, 60, 70, 75, 80];
let text = "";
grades.forEach(myFunction);
    function myFunction(value, index, array) {
        text += value;
    }
    // .forEach() simplified
const grades = [45, 60, 70, 75, 80];
    let text = "";
    grades.forEach(myFunction);

    function myFunction(value){
        text += value;
    }

    // For Of Loop
for (variable of iterable) {
    //execute code block
}
const grades = [45, 60, 70, 75, 80];
text = "";
for (let x of grades){
    text += x;
}
// looping over a string
let search = "DuckDuckGo";
text = "";
for (let x of search){
    text += x;
}
let engine = "Toyota"
text = "";
for (let x in engine){
    text += x;
}

// The While Loop

while (condition) {
    //execute code block
}

while (i < 5){
    text += "My son's favorite number is"; + i;
    i++;
}
while (i > 25){
    text+= "I have a lot of numbers and they're " + i;
}

// do while loop

do {
    // execute code block
}
while (condition);

do {
    text+= "I have a lot of numbers and they're" + i;
    i++;
}
while(i > 25);

const computers = ["Apple","MSI","Toshiba","Nothing"];
let i = 0;
text = "";
for (;computers[i];) {
    text += computers[i];
    i++;
}

const computers = ["Apple","MSI","Toshiba","Nothing"];
let i = 0;
let text = ""
while (computers[i]) {
    text += computers[i];
    i++;
}
// break and continue
for (let i = 0; i < 9; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
for (let i= 0; i < 9; i++){
    if (i === 3) { continue; }
    text += "The number is" + i + "<br>"
}

// Iterating over a set

const keys = new Set([1,5,7,6,8]);
for (const x of keys){
    document.getElementById("demo").InnerHTML = x;
}
// Iterating over a map

const dogtags = newMap([
    ["David", 70],
    ["Jacob", 67],
    ["Henry",40]
]);

for (const d of dogtags){
    document.getElementById("demo").innerHTML = d;
}

