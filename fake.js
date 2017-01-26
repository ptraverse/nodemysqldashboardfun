const faker = require('faker');
const mysql = require('mysql');
const moment = require('moment');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'fake'
});
connection.connect();

var post = {
    'user': faker.internet.userName(),
    'content': faker.lorem.sentence(),
    'posted_at': moment().format("YYYY-MM-DD HH:mm:ss")
};
console.log(post);

var insertPost = function(postObj) {
    var insert = "\
    INSERT INTO `post` (`user`, `content`, `posted_at`) VALUES \
    ('" + postObj.user + "', '" + postObj.content + "', '" + postObj.posted_at + "' )";
    connection.query(insert, function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log('Added object!');
    });
};

insertPost(post);
 
connection.end();
