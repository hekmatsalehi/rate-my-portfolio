import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { GET_ONE_USER, QUERY_ME } from '../utils/queries'
import { HomeIcon, UsersIcon } from '@heroicons/react/solid'
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth'
import PortfolioForm from "../components/PortfolioForm/PortfolioForm";




const Profile = () => {

  let hasPortfolio = false
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? GET_ONE_USER : QUERY_ME, {
    variables: { username: userParam },


  }

  )





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

  console.log(user.portfolios.map((p) => { return p.portfolioImage }))
  if (user.portfolios.length > 0) {
    hasPortfolio = true
    console.log(hasPortfolio)
  }

  console.log(user.username);
  console.log(user.portfolios.map((p) => { return p.portfolioLink }))

  return (
    <>

      <PortfolioForm />
      <main className="max-w-2xl mx-auto pt-10 pb-12 px-4 lg:pb-16">
        <form>
          <div>
            <div>
              <h1 className="text-lg font-bold">User Details</h1>
            </div>
            <div>
              <p class="block text-md font-medium">
                Viewing {user.username}'s Profile.
              </p>
            </div>

            <div>
              <h1 class="block font-bold text-lg mt-3">
                Email
              </h1>
                <p class="font-medium">{user.email}</p>
            </div>


            <div class="flex grid grid-cols-1 md:grid-cols-2 gap-3">
              {user.portfolios?.map((portfolio) => {
                return (
                  <div class="max-w-sm rounded overflow-hidden shadow-md" key={portfolio._id}>
                    <img class="w-full" src={portfolio.portfolioImage} alt="Portfolio Preview" />
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">{portfolio.portfolioText}</div>
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