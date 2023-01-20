// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let guests = ["arshamah","mahnoor","sidra"];
let guestNotavailable = "mahnoor";
guests.forEach(guest => {
    let invitation = `${guest},Today we have dinner party at my home,you must come with your family.`;
    console.log(invitation)
    });

console.log();
// The Guest who will not come for dinner
console.log("\nThe guest who can’t come for dinner");
console.log(guestNotavailable, "Here! i can't come to your home for dinner ");

// replace the name of guest with new guest who will not come for dinner
let replace = guests.indexOf(guestNotavailable);
guests.splice(replace,1,'simran');

// New list of guest
console.log("\n New list of guest");
guests.forEach(guest => {
    let invitation = `${guest},Today we have dinner party at my home,you must come with your family.`;
    console.log(invitation)
    });