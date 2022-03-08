const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(
process.env.MONGODB_URI || 'mongodb://127.0.0.1/rate-my-portfolio-app',

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
