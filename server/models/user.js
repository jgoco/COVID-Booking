const mongoose = require('mongoose');
const connection = require('../config/database');

// Simple schema to represent a user
const userSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String
}, {collections: 'users'});

const User = connection.model('User', userSchema);