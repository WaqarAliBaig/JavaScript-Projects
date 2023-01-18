// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

// Write a function called make_album() that builds a Object describing a music album.
function make_album (artist, title, track = 0) {
    if (track === 0) {
        return{artist_name: artist, album_title: title}
    }
    else {
        return{artist_name: artist, album_title: title, number_of_tracks: tracks}
    }
}

// Assign Album
let alubm1 = make_album('Junoon','Azadi');
let alubm2 = make_album('Junoon','Andaz');
let alubm3 = make_album('Junoon','Parvaaz');

// Pring Data
console.log(alubm1);
console.log(alubm2);
console.log(alubm3);

// Assign Album with tracks
let alubm4 = make_album('Junoon','Daur-e-Junoon', 5);
let alubm5 = make_album('Junoon','Dewaar', 8);

// Pring Data
console.log(alubm4);
console.log(alubm5);
