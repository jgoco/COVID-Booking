const mongoose = require('mongoose');

require('dotenv').config();

// THIS NEEDS DEBUGGING

/* ----------- DATABASE CONNECTION ----------- */
const dbURL = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.aekav.mongodb.net/covidbooking?retryWrites=true&w=majority';
const connection = mongoose.createConnection(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = connection;