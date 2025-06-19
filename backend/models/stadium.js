// import mongoose module
const mongoose = require('mongoose');
const { type } = require('os');

// create stadium schema (representation)
const stadiumSchema = mongoose.Schema({
    name: String,
    capacity: Number,
    country: String,
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
    }
});

// affect stadium schema to model name (stadium)
const stadium = mongoose.model("Stadium", stadiumSchema);
// make stadium exportable
module.exports = stadium;