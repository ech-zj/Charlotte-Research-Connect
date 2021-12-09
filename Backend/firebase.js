const firebase = require("firebase-admin");
const key = require("./charlotte-research-connect-key.json");

firebase.initializeApp({
    credential: firebase.credential.cert(key),
    databaseURL: "a.vibot.tech:3306"
});

module.exports = firebase;