'use strict';

const { db, Sequelize } = require('./connection');

const Record = db.define('record', {
  // id will be created automatically
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  record_type: {
    type: Sequelize.ENUM('expense', 'income'),
    allowNull: false,
    defaultValue: 'expense'
  },
  items: { // only available for psql
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  category: Sequelize.STRING,
  amount: Sequelize.FLOAT(2),
});

const Tag = db.define('tag', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// create the tables
// may need to use script to run these
Record.sync();
Tag.sync();
