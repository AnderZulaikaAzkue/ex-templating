const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Iteration 3: define tweet schema

const tweetSchema = new Schema ({
    user: {
        type: 'String', 
        require: 'User name is required'
     },
     message: {
        type: 'String', 
     },
     createdAt: {
        type: 'array',
     },
     fav: {
        type: 'boolean',
    },
    });  

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;