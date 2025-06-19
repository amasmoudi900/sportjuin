// import mongoose module
const mongoose = require('mongoose');

// create user schema (representation)
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    tel: Number,
    status: Boolean,
    role: String,
    photo: String
});

// affect user schema to model name (user)
const user = mongoose.model("User", userSchema);
// make user exportable
module.exports = user;