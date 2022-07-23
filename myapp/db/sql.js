const mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'liuxuxu',
    password: 'liuxuxu',
    database: 'blog'
})
module.exports = connection