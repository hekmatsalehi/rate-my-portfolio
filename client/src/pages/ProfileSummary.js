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

  console.log(user.portfolios.map((p)=>{return p.portfolioImage}))
  if(user.portfolios.length > 0){
    hasPortfolio= true
    console.log(hasPortfolio)
  }
  
  console.log(user.username);
  console.log(user.portfolios.map((p) => { return p.portfolioLink }))
  
  return (
    <>

      <PortfolioForm />

      <main className="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
        <form>

          <div className="space-y-6">
            <div>
              <h1 className="text-lg leading-6 font-medium text-gray-900">User Details</h1>

            </div>

            <div>
              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">

                Viewing {user.username}'s Profile.
              </label>
              <div className="mt-1">
                <p>

                </p>
              </div>
            </div>

            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">

                <p className=''>
                  {user.email}
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Portfolio Link</label>
              <div className="mt-1 flex rounded-md shadow-sm">

                <a href={user.portfolios.map((p) => { return p.portfolioLink })}>
                  {user.portfolios.map((p) => { return p.portfolioLink })}
                </a>
              </div>
            </div>
            <div>
              <div className="flex justify-center px-6 pt-5 pb border-2 rounded-md">
                <label className="block text-sm font-medium text-gray-700">Portfolio Image</label>
                <div className="space-y-1 mb-2 text-center">

                <img class="pic" src={user.portfolios.map((p)=>{return p.portfolioImage})}></img>
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >

                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-end">

            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">

              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">

              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  )

}

export default Profile