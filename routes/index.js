let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/hello-world', (req, res, next) => {
  res.render('hello-world', { title: 'Hello world !'});
});

module.exports = router;
