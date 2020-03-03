const { connection } = require('./firebase-config');

const counter = connection.database().ref("counter");

counter.on("value", snapshot => {
    console.log(snapshot.val());
});
