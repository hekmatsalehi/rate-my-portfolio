const { Schema, Types } = require('mongoose')
const dateFormat = require('../utils/dateFormat');

const feedbackSchema = new Schema(
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

);

module.exports = feedbackSchema;