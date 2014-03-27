var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/dochi');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var UserSchema = mongoose.Schema({
    email: String,
    score: Number 
});

module.exports = mongoose.model('User', UserSchema);
