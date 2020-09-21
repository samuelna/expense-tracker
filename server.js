'use strict';

require('dotenv').config()
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const PORT = process.argv[2] || process.env.port || 3000;
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.dev.js');
const compiler = webpack(config);
const app = express();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

const logRoute = (req, res, next) => {
  console.log('route: ', req);
  next();
};

app.use(logRoute);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});

// serve the files on port 3000
app.listen(PORT, () => console.log('Listening on port:', PORT));
