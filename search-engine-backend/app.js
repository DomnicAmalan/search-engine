const express = require('express')
const app = express()
const port = 3001

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'welcome',
  database : 'sarchy'
});
 
connection.connect();


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/test-connection', (req, res) => {
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) res.send(error);
        else res.send(true)
    });
    connection.end();
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))