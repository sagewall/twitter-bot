const Twitter = require('twitter');
const Chuck = require('chucknorris-io');

const chuck = new Chuck();

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

chuck.getRandomJoke()
    .then( (res) => {
        const status = res.value + " #ChuckNorris";
        console.log(status);
        client.post('statuses/update', {status: status})
            .then(function (tweet) {
                console.log(tweet);
            })
            .catch(function (error) {
                throw error;
            });
    })
    .catch( (err) => {
        console.log(err);
    });


