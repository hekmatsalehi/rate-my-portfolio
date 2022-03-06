import React from 'react';

const FeedbackList = ({ feedbacks = [] }) => {
  if (!feedbacks.length) {
    return <h3>No Feedbacks Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Feedbacks
      </h3>
      <div className="flex-row my-4">
        {feedbacks &&
          feedbacks.map((feedback) => (
            <div key={feedback._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-light">
                <h5 className="card-header">
                  {feedback.feedbackAuthor} wrote {' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {feedback.createdAt}
                  </span>
                </h5>
                <p className="card-body">{feedback.feedbackText}</p>
              <button className='btn btn-secondary'>Edit</button>
              <button className='btn btn-danger'>Remove</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default FeedbackList;