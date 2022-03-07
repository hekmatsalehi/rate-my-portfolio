import React from 'react';
import { Link } from 'react-router-dom';
import Auth from "../utils/auth";
import '../styles/tailwind.css';

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav class="bg-cyan-500 sm:px-4 py-1 rounded font-sora">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Sora&display=swap" rel="stylesheet"/>
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" class="flex no-underline text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-upload mt-1 mr-2" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
          </svg>
          <span className="self-center text-lg font-semibold whitespace-nowrap mt-1 ml-2">Rate My Portfolio</span>
        </Link>
        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <div>
            <nav>
              {Auth.loggedIn() ? (
                <>
                  <div class="flex float-right">
                    <div class="mr-8">
                      <Link class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 no-underline" to="/me">
                        {Auth.getProfile().data.username}'s profile
                      </Link>
                    </div>
                    <div class="mr-4">
                      <button class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" onClick={logout}>
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div class="flex float-right">
                    <div class="mr-8">
                      <Link class="block py-2 pr-4 pl-3 text-white md:border-0 hover:text-black md:p-0 no-underline" to="/login">
                        Login
                      </Link>
                    </div>
                    <div class="mr-4">
                      <Link className="block py-2 pr-4 pl-3 text-white md:p-0 no-underline" to="/signup">
                        Signup
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar