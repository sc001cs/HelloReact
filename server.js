/**
 * Created by 2A on 30-10-16.
 */

var express = require('express');

// Create our App
var app = express();

app.use(express.static('public'));

app.listen(4444, function () {
    console.log('Express server is up on the port: 4444')
})