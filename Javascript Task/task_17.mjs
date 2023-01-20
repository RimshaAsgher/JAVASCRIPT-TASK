///question 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guests = ["arshamah","mahnoor","sidra"];
let guestNotavailable = "mahnoor";
guests.forEach(guest => {
    let invitation = `${guest},Today we have dinner party at my home,you must come with your family.`;
    console.log(invitation)
    });

// The Guest who will not come for dinner
console.log("\nThe guest who can’t come for dinner");
console.log(guestNotavailable, "Here! i can't come to your home for dinner ");

// replace the name of guest with new guest who will not come for dinner
let replace = guests.indexOf(guestNotavailable);
guests.splice(replace,1,'simran');

// After replacing the Name of Guest list
console.log("\n after replace the guest");
guests.forEach(guest => {
    let invitation = `${guest},Today we have dinner party at my home,you must come with your family.`;
    console.log(invitation)
    });
console.log("\nI just found a big dinner table so i will be adding some more guests.");

guests.unshift("Rimsha");
guests.splice((guests.length / 2), 0, 'Safa');
guests.push('Ramim');

// New list of guest after adding new guests
console.log("\nAfter Adding more guests");
guests.forEach(guest => {
    let invitation = `${guest},Today we have dinner party at my home,you must come with your family.`;
    console.log(invitation)
    });

console.log("\ni can invite only two people for dinner");

while (guests.length > 2) {  
    console.log(`${guests.pop()} I'm sorrsy i can’t invite you for dinner`);
}

// Still invited guests
console.log("\nStill invited guests for dinner");
guests.forEach(guest => {
    let invitation = `${guest},You are still invited for dinner party at my home,you must come with your family.`;
    console.log(invitation)
    });

// remove all guests
console.log("\ni can't invite you for dinner");
while (guests.length > 0) {  
    console.log(`${guests.pop()} I'm sorrsy i can’t invite you for dinner`);
}

// After Deleting all array element 
console.log("\nGuests:",guests);
