// import mongoose module
const mongoose = require('mongoose');

// create team schema (representation)
const teamSchema = mongoose.Schema({
    foundation: Number,
    name: String,
    owner: String,
    // players : un tableau de clé primaire de la collection players
    // de type Object ID [6836d542cfe77619800e9a52, 6836d542cfe77619800e9c7a, 6836d542cfe77619800e9pf2]
    players: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Player"
        }
    ],
    stadiumId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stadium',
    }
});

// affect team schema to model name (team)
const team = mongoose.model("Team", teamSchema);
// make team exportable
module.exports = team;