import React from 'react';
import '../../styles/tailwind.css';

const RatingList = ({ ratings = [] }) => {
  if (!ratings.length) {
    return <h3>No ratings Yet</h3>;
  }

  let ratingNumArray = ratings.map((number) => { 
    return number.ratingNumber
  })
  let avg = (eval(ratingNumArray.join('+'))/ratingNumArray.length).toFixed(2)
      


  return (
    <>
    <div class="w-screen md:w-2/3 mx-auto">
    <h3
        className="p-1 display-inline-block text-right"
      >
        Ratings <b class="display-1">{avg}</b> / 5
        {}
      </h3>
      <div className="flex-row my-4">
        {ratings &&
          ratings.map((rating) => (
            <div key={rating._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-light">
                <h5 className="card-header">
                  {rating.ratingAuthor} rated {' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {rating.createdAt}
                  </span>
                </h5>
                <p className="card-body">{rating.ratingNumber} stars</p>
              <button className='btn btn-danger'>Remove</button>
              </div>
            </div>
          ))}
      </div>
    </div>
    </>
  );
};

export default RatingList;