const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const Feedback = require('./Feedback')
const Rating = require('./Rating')


const portfolioSchema = new Schema({
  portfolioAuthor: {
    type: String,
    required: true,
    trim: true
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
    required: false,
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

  ratings: [Rating],
  feedbacks: [Feedback],

});

const Portfolio = model('Portfolio', portfolioSchema);

module.exports = Portfolio;