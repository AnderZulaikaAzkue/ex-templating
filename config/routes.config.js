const express = require('express');

// Iteration 1: import common controller
// Iteration 3: import tweets controller

const router = express.Router();
const tweets = require('../controllers/tweets.controller');
const common = require('../controllers/common.controller'); 

router.get('/tweets', tweets.list)
router.get('/', common.home)


// Iteration 1: link GET '/' with common controller home


// Iteration 3: link GET '/tweets' with tweets controller list
// Iteration 4: link POST '/tweets' with tweets controller create
// Iteration 5: link POST '/tweets/:id/delete' with tweets controller delete

module.exports = router;
