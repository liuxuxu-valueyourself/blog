const mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'liuxuxu',
    password: 'liuxuxu',
    port:'3306',
    database: 'blog',
    timezone: "08:00"
})
module.exports = connection