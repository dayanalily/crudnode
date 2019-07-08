const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'medical',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
