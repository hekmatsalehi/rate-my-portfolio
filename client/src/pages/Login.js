import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    
      <div>
        <div className="bg-slate-600 bg-fixed bg-cover bg-center bg-no-repeat min-h-full h-screen md:h-screen flex justify-center">
          <div className="flex mx-auto md:w-auto md:mx-auto m-56 md:m-56 opacity-95">
            <div className="m-auto md:container md:mx-auto bg-white shadow-md rounded mx-auto px-8 pt-6 pb-8 mb-4 md:px-12 md:pt-8 md:pb-12 md:pb-8 flex flex-col">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  for="username"
                >
                  Email
                </label>
                
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="username"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Email address"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                  id="password"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-gray-200 hover:bg-blue-500 hover:text-white text-black font-bold py-1 px-2 md:py-2 md:px-4 md:mr-8 rounded"
                  id="login-button"
                  type="submit"
                >
                  Sign In
                </button>
                <NavLink
                  to="/Signup"
                  className="inline-block align-baseline font-bold text-sm"
                >
                  <span className="hover:text-blue-500"> Sign up here! </span>
                </NavLink>
                
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
      </div>
   
  );
};
export default Login