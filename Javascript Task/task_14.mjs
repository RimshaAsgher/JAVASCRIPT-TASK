// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let guests = ["arshamah","mahnoor","sidra"];
guests.forEach(guest => {
    let invitation = `${guest},Today we have dinner party at my home,you must come with your family.`;
    console.log(invitation)
    });