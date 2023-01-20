// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.

// • Make sure yourscomparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users = ['Rimsha','Safa', 'Uroosa', 'Sidra', 'Arshmah', 'Mahnoor'];
let new_users = ['RIMSHAs', 'Safa', 'Bisma', 'Simran'];

new_users.forEach(new_user => {
    const index = current_users.findIndex(current_user => {
        return current_user.toLowerCase() === new_user.toLowerCase();
    });
    if (index >= 0) {
        let message = `${new_user} will need to enter new username.`;
        console.log(message);
    } else {
        let message = `${new_user} username is available.`;
        console.log(message);
    }
})