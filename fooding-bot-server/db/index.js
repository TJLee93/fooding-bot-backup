const mysql = require('mysql');

const host = 'process.env.DATABASE_HOST';

let connection = mysql.createConnection({
    host,
    user: 'process.env.DATABASE_USERNAME',
    password: 'process.env.DATABASE_PASSWORD',
    database: 'process.env.DATABASE_NAME',
    port: 'process.env.DATABASE_PORT'
});

connection.connect();

module.exports = connection;