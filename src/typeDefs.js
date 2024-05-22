const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Token {
    position: [Int]
    value: String
  }

  type Page {
    pageIndex: Int
    content: String
    tokens: [Token]
  }

  type Book {
    title: String
    author: String
    pages: [Page]
  }

  type Query {
    books: [Book]
    book(title: String!): Book
  }
`;

module.exports = typeDefs;
