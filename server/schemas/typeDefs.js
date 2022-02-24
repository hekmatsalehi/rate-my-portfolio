const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    profilePicture: String
    
    portfolios: [Portfolio]!
  }

  type Portfolio {
    _id: ID
    portfolioAuthor: String
    portfolioText: String
    portfolioImage: String
    portfolioLink: String
    createdAt: String
    feedbacks: [Feedback]!
  }

  type Feedback {
    _id: ID
    feedbackText: String
    feedbackAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
