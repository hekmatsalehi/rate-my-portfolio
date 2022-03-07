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
    followers(username: String!): [User]
    followings(username: String!): [User]
  }

  type Mutation {
    # USER
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    updateUser(username: String, email: String, password: String): User

    # PORTFOLIO
    addPortfolio(portfolioText: String!, portfolioImage: String!, portfolioLink: String!): Portfolio
    removePortfolio(portfolioId: ID!): Portfolio
    updatePortfolio(portfolioId: ID!, portfolioText: String, portfolioImage: String, portfolioLink: String): Portfolio

    # RATING
    addRating(portfolioId: ID!, ratingNumber: String!): Portfolio
    removeRating(portfolioId: ID!, ratingId: ID!): Portfolio
    updateRating(portfolioId: ID!, ratingNumber: String!): Portfolio

    # FEEDBACK
    addFeedback(portfolioId: ID!, feedbackText: String!): Portfolio
    removeFeedback(portfolioId: ID!, feedbackId: ID!): Portfolio
    updateFeedback(portfolioId: ID!, feedbackText: String!, feedbackId: ID!): Portfolio

    # FOLLOW/UnFOLLOW
    followUser(userId: ID!): User
    unfollowUser(userId: ID!): User
  }
`;

module.exports = typeDefs;
