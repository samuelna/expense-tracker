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

// create the tables with seed data
// may need to use script to run these
Record.sync().then(() => {
  Record.create({
    type: 'expense',
    items: 'physical therapy',
    category: 'health',
    amount: 50
  });
});
Tag.sync().then(() => {
  Tag.create({ name: 'lunch' });
});
