// Iteration 3: import tweets data

// Iteration 3: list tweets from file
// Order tweets desc by date
// Iteration 4: filter tweets by user checking the query param 'name'


// Iteration 5: Create tweet validating body params

// Iteration 6: find tweet by id path param and delete it if exists


const Tweet = require('../models/tweet.model');

module.exports.list = (req, res, next) => {
    Tweet.find()
    .then((tweets) => {
        console.log(tweets);
    res.render ('tweets/list', { tweets })
})
.catch((error) => next(error))
}