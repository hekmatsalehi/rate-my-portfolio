import { gql } from "@apollo/client";

export const GET_ONE_USER = gql`
  query getOneUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
      profilePicture
      portfolios {
        _id
        portfolioAuthor
        portfolioText
        portfolioLink
        portfolioImage
        createdAt
        ratings {
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
      followers {
        _id
      }
      followings {
        _id
      }
    }
  }
`;

export const GET_ALL_PORTFOLIOS = gql`
  query getAllPortfolio {
    portfolios {
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

export const GET_ONE_PORTFOLIO = gql`
  query getOnePortfolio($portfolioId: ID!) {
    portfolio(portfolioId: $portfolioId) {
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      profilePicture
      portfolios {
        _id
        portfolioAuthor
        portfolioText
        portfolioLink
        portfolioImage
        createdAt
        ratings {
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
      followers {
        _id
      }
      followings {
        _id
      }
    }
  }
`;
