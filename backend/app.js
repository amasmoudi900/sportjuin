// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');

// import bcrypt module
const bcrypt = require("bcrypt");

// import path module
const path = require("path");
// import multer module
const multer = require("multer");

// import jwt module
const jwt = require("jsonwebtoken");
// import express-session module
const session = require('express-session');

// import axios module
const axios = require('axios');

// creates an express application (app)
const app = express();

// Configuration 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

app.use('/myShortcut', express.static(path.join('backend/images')));

// Session Configuration
const secretKey = 'croco@2025CUN';
app.use(session({
    secret: secretKey,
}));

// Multer Config
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};

const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        // isValid contains extension or null
        if (isValid) {
            cb(null, 'backend/images');
        }
    },
    filename: (req, file, cb) => {
        // const name = file.originalname.toLowerCase().split(' ').join('-');
        // const extension = MIME_TYPE[file.mimetype];
        // const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + extension;
        const imgName = file.originalname + Date.now() + "." + MIME_TYPE[file.mimetype];
        cb(null, imgName);
    }
});

// Models Importation
const Match = require("./models/match");
const Team = require("./models/team");
const Player = require("./models/player");
const User = require("./models/user");
const Stadium = require("./models/stadium");

// DB simulation
let matchesTab = [
    { id: 1, scoreOne: 4, scoreTwo: 3, teamOne: "FCB", teamTwo: "RMD" },
    { id: 2, scoreOne: 0, scoreTwo: 0, teamOne: "CA", teamTwo: "EST" },
    { id: 3, scoreOne: 4, scoreTwo: 3, teamOne: "FCB", teamTwo: "INT" }
];

// Business Logic (Traitement logique des Reqs)

// Business Logic : Get All Matches
app.get("/api/matches", (req, res) => {
    console.log("Business Logic : Get All Matches");
    Match.find().then(
        (docs) => {
            res.json({ tab: docs, nbr: docs.length, status: "OK" });
        }
    )
});
// Business Logic : Get Match By ID
app.get("/api/matches/:id", (req, res) => {
    console.log("Business Logic : Get Match by ID", req.params.id);
    // get id from path
    let matchId = req.params.id;
    // search object by ID
    Match.findById(matchId).then(
        (doc) => {
            // return response
            if (doc) {
                res.json({ match: doc });
            } else {
                res.json({ msg: "Match Not Found" });
            }
        }
    )
});
// Business Logic : Delete Match By ID
app.delete("/api/matches/:id", (req, res) => {
    console.log("Business Logic : Delete Match by ID", req.params.id);
    // Get Id from path
    let matchId = req.params.id;

    Match.deleteOne({ _id: matchId }).then(
        (deleteResponse) => {
            console.log("Here response after delete", deleteResponse);
            if (deleteResponse.deletedCount == 1) {
                res.json({ msg: "ok" }); // Deleted with success
            } else {
                res.json({ msg: "nok" }); // Match Not Found
            }
        }
    );
});
// Business Logic : Add Match
app.post("/api/matches", (req, res) => {
    console.log("Business Logic : Add Match", req.body);
    // get object from Request
    let newMatch = new Match(req.body);
    // save object into collection (matches)
    newMatch.save((err, doc) => {
        console.log("Here error", err);
        console.log("Here doc", doc);
        if (err) {
            res.json({ msg: "Match Not Added !" });
        } else {
            res.json({ msg: "Added with success" });
        }
    });
});
// Business Logic : Edit Match
app.put("/api/matches", (req, res) => {
    console.log("Business Logic : Edit Match", req.body);
    // get object from Request
    let newMatch = req.body;
    Match.updateOne({ _id: newMatch._id }, newMatch).then(
        (updateResponse) => {
            console.log("Here update response", updateResponse);
            updateResponse.nModified == 1 ?
                res.json({ msg: "ok" }) : // Match updated with success
                res.json({ msg: "nok" }); // Match Not found
        }
    )
});

// Business Logic: Search matches by scores
app.get("/api/matches/:s1/:s2", (req, res) => {
    console.log("Business Logic : Search", req.params.s1, req.params.s2);
    let scoreOne = req.params.s1;
    let scoreTwo = req.params.s2;
    let foundMatches = matchesTab.filter(elt => elt.scoreOne == scoreOne && elt.scoreTwo == scoreTwo);
    if (foundMatches.length > 0) {
        res.json({ T: foundMatches });
    } else {
        res.json({ msg: `No matches with scoreOne: ${scoreOne} and scoreTwo: ${scoreTwo} ` });
    }
});

// Business Logic : Search Matches By Scores (method 2)
app.post("/api/matches/search", (req, res) => {
    console.log("Business Logic : Search", req.body);

    Match.find({ scoreOne: req.body.scoreOne, scoreTwo: req.body.scoreTwo }).then(
        (docs) => {
            res.json({ T: docs })
        }
    )
});

// Business Logic : Delete matches by team One
app.delete("/api/matches/delete/:teamOne", (req, res) => {
    console.log("Business Logic : Delete matches by team One", req.params.teamOne);
    let t1 = req.params.teamOne;
    let isDeleted = false;
    for (let i = matchesTab.length - 1; i >= 0; i--) {
        if (matchesTab[i].teamOne == t1) {
            isDeleted = true;
            matchesTab.splice(i, 1);
        }
    }
    isDeleted ? res.json({ msg: "Matches deleted" }) : res.json({ msg: `Matches with ${t1} not found` });
});

// Business Logic : Just For Test
app.get("/api/", (req, res) => {
    console.log("Business Logic : Just For Test");
});


// Business Logic: Signup
// 0 : User already exist
// 1 : User not saved !
// 2 : User saved with success
app.post("/api/users", multer({ storage: storageConfig }).single("img"), (req, res) => {
    console.log("Business Logic : Signup", req.body);
    // Check if user exist by email
    User.findOne({ email: req.body.email }).then(
        (doc) => {
            if (doc) {
                res.json({ msg: "0" });
            } else {
                // Insert user into collection
                bcrypt.hash(req.body.password, 8).then(
                    (hash) => {
                        console.log("Here hashed pwd", hash);
                        req.body.password = hash;
                        if (req.file) {
                            req.body.photo = "http://localhost:3000/myShortcut/" + req.file.filename;
                        } else {
                            req.body.photo = "http://localhost:3000/myShortcut/avatar.jpeg";
                        }
                        let user = new User(req.body);
                        user.save((err, doc) => {
                            if (err) {
                                res.json({ msg: "1" });
                            } else {
                                res.json({ msg: "2" });
                            }
                        });
                    }
                )
            }
        }
    )
});

// Business Logic: Login
app.post("/api/users/login", (req, res) => {
    console.log("Business Logic : Login", req.body);
    let user = req.body;
    // check if user exist by Email
    User.findOne({ email: user.email }).then(
        (foundUser) => {
            // foundUser : {firstName:..., lastName: ..., email: .......} ou NULL
            if (!foundUser) {
                res.json({ msg: "Check your email" });
            } else {
                // compare Passwords
                bcrypt.compare(user.password, foundUser.password).then(
                    (result) => {
                        // result : true or false
                        if (!result) {
                            res.json({ msg: "Check your Password" });
                        } else {
                            let userToSend = {
                                role: foundUser.role,
                                fName: foundUser.firstName,
                                lName: foundUser.lastName,
                                photo: foundUser.photo
                            }
                            const token = jwt.sign(userToSend, secretKey, { expiresIn: '1h' });
                            res.json({ msg: "Welcome", user: token });
                        }
                    }
                )
            }
        }
    )

});

// Business Logic : Get All Users
app.get("/api/users", (req, res) => {
    console.log("Business Logic : Get All Users");
    User.find().then(
        (docs) => {
            res.json({ usersTab: docs })
        }
    )
});


// Business Logic : Update Status
app.put("/api/users/updateStatus", (req, res) => {
    console.log("Business Logic : Update Status", req.body);
    User.updateOne({ _id: req.body.userId }, { status: true }).then(
        (updateResult) => {
            if (updateResult.nModified == 1) {
                res.json({ msg: "Updated with success" });
            } else {
                res.json({ msg: "Not Updated" });
            }
        }
    )
});


// Business Logic : Add Team
app.post("/api/teams", (req, res) => {
    console.log("Business Logic : Add Team", req.body);
    Stadium.findById(req.body.stadiumId).then(
        (stadium) => {
            if (!stadium) {
                res.json({ msg: "Stadium Not Found" });
            } else {
                let team = new Team({
                    name: req.body.name,
                    owner: req.body.owner,
                    foundation: req.body.foundation,
                    stadiumId: stadium._id
                });

                team.save(
                    (err, doc) => {
                        if (err) {
                            res.json({ msg: "Team Not Saved" });
                        } else {
                            stadium.teamId = doc._id;
                            stadium.save();
                            res.json({ msg: "Team Added with success" })
                        }
                    }
                )
            }
        }
    )
});

// Business Logic : Get All Teams
app.get("/api/teams", (req, res) => {
    console.log("Business Logic: Get All teams");
    Team.find().populate(["players", "stadiumId"]).then(
        (docs) => {
            res.json({ T: docs });
        }
    )
});

// Business Logic : Add Player
app.post("/api/players", (req, res) => {
    console.log("Business Logic : Add Player", req.body);
    // check if team exists by _id
    Team.findById(req.body.teamId).then(
        (team) => {
            // team : {_id:..., name:..., owner:..., foundation:... } ou null
            if (!team) {
                res.json({ msg: "Team Not Found !" });
            } else {
                let player = new Player({
                    name: req.body.name,
                    age: req.body.age,
                    number: req.body.number,
                    position: req.body.position,
                    tId: team._id
                });
                player.save((err, doc) => {
                    if (err) {
                        res.json({ msg: "Player Not saved !!" });
                    } else {
                        // affect player id to team
                        team.players.push(doc._id);
                        team.save();
                        res.json({ msg: "Player saved with success !" });
                    }
                })
            }
        }
    )
});

// Business Logic : Get All Players
app.get("/api/players", (req, res) => {
    console.log("Business Logic: Get All Players");
    Player.find().populate("tId").then(
        (docs) => {
            res.json({ players: docs });
        }
    )
});

// Business Logic : Add Stadium
app.post("/api/stadiums", (req, res) => {
    console.log("Business Logic : Add Stadium", req.body);
    let stadium = new Stadium(req.body);
    stadium.save((err, doc) => {
        if (doc) {
            res.json({ msg: "Added with Success" });
        } else {
            res.json({ msg: "Not added" });
        }
    })
});

// Business Logic : Get All Stadiums
app.get("/api/stadiums", (req, res) => {
    console.log("Business Logic : Get All Stadiums");
    Stadium.find().then(
        (docs) => {
            res.json({ stadiumsTab: docs });
        }
    )
});


// Business Logic: Search Weather
app.post("/weather", (req, res) => {
    console.log("Business Logic: Search Weather", req.body.city);
    let apiKey = "62ee756a34835483299877a61961cafb";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(
        (apiResponse) => {
            console.log("Here API response", apiResponse.data);
            let myResponse = {
                temp: apiResponse.data.main.temp,
                humidity: apiResponse.data.main.humidity,
                speed: apiResponse.data.wind.speed,
                country: apiResponse.data.sys.country
            };
            res.json({ weatherResponse: myResponse })
        }
    )
});
// make app importable from another files
module.exports = app;
