'use strict';

const { db, Sequelize } = require('./connection');

const Record = db.define('record', {
  // id will be created automatically
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  type: {
    type: Sequelize.ENUM('EXPENSE', 'INCOME'),
    allowNull: false,
    defaultValue: 'EXPENSE'
  },
  items: Sequelize.TEXT,
  category: Sequelize.STRING,
  amount: Sequelize.FLOAT(2),
  shouldInclude: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
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
