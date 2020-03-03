const firebase = require("firebase");
const { apiKey } = require('./secrets.json');

const config = {
  apiKey,
  authDomain: "counter-55b74.firebaseapp.com",
  databaseURL: "https://counter-55b74.firebaseio.com",
  projectId: "counter-55b74",
  storageBucket: "counter-55b74.appspot.com",
  messagingSenderId: "423724375102",
  appId: "1:423724375102:web:cec22754b63052557f056f",
  measurementId: "G-0TEEWV52LV"
};
const connection = firebase.initializeApp(config);

module.exports = { connection };
