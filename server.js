'use strict';

const express = require('express');
const PORT = process.argv[2] || process.env.port || 3000;
// const webpack = require('webpack');

const app = express();

// serve the files on port 3000
app.listen(PORT, () => console.log('Listening on port:', PORT));
