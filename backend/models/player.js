// import mongoose module
const mongoose = require('mongoose');

// create player schema (representation)
const playerSchema = mongoose.Schema({
    number: Number,
    age: Number,
    name: String,
    position: String,
    // tId est de type Object ID et sa valeur doit être une
    // valeur d'une clé primaire de la collection teams
    // tId: 6836d542cfe77619800e9a52
    tId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    }
});

// affect player schema to model name (player)
const player = mongoose.model("Player", playerSchema);
// make player exportable
module.exports = player;