import React, { useState } from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import { GET_ONE_USER, QUERY_ME } from "../utils/queries";
import { REMOVE_PORTFOLIO } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import PortfolioForm from "../components/PortfolioForm/PortfolioForm";
import '../styles/tailwind.css';


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
    console.log(portfolioId);
  };

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
      <main className="max-w-2xl mx-auto pt-10 pb-12 px-4 lg:pb-16 font-sora">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Sora&display=swap" rel="stylesheet"/>
        <form>
          <div>
            <div>
              <h1 className="text-lg font-bold">User Details</h1>
            </div>
            <div>
              <p className="block text-md font-medium">
                Viewing {user.username}'s Profile.
              </p>
            </div>

            <div>
              <h1 className="block font-bold text-lg mt-3">
                Email
              </h1>
              <p className="font-medium">{user.email}</p>
            </div>


            <div className="flex grid grid-cols-1 md:grid-cols-2 gap-3">
              {user.portfolios?.map((portfolio) => {
                return (
                  <div className="max-w-sm rounded overflow-hidden shadow-md" key={portfolio._id}>
                    <img className="w-full" src={portfolio.portfolioImage} alt="Portfolio Preview" />
                    <div className="px-6 py-2">
                      <div className="font-bold text-lg text-center mb-2">{portfolio.portfolioText}</div>
                    </div>
                    <div className="m-auto text-center pb-4">
                      <a className="font-bold mb-2 mx-auto no-underline" href={portfolio.portfolioLink}>
                      {portfolio.portfolioLink}</a>
                    </div>
                    <div className="flex">
                    <button className="mx-auto no-underline">
                      <Link
                        className="block m-auto rounded text-white no-underline p-2 mb-4 bg-cyan-500 hover:bg-cyan-400"
                        to={`/portfolio/${portfolio._id}`}
                      >
                        View Portfolio
                      </Link>
                    </button>
                    <button
                      className="mx-auto rounded text-white p-2 no-underline bg-red-500 hover:bg-red-600 mb-4"
                      onClick={() => handleRemovePortfolio(portfolio._id)}
                    >
                      Remove
                    </button>
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-end">

              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">

                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">

                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  )

}

export default Profile