const mysql = require('mysql2');
const config = require('./server');

const pool = mysql.createPool(config.mysql);

module.exports = pool.promise();