import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addProfile, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });

  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };
  
    return (
      <main>  <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
      Create an account
    </h1>
    {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
      <form  onSubmit={handleFormSubmit}>
    <div className="bg-slate-600 bg-fixed bg-cover bg-center flex items-center min-h-screen">
      <div className="flex-1 h-full max-w-lg mx-auto opacity-95 bg-white rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="md:flex-1 md:h-full md:max-w-lg md:mx-auto items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              
              <div>
                <label className="block font-bold text-sm">
                  Username
                </label>
                <input type="text"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 mb-4"
                  id="first-name" 
                  name= "username"
                  placeholder="username"
                  value={formState.username}
                  onChange={handleChange}/>
              </div>
              <div>
                <label className="block font-bold mt-4 text-sm">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  id="email-signup"
                  name= "email"
                  type= 'text'
                  placeholder="Email Address" 
                  value={formState.email}
                  onChange={handleChange}/>
              </div>
              <div className="mt-4">
                <label className="block font-bold text-sm">
                  Password
                </label>
                <input type="password"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  id="password-signup"
                  name= "password" 
                  placeholder="Password" 
                  type="password" 
                  value={formState.password}
                  onChange={handleChange}/>
              </div>
              <button
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-black transition-colors duration-150 bg-gray-200 border border-transparent rounded-lg hover:bg-blue-500 hover:text-white focus:outline-none focus:shadow-outline-blue"
                href="#" type= 'submit'>
                Sign up
              </button>
              {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
            )}
  </main>
    );
}
export default Signup