const db = require('../config/connection');
const { User, Portfolio } = require('../models');
const userSeeds = require('./userSeeds.json');
const portfolioSeeds = require('./portfolioSeeds.json');

db.once('open', async () => {
  try {
    await Portfolio.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < portfolioSeeds.length; i++) {
      const { _id, portfolioAuthor } = await Portfolio.create(portfolioSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: portfolioAuthor },
        {
          $addToSet: {
            portfolios: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
