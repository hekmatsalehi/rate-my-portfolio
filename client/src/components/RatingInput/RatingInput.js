import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import '../../styles/tailwind.css';

import { ADD_RATING } from '../../utils/mutations';

import Auth from '../../utils/auth';

const RatingInput = ({ portfolioId }) => {
  const [ratingNumber, setRatingNumber] = useState('');

  const [addRating, { error }] = useMutation(ADD_RATING);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addRating({
        variables: {
          portfolioId,
          ratingNumber,
          ratingAuthor: Auth.getProfile().data.username,
        },
      });

      setRatingNumber('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'ratingNumber') {
      setRatingNumber(value);
    }
  };

  return (
    <div>
      <h4 class="text-center">Rate this portfolio</h4>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md text-center"
            onSubmit={handleFormSubmit}
          >
            <div>
              <input
                class="rounded"
                name="ratingNumber"
                placeholder=""
                value={ratingNumber}
                type="number"
                onChange={handleChange}
              ></input>
            </div>

            <div class="mt-2">
              <button class="block m-auto rounded text-white no-underline p-2 mb-4 bg-cyan-500 hover:bg-cyan-400" type="submit">
                Add Rating
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to give Rating. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default RatingInput;
