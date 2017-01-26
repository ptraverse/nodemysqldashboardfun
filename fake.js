const faker = require('faker');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'fake'
});
connection.connect();

var user = faker.internet.userName();
console.log(user);
var post = faker.lorem.sentence(); 
console.log(post);
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();
