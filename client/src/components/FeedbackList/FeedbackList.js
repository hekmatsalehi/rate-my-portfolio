import React from 'react';
import { REMOVE_FEEDBACK } from "../../utils/mutations";
import { GET_ONE_PORTFOLIO } from "../../utils/queries";
import { useMutation } from "@apollo/client";

const FeedbackList = ({ feedbacks = [] }) => {
  const [removeFeedback, { error }] = useMutation(REMOVE_FEEDBACK, {
    update(cache, { data: { removeFeedback } }) {
      try {
        cache.writeQuery({
          query: GET_ONE_PORTFOLIO,
          data: { portfolio: removeFeedback },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveFeedback = async (portfolioId, feedbackId) => {
    try {
      const { data } = await removeFeedback({
        variables: { portfolioId, feedbackId },
      });
    } catch (err) {
      console.error(err);
    }
    console.log(portfolioId, feedbackId);
  };




  if (!feedbacks.length) {
    return <h3>No Feedback Yet</h3>;
  }

  return (
    <>
    <div class="w-screen md:w-2/3 mx-auto">
      <div className="flex-row my-4">
        <h1 class="mb-4">Feedback</h1>
        {feedbacks &&
          feedbacks.map((feedback) => (
            <div key={feedback._id} className="">
              <div className="p-3 bg-light">
                <h5 className="card-header">
                  {feedback.feedbackAuthor} wrote {' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {feedback.createdAt}
                  </span>
                </h5>
                <p className="card-body">{feedback.feedbackText}</p>
              {/* <button class="btn btn-secondary mr-2">Edit</button>
              <button class="btn btn-danger">Remove</button> */}
              </div>
            </div>
          ))}
      </div>
    </div>
    </>
  );
};

export default FeedbackList;