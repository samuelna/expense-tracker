'use strict';

const { db } = require('../db/connection.js');
const { Record, Tag } = require('../db/model.js');

const resolvers = {
  records: (obj, args, context, info) => {
    return Record.findAll();
  },
  tags: (obj, args, context, info) => {
    return Tag.findAll();
  }
};

module.exports = resolvers;
