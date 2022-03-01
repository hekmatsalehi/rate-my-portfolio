import React from "react";

export default function Login() {
    return (
    <div>
        <div class="bg-home-img bg-fixed bg-cover bg-center bg-no-repeat min-h-full h-screen md:h-screen flex justify-center">
            <div class="flex mx-auto md:w-auto md:mx-auto m-56 md:m-56 opacity-95">
                <div class="m-auto md:container md:mx-auto bg-white shadow-md rounded mx-auto px-8 pt-6 pb-8 mb-4 md:px-12 md:pt-8 md:pb-12 md:pb-8 flex flex-col">
                    <div class="mb-4">
                        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username"
                            type="text" placeholder="Email address" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                            id="password" type="password" placeholder="Password" />
                    </div>
                    <div class="flex items-center justify-between">
                        <button
                            class="bg-gray-200 hover:bg-blue-500 hover:text-white text-black font-bold py-1 px-2 md:py-2 md:px-4 md:mr-8 rounded"
                            id="login-button" type="button">
                            Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm" href="./signup.html">
                            <span class="hover:text-blue-500"> Sign up here! </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  </div >
    );
}