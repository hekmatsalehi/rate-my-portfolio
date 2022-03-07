import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import '../styles/tailwind.css';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [AddUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await AddUser({
        variables: { ...formState },
      });

      Auth.login(data.AddUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Sora&display=swap" rel="stylesheet"/>
      <main class="font-sora flex justify-center">
        <div class="flex mx-auto md:w-auto md:mx-auto m-36 md:m-36">
          <div class="m-auto md:container md:mx-auto bg-cyan-500 shadow-md rounded mx-auto px-8 pt-6 pb-8 mb-4 md:px-12 md:pt-8 md:pb-12 md:pb-8 flex flex-col">
            <h4 class="text-white p-2 text-center">SIGN UP</h4>
            <div>
              {data ? (
                <p>
                  Success! You may now {' '}
                  <Link to="/login">Login.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <label className="block text-white text-sm font-bold mb-2">Username</label>
                  <input
                    class="block text-center text-grey-darker text-sm font-bold mb-2 shadow appearance-none border rounded w-full py-2 px-5 text-left"
                    placeholder="Username"
                    name="username"
                    type="text"
                    value={formState.username}
                    onChange={handleChange}
                  />
                  <label className="block text-white text-sm font-bold mb-2">Email</label>
                  <input
                    className="form-input text-center block text-sm font-bold mb-2 shadow appearance-none border rounded w-full py-2 px-5"
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <label className="block text-white text-sm font-bold mb-2">Password</label>
                  <input
                    class="form-input text-center block text-sm font-bold mb-2 shadow appearance-none border rounded w-full py-2 px-5"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <div class="mt-3">
                  <button
                    class="bg-white hover:bg-teal-500 text-md hover:text-white text-black font-bold m-auto py-1 px-2 md:py-10 md:px-4 md:mr-8 rounded w-full"
                    type="submit"
                  >
                    Submit
                  </button>
                  </div>
                </form>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup