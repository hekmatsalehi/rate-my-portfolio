const { Schema, Types } = require('mongoose')
const dateFormat = require('../utils/dateFormat');

const ratingSchema = new Schema(
  {
    ratingAuthor: {
      type: String,
      required: true,
    },
    ratingNumber: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  }

);

module.exports = ratingSchema;