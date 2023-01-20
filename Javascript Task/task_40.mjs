// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.

function make_album(artist_name,album_title,no_of_songs = "") {
    const myObj = new Object();
    myObj.Artist_name = artist_name;
    myObj.Album_title = album_title;
    myObj.No_of_Songs = no_of_songs;
    return myObj;
}

let Album1 = make_album("artist1","song");
console.log(Album1);
let Album2 = make_album("artist2","song2");
console.log(Album2);
let Album3 = make_album("artist3","song3");
console.log(Album3);
let Album4 = make_album("artist4","song4",3);
console.log(Album4)