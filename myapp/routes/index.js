var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// select * from table
// insert into table (class_id, name, gender, score) values (2, '大牛', 'M', 80);
// update table set name='大牛', score=66 where id=1;
// delete from table where id=1;
module.exports = router;
