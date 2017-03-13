var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  let db = req.db;
  let collection = db.get('user');
  collection.find({}, {}, (e, docs) => {
    res.render('user-list', {
      'userList' : docs
    })
  });
});

router.get('/create', (req, res, next) => {
  res.render('user-create', { title: "Create new user"});
});

router.post('/', (req, res, next) => {
  let db = req.db;
  console.log(req);

  let collection = db.get('user');
  collection.insert({
    username: req.body.username,
    email: req.body.email
  }, (err, doc) => {
    if (err) {
      res.send("Creating user failed.");
    } else {
      res.redirect('/users');
    }
  });
});
module.exports = router;
