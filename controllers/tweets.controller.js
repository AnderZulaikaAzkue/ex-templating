// Iteration 3: import tweets data

// Iteration 3: list tweets from file
// Order tweets desc by date
// Iteration 4: filter tweets by user checking the query param 'name'


// Iteration 5: Create tweet validating body params

// Iteration 6: find tweet by id path param and delete it if exists



module.exports.list = (req, res, next) => {
    res.render ('tweets/list')
}