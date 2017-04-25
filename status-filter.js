const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const term = ' ';

client.stream('statuses/filter', {locations: '-105.4,39.13,-105.05,39.91'}, (stream) => {
    stream.on('data', (tweet) => {
        if (tweet.text.toLowerCase().includes(term)) {
            console.log(tweet.text, ' - ', tweet.place.name);
        }
    });

    stream.on('error', (error) => {
        console.log(error);
    });
});