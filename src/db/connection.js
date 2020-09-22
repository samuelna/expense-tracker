'use strict';

require('dotenv').config()
const Sequelize = require('sequelize');
const user = process.env.PGUSER;
const password = process.env.PGPASSWORD;
const host = process.env.PGHOST;
const port = process.env.PGPORT;
const db = process.env.PGDATABASE;

const sequelize = new Sequelize(`postgres://${user}:${password}@${host}:${port}/${db}`);

module.exports = { db: sequelize };
