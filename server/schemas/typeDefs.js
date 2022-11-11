const {gql} = require('apollo-server-express');

const typeDefs = gql `

type Query {
    me: User
  }
  
  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    authors: [String]
    bookId: String!
    description: String
    title: String
    image: String
    link: String 
  }

  input BookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    title: String
    link: String
    }

    input savedBook {
    authors: [String]
    title: String
    description: String
    bookId: String
    image: String
    link: String
  }

  type Auth {
      token: ID!
      user: User
  }
  
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
