// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message 
//indicating the number of people you are inviting to dinner.

let guests = ["arshamah","mahnoor","sidra"];
guests.forEach(guest => {
    let invitation = `${guest},Today we have dinner party at my home,you must come with your family.`;
    console.log(invitation)
    });


console.log();
console.log(`I have invited ${guests.length} guests for Dinner at my home.`);