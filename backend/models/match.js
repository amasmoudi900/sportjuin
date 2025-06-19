// import mongoose module
const mongoose = require('mongoose');

// create match schema (representation)
const matchSchema = mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String
});

// affect match schema to model name (Match)
const match = mongoose.model("Match", matchSchema);
// make match exportable
module.exports = match;