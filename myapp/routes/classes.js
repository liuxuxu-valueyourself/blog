var express = require('express');
const connection = require("../db/sql");
var router = express.Router();

/* GET home page. */
router.post('/addClasses', (req, res, next) => {
  let name = req.body.name;
  let title = req.body.title;
  console.log('name:', name);
  let sql = `insert into classes (className,title,time) values (?,?,now());`
  connection.query(sql, [name,title],(err, rows, fields) => {
    if (err) throw err
    // console.log(rows)
    res.send('respond with a resource GET users listingOK.' + JSON.stringify(rows));
  })
});





// select * from table;
// insert into table (class_id, name, gender, score) values (2, '大牛', 'M', 80);
// update table set name='大牛', score=66 where id=1;
// delete from table where id=1;
module.exports = router;
