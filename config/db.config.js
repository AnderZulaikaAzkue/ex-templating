const mongoose = require('mongoose');

// Iteration 3: configure database connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ih-tweets';

mongoose.connect(MONGODB_URI)
  .then(() => console.info(`Successfully connected to the database ${MONGODB_URI}`))
  .catch((error) => console.error(`An error ocurred trying to connect to the database ${MONGODB_URI}`, error))

  process.on("SIGINT", function () {
    mongoose.connection.close(function () {
      console.log("Mongoose disconnected on app termination");
      process.exit(0);
    });
  });