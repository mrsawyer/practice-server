const express = require('express');
const pgp = require('pg-promise')({});
const cors = require('cors');

const app = express();

const PORT = 3000;

const authRouter = express.Router();
const apiRouter = express.Router();

const apiRoutes = require('./routes/api');
const authRoutes = require('./routes/auth');

// module.exports = {
//   user: 'practice',
//   database: 'practice',
//   password: 'practice',
//   host: 'localhost',
//   port: 5432,
// }

app.use('/api', apiRoutes(apiRouter));

app.use('/auth', authRoutes(authRouter));

app.use(express.static(__dirname + '/public/build'));

app.listen(PORT, err => {
  err && console.log(err);
  console.log(`Express Web Server is Listening on ${PORT}`);
})
