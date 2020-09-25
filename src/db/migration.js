'use strict';

const {
  Record,
  Tag
} = require('./model.js');

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
