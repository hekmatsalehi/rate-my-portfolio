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
      <h4>Rate this portfolio</h4>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="">
              <input
                className="form-input"
                name="ratingNumber"
                placeholder=""
                value={ratingNumber}
                type="number"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>

            <div className="">
              <button className="btn btn-primary btn-block py-3" type="submit">
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
