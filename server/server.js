const express = require('express');
const pgp = require('pg-promise')({});
const cors = require('cors');

const app = express();

const PORT = 3000;

const dbconfig = {
  user: 'practice',
  database: 'practice',
  password: 'practice',
  host: 'localhost',
  port: 5432,
}

const db = pgp(dbconfig);

app.use(express.static(__dirname + '/public/build'));

app.get('/theinfo', cors(), (req, res) => {
  db.any('SELECT * FROM messages')
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.log('ERROR:', error);
      res.status(500).end();
    })
})

app.listen(PORT, err => {
  err && console.log(err);
  console.log(`Express Web Server is Listening on ${PORT}`);
})
