import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($username: String, $email: String, $password: String) {
    updateUser(username: $username, email: $email, password: $password) {
      username
      email
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($userId: ID!) {
    removeUser(userId: $userId) {
      _id
      username
    }
  }
`;

export const ADD_PORTFOLIO = gql`
  mutation addPortfolio(
    $portfolioText: String!
    $portfolioImage: String!
    $portfolioLink: String!
  ) {
    addPortfolio(
      portfolioText: $portfolioText
      portfolioImage: $portfolioImage
      portfolioLink: $portfolioLink
    ) {
      _id
      portfolioAuthor
      portfolioText
    }
  }
`;

export const UPDATE_PORTFOLIO = gql`
  mutation updatePortfolio(
    $portfolioId: ID!
    $portfolioText: String
    $portfolioImage: String
    $portfolioLink: String
  ) {
    updatePortfolio(
      portfolioId: $portfolioId
      portfolioText: $portfolioText
      portfolioImage: $portfolioImage
      portfolioLink: $portfolioLink
    ) {
      _id
      portfolioAuthor
      portfolioText
      portfolioLink
      portfolioImage
    }
  }
`;

export const REMOVE_PORTFOLIO = gql`
  mutation removePortfolio($portfolioId: ID!) {
    removePortfolio(portfolioId: $portfolioId) {
      _id
      portfolioAuthor
    }
  }
`;

export const ADD_RATING = gql`
  mutation addRating($portfolioId: ID!, $ratingNumber: Int!) {
    addRating(portfolioId: $portfolioId, ratingNumber: $ratingNumber) {
      _id
      portfolioAuthor
      ratings {
        ratingAuthor
        ratingNumber
      }
    }
  }
`;

export const UPDATE_RATING = gql`
  mutation updateRating($portfolioId: ID!, $ratingNumber: Int!) {
    updateRating(portfolioId: $portfolioId, ratingNumber: $ratingNumber) {
      ratings {
        _id
        ratingAuthor
        ratingNumber
      }
    }
  }
`;

export const REMOVE_RATING = gql`
  mutation removeRating($portfolioId: ID!, $ratingId: ID!) {
    removeRating(portfolioId: $portfolioId, ratingId: $ratingId) {
      _id
      ratings {
        ratingAuthor
        ratingNumber
      }
    }
  }
`;
