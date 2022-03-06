import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_PORTFOLIO } from "../../utils/mutations";
import { GET_ALL_PORTFOLIOS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const PortfolioForm = () => {
  const [formState, setFormState] = useState({
    portfolioText: "",
    portfolioImage: "",
    portfolioLink: "",
  });

  const [addPortfolio, { error }] = useMutation(ADD_PORTFOLIO, {
    update(cache, { data: { addPortfolio } }) {
      try {
        const { portfolios } = cache.readQuery({ query: GET_ALL_PORTFOLIOS });

        cache.writeQuery({
          query: GET_ALL_PORTFOLIOS,
          data: { portfolios: [addPortfolio, ...portfolios] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, portfolios: [...me.portfolios, addPortfolio] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPortfolio({
        variables: {
          ...formState,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setFormState("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="row col-12">
      {Auth.loggedIn() ? (
        <>
    
      <h3>Add your portfolio</h3>

          <form
            className="p-3 rounded"
            onSubmit={handleFormSubmit}
          >
              <div className="form-group">
                <textarea
                  name="portfolioText"
                  placeholder="Enter portfolio info..."
                  value={formState.portfolioText}
                  className="form-input"
                  style={{ lineHeight: "1.5", resize: "vertical" }}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  className="form-input"
                  placeholder="Enter portfolio image as a link"
                  name="portfolioImage"
                  type="text"
                  value={formState.portfolioImage}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-input"
                  placeholder="Enter portfolio link"
                  name="portfolioLink"
                  type="text"
                  value={formState.portfolioLink}
                  onChange={handleChange}
                />
              </div>
            

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary py-3" type="submit">
                Add Portfolio
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
          
        
        </>
      ) : (
        <p>
          You need to be logged in to add your portfolios. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
      </div>
  );
};

export default PortfolioForm;
