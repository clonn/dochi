
/*
 * GET home page.
 */

var User = require("../models/user");

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.add = function(req, res){
  var id = req.params["id"];
  console.log("id: " + id);
  User.update({
    _id: id
  }, {
    $inc: {score: 20}
  }, function (err, result) {
    console.log(result);
    console.log(err);
    console.log("add score success");
    res.redirect("/register");
  });
  
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
