'use strict';

const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Record {
    id: ID!
    type: RecordType!
    items: String
    category: String!
    amount: Float!
    shouldInclude: Boolean!
  }

  type Tag {
    id: ID!
    name: String!
  }

  enum RecordType {
    EXPENSE
    INCOME
  }

  type Query {
    records(category: String): [Record]
    tag(name: String!): Tag
  }

  type Mutation {
    record(
      type: RecordType! = EXPENSE,
      items: String,
      Category: String!,
      amount: Float!,
      shouldInclude: Boolean! = true
    ): Record!
  }
`);

module.exports = schema;
