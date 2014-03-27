var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dochi');

var User = mongoose.Schema({
    email: String,
    score: Number 
});