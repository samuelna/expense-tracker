'use strict';

const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const PORT = process.argv[2] || process.env.port || 3000;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

const logRoute = (req, res, next) => {
  console.log('route: ', req);
  next();
};

app.use(logRoute);
app.get('/', (req, res) => res.send('hello from homepage') );
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});

// serve the files on port 3000
app.listen(PORT, () => console.log('Listening on port:', PORT));
