
/*
 * GET home page.
 */

var User = require("../models/user");

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.register = function(req, res){
  User.find({ 
  }, function (err, datas) {
    res.render('register', { title: 'Express', datas: datas || [] });  
  });
  
};

exports.registerPost = function(req, res){
  var email = req.body.email;
  var score = req.body.score;

  User.findOneAndUpdate({
    email: email
    
  }, {
    score: score
  },
  {
    upsert: true
  }, function (err, result) {
    console.log("save or update data success");
    res.redirect("/register");
  });
  //res.render('register', { title: 'Express' });
};
