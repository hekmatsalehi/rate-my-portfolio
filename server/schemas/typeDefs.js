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
    ratings: [Rating]
    feedbacks: [Feedback]!
    createdAt: String
  }

  type Feedback {
    _id: ID
    feedbackText: String
    feedbackAuthor: String
    createdAt: String
  }

  type Rating {
    _id: ID
    ratingAuthor: String
    ratingNumber: Int
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    portfolios(username: String): [Portfolio]
    portfolio(portfolioId: ID!): Portfolio
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPortfolio(portfolioText: String!, portfolioImage: String!, portfolioLink: String!): Portfolio

    addRating(portfolioId: ID!, ratingNumber: Int!): Portfolio
    addFeedback(portfolioId: ID!, feedbackText: String!): Portfolio

    updateRating(portfolioId: ID!, ratingNumber: Int!): Portfolio
    
    removeRating(portfolioId: ID!, ratingId: ID!): Portfolio
    removeFeedback(portfolioId: ID!, feedbackId: ID!): Portfolio

    removeUser(userId: ID!): User
    updateUser(username: String, email: String, password: String): User

    removePortfolio(portfolioId: ID!): Portfolio
    updatePortfolio(portfolioId: ID, portfolioText: String, portfolioImage: String, portfolioLink: String): Portfolio
  }
`;

module.exports = typeDefs;
