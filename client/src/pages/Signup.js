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
    <main className="bg-slate-100 bg-fixed bg-cover bg-center bg-no-repeat min-h-full h-screen md:h-screen flex justify-center">
      <div className="flex mx-auto md:w-auto md:mx-auto m-56 md:m-56 opacity-95">
        <div className="m-auto md:container md:mx-auto bg-slate-300 shadow-md rounded mx-auto px-8 pt-6 pb-8 mb-4 md:px-12 md:pt-8 md:pb-12 md:pb-8 flex flex-col">
          <h4 className="card-header bg-dark text-light p-2 text-center">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now {' '}
                <Link to="/login">Login.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input block text-grey-darker text-sm font-bold mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  placeholder="Username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  className="form-input block text-grey-darker text-sm font-bold mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input block text-grey-darker text-sm font-bold mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="bg-gray-500 hover:bg-blue-500 hover:text-white text-black font-bold py-1 px-2 md:py-2 md:px-4 md:mr-8 rounded"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
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
  );
};

export default Signup