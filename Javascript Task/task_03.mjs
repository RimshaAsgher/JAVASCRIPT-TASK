//Name Cases: Store a person’s name in a variable, and then 
//print that person’s name in lowercase, uppercase, and titlecase.


var personName = ("rimsha Asgher");
console.log("Original: "+personName);
// Uppercase
console.log("Uppercase: " +personName.toUpperCase());

//lowercase
console.log("Lowercase: " +personName.toLowerCase());

// Titlecase in javascript
var fname = (personName.charAt(0));
var upcase = (fname.toUpperCase());
var name = (personName.slice(1));
console.log("Titlecase: " +upcase + name);