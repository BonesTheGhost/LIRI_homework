//Grabbing the AXIOS package.
var axios = require("axios");

//Testing for axios
//console.log("AXIOS :: ", axios)

//Variables ===== ===== ===== ===== =====
var userInputKeywordAddress = process.argv.length - 2;
var userInputKeyword = process.argv[userInputKeywordAddress];
console.log(process.argv[userInputKeywordAddress]);

var userInputSubjectAddress = process.argv.length - 1;
var userInputSubject = process.argv[userInputSubjectAddress];
console.log(process.argv[userInputSubjectAddress]);


var OMDB_base = "http://www.omdbapi.com/";
var OMDB_title = "?t=";
var OMDB_user_title = "";
var OMDB_filler = "&y=&plot=short&apikey="
//var OMDB_key = (require./.env.omdb_key);

//var OMDB_FULL = OMDB_base + OMDB_title + OMDB_user_title + OMDB_filler + OMDB_key;



//console.log(process.argv.slice(2));
//console.log(process.argv.length);
//console.log(process.argv[2]);

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    spotify_ID: process.env.SPOTIFY_ID,
    spotify_Secret: process.env.SPOTIFY_SECRET

};

//console.log("ENV STUFF: ", module.exports);

// ===== ===== ===== ===== =====



function search_switch() {


    switch ("search") {
        case "movie-this":
            text = "Querying OMDB...";
            OMDB_query();
            break;
        case "spotify-this":
            text = "I am not a fan of orange.";
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


function OMDB_query() {



    axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
        function (response) {
            //THIS IS THE RESPONSE SECTION!
            console.log("The movie's rating is: " + response.data.imdbRating);


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
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });



    //END OF FUNCTION
};