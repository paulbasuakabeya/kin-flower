import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // State to toggle between login and register mode

  const handleLogin = () => {
    // Perform login action (e.g., send login request to backend)
    console.log('Logging in with:', { email, password });
    // Redirect user to desired page after successful login
    navigate('/dashboard');
  };

  const handleRegister = () => {
    // Perform user registration action (e.g., send registration request to backend)
    console.log('Registering with:', { email, password });
    // Redirect user to desired page after successful registration
    navigate('/dashboard');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      handleRegister();
    } else {
      handleLogin();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bglogin">
      <div className="max-w-md p-6 bg-green-400 shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">{isRegistering ? 'Create Account' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {isRegistering ? 'Create Account' : 'Login'}
            </button>
            <button
              type="button"
              className="text-sm text-gray-600 hover:text-blue-500 focus:outline-none"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? 'Already have an account? Login' : 'Create new account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;