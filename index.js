var express= require('express');
var app = express();
var path    = require("path");
var Twitter = require('twitter');
app.set('view engine', 'jade');

var client = new Twitter({
    consumer_key:'8zJI8xkxd6F4B64SLSjktF8Rm',
    consumer_secret:'lnrAYXYgkyekzac3WILbM8Oa8CysZaecxZpaQv6f3ABLw2kxR2',
    access_token_key: '293844895-ny238bg1Nk1C68LAqmIEqDI6YinZec9ZEZGF5oLi',
    access_token_secret:'DgRBjjbWBNarx25zuwLROHF4J8LJ5QpIIAZBUajILYyyq'
});
//
//client.stream('statuses/filter', {track: 'twitter'},  function(stream){
//    stream.on('data', function(tweet) {
//        //console.log(tweet.text);
//        var tweet = tweet.text;
//    });
//
//    stream.on('error', function(error) {
//        console.log(error);
//    });
//});

app.get('/', function (req, res) {


    client.stream('statuses/filter', {track: 'nodeschool'},  function(stream){
        stream.on('data', function(tweet) {
            //console.log(tweet.text);
             tweet = tweet.text;
            res.render('index' , { title: 'Hey',message: 'twitter' , tweet: tweet  });
        });

        stream.on('error', function(error) {
            console.log(error);
        });



    });




});


app.listen(3000);