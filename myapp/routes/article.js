var express = require('express');
var router = express.Router();
var connection = require('../db/sql')


router.post('/addArticle', (req, res, next) => {
    let sql = 'select * from classes'
    connection.query(sql, (err, rows, fields) => {
        if (err) throw err
        console.log(rows)
        console.log(req.params);
        res.send('respond with a resource GET users listing.' + JSON.stringify(rows));
    })
});

module.exports = router;





