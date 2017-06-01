// server.js
const express = require('express');
const app = express();
const path = require('path');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/'));
// Start the app by listening on the default
// Heroku port
app.get('/*', function(req, res) {
    console.log("GET 1");
    res.sendFile(path.join(__dirname + '/index.html'));
});

var listener = app.listen(process.env.PORT || 8080, function(){
    console.log('! Listening on port ' + listener.address().port); //Listening on port 8888
});