'use strict';

const { db, Sequelize } = require('./connection');

const Record = db.define('record', {
  // id will be created automatically
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  recordType: {
    type: Sequelize.ENUM('expense', 'income'),
    allowNull: false,
    defaultValue: 'expense'
  },
  items: Sequelize.TEXT,
  category: Sequelize.STRING,
  amount: Sequelize.FLOAT(2),
});

const Tag = db.define('tag', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = {
  Record,
  Tag
};
