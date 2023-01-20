// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.



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
console.log("\n New list of guest");
guests.forEach(guest => {
    let invitation = `${guest},Today we have dinner party at my home,you must come with your family.`;
    console.log(invitation)
    });
console.log("I just found a big dinner table so i will be adding some more guests.");

guests.unshift("Rimsha");
guests.splice((guests.length / 2), 0, 'Safa');
guests.push('Ramim');

// New list of guest after adding new guests
console.log("\nNew list of guest");
guests.forEach(guest => {
    let invitation = `${guest},Today we have dinner party at my home,you must come with your family.`;
    console.log(invitation)
    });
