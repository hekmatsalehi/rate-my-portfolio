const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    profilePicture: String
    followers: [User]
    followings: [User]
    portfolios: [Portfolio]
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
    user(username: String!): User
    portfolios(username: String!): [Portfolio]
    portfolio(portfolioId: ID!): Portfolio
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPortfolio(portfolioText: String!, portfolioImage: String!, portfolioLink: String!): Portfolio
  }
`;

module.exports = typeDefs;
