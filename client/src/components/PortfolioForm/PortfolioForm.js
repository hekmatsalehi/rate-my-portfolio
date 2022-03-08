import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_PORTFOLIO } from "../../utils/mutations";
import { GET_ALL_PORTFOLIOS, QUERY_ME } from "../../utils/queries";

import '../../styles/tailwind.css';
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
    <div class="mx-auto text-center pt-10 font-sora">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Sora&display=swap" rel="stylesheet"/>
      {Auth.loggedIn() ? (
        <>   
      <h3>Add your portfolio</h3>
          <form
            className="p-2 rounded"
            onSubmit={handleFormSubmit}
          >
              <div className="form-group p-2">
                <textarea
                  name="portfolioText"
                  placeholder="Enter Portfolio Title"
                  value={formState.portfolioText}
                  class="form-input rounded w-full md:w-2/5"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group p-2">
                <input
                  className="form-input rounded w-full md:w-2/5"
                  placeholder="Enter portfolio image as a link"
                  name="portfolioImage"
                  type="text"
                  value={formState.portfolioImage}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group p-2">
                <input
                  className="form-input rounded w-full md:w-2/5"
                  placeholder="Enter portfolio link"
                  name="portfolioLink"
                  type="text"
                  value={formState.portfolioLink}
                  onChange={handleChange}
                />
              </div>
            

            <div className="text-center pt-2">
              <button class="bg-cyan-500 px-20 py-2 hover:bg-cyan-400 text-white rounded" type="submit">
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
