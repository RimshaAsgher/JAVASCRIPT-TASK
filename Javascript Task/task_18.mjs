// question 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//===========================================================================================//
// Array is not in alphabetical order.
let places = ["Saudia Arabia","Turkey","London","Paris","Northern Areas"];

// Array in its original order.
console.log(places);

// Array in alphabetical order without modifying the actual list.
console.log(places.slice().sort());

// Array is still in its original order 
console.log(places);

// Reverse alphabetical order without changing the order of the original list.
console.log(places.slice().sort().reverse());

// Array is still in its original order.
console.log(places);

//  Reverse the order of your list.
console.log(places.reverse());

//  Reverse the order of your list again
console.log(places.reverse());

// Sort your array so it’s stored in alphabetical order
let sortArray = places.sort();
console.log(sortArray);

// Sort to change your array so it’s stored in reverse alphabetical order
let reverseArray = places.sort().reverse();
console.log(reverseArray);