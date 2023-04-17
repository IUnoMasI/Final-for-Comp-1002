console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
//Jonathan Diaz
// 200545004

const myImmutableArray = ["Jared", "Francis", "Amrit", "Sarah", "Gurleen", "Johanna", "Ury"];


// Step 2: Add the 3 people's names to the array

const newNames = ["Lena", "Rahul", "Alex"];

const updatedArray = [...myImmutableArray, ...newNames];

console.log(updatedArray);

// Step 4: Remove the first array item from the array

const updatedArray = myImmutableArray.slice(1);

console.log(updatedArray);

// Step 5 Remove the second array item from the array

const updatedArray = myImmutableArray.filter((_, index) => index !==1);

console.log(updatedArray);

// Step 6: Using array filter, iterate over the array items and remove all items beginning with the letter "J". Store the result in a new, block scoped, mutable variable

let myImmutableArray = [...myImmutableArray]; 

mutableArray = mutableArray.filter(item => !item.startsWith("J"));

console.log(mutableArray);

// Step 7: Create an event listener that fires a callback function when the call to action button in the header is clicked. It should alert "Call me now at 555-555-55555";

const callNowButton = document.getElementById("call-now-button");

callNowButton.addEventListener("click", () => {

alert("Call me now at 555-555-55555");

});