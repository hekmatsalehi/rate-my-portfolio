const { AuthenticationError } = require('apollo-server-express');
const { User, Portfolio } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
        .populate('portfolios')
        .populate('followers')
        .populate('followings');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .populate('portfolios')
        .populate('followers')
        .populate('followings');
    },
    portfolios: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Portfolio.find(params).sort({ createdAt: -1 });
    },
    portfolio: async (parent, { portfolioId }) => {
      return Portfolio.findOne({ _id: portfolioId })
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate('portfolios')
          .populate('followers')
          .populate('followings');
      }
      throw new AuthenticationError('You need to be logged in');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      console.log(email)
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addPortfolio: async (parent, { portfolioText, portfolioImage, portfolioLink }, context) => {
      if (context.user) {
        const portfolio = await Portfolio.create({
          portfolioText,
          portfolioImage,
          portfolioLink,
          portfolioAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { portfolios: portfolio._id } }
        );

        return portfolio;
      }
      throw new AuthenticationError('You need to be logged in');
    },

    addRating: async (parent, { portfolioId, ratingNumber }, context) => {
      if (context.user) {
        return Portfolio.findOneAndUpdate(
          { _id: portfolioId },
          {
            $addToSet: {
              ratings: { ratingNumber, ratingAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in');
    },

    removeRating: async (parent, { portfolioId, ratingId }, context) => {
      if (context.user) {
        return Portfolio.findOneAndUpdate(
          { _id: portfolioId },
          {
            $pull: {
              ratings: {
                _id: ratingId,
                ratingAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in');
    },

    addFeedback: async (parent, { portfolioId, feedbackText }, context) => {
      if (context.user) {
        return Portfolio.findOneAndUpdate(
          { _id: portfolioId },
          {
            $addToSet: {
              feedbacks: { feedbackText, feedbackAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in');
    },

    removeFeedback: async (parent, { portfolioId, feedbackId }, context) => {
      if (context.user) {
        return Portfolio.findOneAndUpdate(
          { _id: portfolioId },
          {
            $pull: {
              feedbacks: {
                _id: feedbackId,
                feedbackAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in');
    },

    removeUser: async (parent, { userId }, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: userId });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    removePortfolio: async (parent, { portfolioId }, context) => {
      if (context.user) {
        return Portfolio.findOneAndDelete({ _id: portfolioId });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // NOT WORKING
    updatePortfolio: async (parent, args, context) => {
      if (context.user) {
        return await Portfolio.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

  }
};

module.exports = resolvers;
