// app/routes.js

// grab the nums model we just created
var Nums = require('./models/quick');
//var MongoClient = require('mongodb').MongoClient

module.exports = function(app) {

  // app.use(function(req, res, next) {
  //   console.log(req.method, req.url);
  //   // continue doing what we were doing and go to the route
  //   next();
  // });
  app.get('/db', function(req, res) {
    var nid = 1 + Math.floor( Math.random() * 10000) % 10000;
    var body = '{"id":"'+nid+'","randomNumber:"}'
    //console.log(body);
    Nums.findOne({id:nid}, {_id:0}, function(err, nums) { //[nid]
      if (err) res.send(err);
      else {
        if (nums) body = JSON.stringify(nums);
        res.set({
          'Content-Type': 'application/json',
          'Content-Length': body.length,
          'Server': 'Example'
        });
        res.send(body); // return all nums in JSON format
      }
    });
  });
  // server routes ===========================================================
  app.get('/db/:nid(\\d+)', function(req, res) {
    var nid = Number(req.params.nid);
    var body = '{"id":"'+nid+'","randomNumber:"}'
    //console.log(body);
    Nums.findOne({id:nid}, {_id:0}, function(err, nums) { //[nid]
      if (err) res.send(err);
      else {
        if (nums) body = JSON.stringify(nums);
        res.set({
          'Content-Type': 'application/json',
          'Content-Length': body.length,
          'Server': 'Example'
        });
        res.send(body); // return all nums in JSON format
      }
    });
  });
  app.get('/dbs', function(req, res) {
    Nums.find({}, {_id:0}, function(err, nums) { //[nid]
      if (err) res.send(err);
      else {
        if (nums) body = JSON.stringify(nums);
        res.set({
          'Content-Type': 'application/json',
          'Content-Length': body.length,
          'Server': 'Example'
        });
        res.send(body); // return all nums in JSON format
      }
    });
  });

  app.get('*', function(req, res) {
    res.redirect('/');
    //res.sendfile('./public/views/home.html');
  });

  };
