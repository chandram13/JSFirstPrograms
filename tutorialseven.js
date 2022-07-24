
// Sets in JS

const colors = newSet(["orange","pink","violet"]);
colors.add("black");
colors.add("red");
colors.add("white);

    // now create a set and add variables

const dates = newSet();

let a = 1940;
let b = 1950;
let c = 1960;

dates.add(a);
dates.add(b);
dates.add(c);

document.getElementById("demo").innerHTML = dates;

// Maps in JS

const likes = new Map();

// Set Map Values
likes.set("Port",100);
likes.set("Sal", 90);
likes.set("Pocky", 70);

// get method
likes.get("Port");

// size method
likes.size;

// delete method
likes.delete("Sal");

// has method --> returns true if existing key
likes.has("Pocky");

// entries Method
let text = "";
for (const x of likes.entries()){
    text+= x;
}
// JS typeOf
typeOf (given value) // returns something

// Constructor property
// better way
function theArray(myArray){
    return myArray.constructor === Array;
}

