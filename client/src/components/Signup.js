import React from "react";

export default function Signup() {
    return (
    <div class="bg-slate-600 bg-fixed bg-cover bg-center flex items-center min-h-screen">
      <div class="flex-1 h-full max-w-lg mx-auto opacity-95 bg-white rounded-lg shadow-xl">
        <div class="flex flex-col md:flex-row">
          <div class="md:flex-1 md:h-full md:max-w-lg md:mx-auto items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div class="w-full">
              <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
                Create an account
              </h1>
              <div>
                <label class="block font-bold text-sm">
                  First Name
                </label>
                <input type="text"
                  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 mb-4"
                  id="first-name" placeholder="First Name" />
              </div>
              <div>
                <label class="block font-bold text-sm">
                  Last Name
                </label>
                <input type="text"
                  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  id="last-name" placeholder="Last Name" />
              </div>
              <div>
                <label class="block font-bold mt-4 text-sm">
                  Email
                </label>
                <input
                  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  id="email-signup" placeholder="Email Address" />
              </div>
              <div class="mt-4">
                <label class="block font-bold text-sm">
                  Password
                </label>
                <input type="password"
                  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  id="password-signup" placeholder="Password" type="password" />
              </div>
              <button
                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-black transition-colors duration-150 bg-gray-200 border border-transparent rounded-lg hover:bg-blue-500 hover:text-white focus:outline-none focus:shadow-outline-blue"
                href="#">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}