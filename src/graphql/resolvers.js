'use strict';

const records = [
  {
    id: 1,
    type: 'EXPENSE',
    items: 'physical therapy',
    category: 'health',
    amount: 50
  },
  {
    id: 2,
    type: 'EXPENSE',
    items: 'uber',
    category: 'transportation',
    amount: 6.49
  }
];

const tags = [];

const resolvers = {
  records: (obj, args, context, info) => {
    return records;
  },
  tags: (obj, args, context, info) => {
    return tags;
  }
};

module.exports = resolvers;
