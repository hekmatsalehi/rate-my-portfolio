import React, { useState } from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import { GET_ONE_USER, QUERY_ME } from "../utils/queries";
import { REMOVE_PORTFOLIO } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import PortfolioForm from "../components/PortfolioForm/PortfolioForm";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  const [removePortfolio, { error }] = useMutation(REMOVE_PORTFOLIO, {
    update(cache, { data: { removePortfolio } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removePortfolio },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemovePortfolio = async (portfolioId) => {
    try {
      const { data } = await removePortfolio({
        variables: { portfolioId },
      });
    } catch (err) {
      console.error(err);
    }
    console.log(portfolioId)
  }
 
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? GET_ONE_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  console.log(
    user.portfolios.map((p) => {
      return p.portfolioImage;
    })
  );
  if (user.portfolios.length > 0) {
 
  }

  console.log(user.username);
  console.log(
    user.portfolios.map((p) => {
      return p.portfolioLink;
    })
  );

  return (
    <>
      <PortfolioForm />

      <main className="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
        <form>
          <div className="space-y-6">
            <div>
              <h1 className="text-lg leading-6 font-medium text-gray-900">
                User Details
              </h1>
            </div>

            <div>
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-gray-700"
              >
                Viewing {user.username}'s Profile.
              </label>
              <div className="mt-1">
                <p></p>
              </div>
            </div>

            <div className="col-span-3 sm:col-span-2">
              <label
                htmlFor="company-website"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <p className="">{user.email}</p>
              </div>
            </div>

            {user.portfolios?.map((portfolio) => {
              return (
                <div
                  class="max-w-sm rounded overflow-hidden shadow-lg"
                  key={portfolio._id}
                >
                  <img src={portfolio.portfolioImage} alt="Portfolio Preview" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                      {portfolio.portfolioText}
                    </div>
                    <div>
                    <a class="font-bold text-xl mb-2">
                      {portfolio.portfolioLink}
                    </a>
                    </div>
                    <Button className="mx-auto" variant="primary">
                      <Link
                        class="block m-auto text-white no-underline"
                        to={`/portfolio/${portfolio._id}`}
                      >
                        View Portfolio
                      </Link>
                    </Button>
                    <Button className="btn btn-danger"
                    onClick={() => handleRemovePortfolio(portfolio._id)}>
                      Remove
                    </Button>
                    
                  </div>
                </div>
              );
            })}
            <div className="flex justify-end"></div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              ></label>
              <div className="mt-1 sm:mt-0 sm:col-span-2"></div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Profile;
