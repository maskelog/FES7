var express = require('express');
var router = express.Router();
const authRouter = require("./auth");

router.get('/', (req, res) => {
  res.render('index', { postList: [] });
});

module.exports = router;
