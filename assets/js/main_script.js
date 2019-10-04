require("dotenv").config();
//Grabbing the AXIOS package.
var axios = require("axios");


//Grabbing the SPOTIFY package.
var Spotify = require('node-spotify-api');

var keys = require("./keys.js");

var fs = require("fs");

//Testing for axios
//console.log("AXIOS :: ", axios)

//Variables ===== ===== ===== ===== =====
var userInputKeywordAddress = process.argv.length - 2;
var userInputKeyword = process.argv[userInputKeywordAddress];


var userInputSubjectAddress = process.argv.length - 1;
var userInputSubject = process.argv[userInputSubjectAddress];

/*
console.log("");
console.log("===== Checking the argv array =====")
console.log("");
console.log("Full Array :: ", process.argv);
console.log(process.argv[userInputKeywordAddress]);
console.log(process.argv[userInputSubjectAddress]);
console.log("");
console.log("===== ===== ===== ===== ===== =====");

console.log("");
console.log("");
console.log("");
*/

//console.log("ENV STUFF: ", module.exports);



var OMDB_base = "http://www.omdbapi.com/";
var OMDB_title = "?t=";
var OMDB_user_title = "Mr+Nobody";
var OMDB_filler = "&y=&plot=short&apikey=";
var OMDB_key = "d86f8148";


var spotify = new Spotify(keys.spotify);

var SPOTIFY_title = process.argv[3];

var myBand = process.argv[3];

/*
var OMDB_FULL = OMDB_base + OMDB_title + OMDB_user_title + OMDB_filler + OMDB_key;

console.log("===== Checking full OMDB query =====");
console.log("");
console.log("OMDB full query: ", OMDB_FULL);
console.log("");
console.log("===== ===== ===== ===== ===== =====");
*/

var keyWord = process.argv[2];
OMDB_user_title = process.argv[3];

// ===== ===== ===== ===== =====

search_switch(keyWord);



function search_switch(keyWord) {


    switch (keyWord) {
        case "movie-this":

            console.log("querying OMDB");
            OMDB_user_title = process.argv[3];
            var OMDB_FULL = OMDB_base + OMDB_title + OMDB_user_title + OMDB_filler + OMDB_key;

            console.log("===== Checking full OMDB query =====");
            console.log("");
            console.log("OMDB full query: ", OMDB_FULL);
            console.log("");
            console.log("===== ===== ===== ===== ===== =====");

            //THIS IS MY GO AND GET IT FUNCTION
            OMDB_query(OMDB_FULL);

            break;
        case "spotify-this":

            console.log("querying SPOTIFY");
            SPOTIFY_query(SPOTIFY_title);

            break;
        case "concert-this":
            text = "How you like them apples?";
            break;
        case "do-what-it-says":
            text = "How you like them apples?";
            break;
        default:
            text = "Default :: ERROR";
    }

};


function OMDB_query(OMDB_FULL) {



    axios.get(OMDB_FULL).then(
        function (response) {
            //THIS IS THE RESPONSE SECTION!
            console.log("The movie's rating is: " + response.data.Title);
            console.log("The movie's rating is: " + response.data.Year);
            console.log("The movie's rating is: " + response.data.Rated);


        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if ("ERROR: ", error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log("ERROR: ", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("ERROR: ", error.message);
            }
            console.log(error.config);
        });

};

//END OF FUNCTION


function SPOTIFY_query(SPOTIFY_title) {

    spotify.search({ type: 'track', query: SPOTIFY_title }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        //console.log(data.tracks);

        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].album.artists[0].name);
        console.log(data.tracks.items[0].album.name);
        console.log(data.tracks.href);
    });

};


function BAND_query(myBand) {
    var queryURL = "https://rest.bandsintown.com/artists/" + myBand + "?app_id=codingbootcamp";

    console.log(queryURL.name);
    console.log(queryURL.image_url);
    console.log(queryURL.url);
}
