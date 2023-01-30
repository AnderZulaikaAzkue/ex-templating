const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Iteration 3: define tweet schema

const tweetSchema = new Schema ({
    user: {
        user: '',
        message: '',
        createdAt: '',
        fav: false
    } 
})

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;