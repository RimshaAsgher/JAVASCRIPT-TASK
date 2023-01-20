// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician_names = ['john', 'jasmin', 'robert'];

function show_magicians(magician_names) {
    magician_names.forEach(magician_name => {
        console.log(magician_name);
    });
}

show_magicians(magician_names);