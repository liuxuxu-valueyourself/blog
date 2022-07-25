var express = require('express');
var router = express.Router();
var connection = require('../db/sql')


router.post('/addArticle', (req, res, next) => {
    let name = req.body.name;
    console.log('name:', name);
    let sql = `insert into classes (className,time) values (?,now());`
    connection.query(sql, [name],(err, rows, fields) => {
        if (err) throw err
        // console.log(rows)
        res.send('respond with a resource GET users listingOK.' + JSON.stringify(rows));
    })
});

module.exports = router;





