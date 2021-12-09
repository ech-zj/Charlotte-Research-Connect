const { credential } = require("firebase-admin");
const firebase = require("firebase-admin");
const key = require("./charlotte-research-connect-key.json");

firebase.initializeApp({
    credential: firebase.credential.cert(credential),
    databaseURL: "a.vibot.tech:3306"
});

module.exports = firebase;