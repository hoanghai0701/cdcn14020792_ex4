var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  let db = req.db;
  let collection = db.get('user');
  collection.find({}, {}, (e, docs) => {
    res.json(docs);
  });
});

router.get('/create', (req, res, next) => {
  res.render('user-create', { title: "Create new user"});
});

router.post('/', (req, res, next) => {
  let db = req.db;
  let collection = db.get('user');
  collection.insert(req.body, (err, doc) => {
    res.send((err === null) ? {msg: ""} : {msg: err})
  });
});

router.delete('/:id', (req, res, next) => {
  let db = req.db;
  let collection = db.get('user');
  let userId = req.params.id;
  collection.remove({'_id': userId}, err => {
    res.send((err === null) ? {msg: ""} : {msg: err})
  });
});

module.exports = router;
