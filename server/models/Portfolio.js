const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const portfolioSchema = new Schema({
  portfolioAuthor: {
    type: String,
    required: true,
    tirm: true

  },
  portfolioText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  portfolioImage: {
    type: String,
    required: true,
  },
  portfolioLink: {
    type: String,
    trim: true
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  feedbacks: [
    {
      feedbackText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      feedbackAuthor: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Portfolio = model('Portfolio', portfolioSchema);

module.exports = Portfolio;