import React from "react";

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="ml-64 p-8 text-center">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-2xl mb-4 font-semibold">Register</h1>
          <form id="registerForm" className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-1">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
            <p id="error" className="text-red-500"></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
