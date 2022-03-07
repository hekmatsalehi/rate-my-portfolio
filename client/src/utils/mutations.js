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
      portfolioLink
      portfolioImage
      createdAt
      ratings {
        _id
        ratingAuthor
        ratingNumber
        createdAt
      }
      feedbacks {
        _id
        feedbackAuthor
        feedbackText
        createdAt
      }
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
  mutation addRating($portfolioId: ID!, $ratingNumber: String!) {
    addRating(portfolioId: $portfolioId, ratingNumber: $ratingNumber) {
      _id
      portfolioText
      portfolioAuthor
      createdAt
      ratings {
        _id
        ratingNumber
        createdAt
      }
    }
  }
`;

export const UPDATE_RATING = gql`
  mutation updateRating($portfolioId: ID!, $ratingNumber: String!) {
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

export const ADD_FEEDBACK = gql`
  mutation addFeedback($portfolioId: ID!, $feedbackText: String!) {
    addFeedback(portfolioId: $portfolioId, feedbackText: $feedbackText) {
      _id
      portfolioText
      portfolioAuthor
      createdAt
      feedbacks{
        _id
        feedbackText
        createdAt
      }
    }
  }
`;

export const UPDATE_FEEDBACK = gql`
  mutation updateFeedback($portfolioId: ID!, $feedbackText: String!, $feedbackId: ID!) {
    updateFeedback(portfolioId: $portfolioId, feedbackText: $feedbackText, feedbackId: $feedbackId) {
      _id
      portfolioText
      feedbacks{
        _id
        feedbackText
        feedbackAuthor
      }
    }
  }
`;

export const REMOVE_FEEDBACK = gql`
  mutation removeFeedback($portfolioId: ID!, $feedbackId: ID!){
    removeFeedback(portfolioId: $portfolioId, feedbackId: $feedbackId){
      _id
      feedbacks{
        _id
        feedbackText
        feedbackAuthor
      }
    }
  }
`;
