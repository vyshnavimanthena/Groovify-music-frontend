import { Icon } from '@iconify/react';
import { FaUser, FaLock } from 'react-icons/fa'; 
import React, { useState } from 'react';
import './login.css';

const SignupComponent = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');




  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission, such as authentication or user creation.
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);

  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
    
    >
        <h1 className="heading">Groovify</h1>
        <Icon icon="ph:infinity" color="purple"  width="50" height="50"/>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:max-w-md"
        onSubmit={handleFormSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-3 flex items-center"
            htmlFor="Email"
          >
            <FaUser className="mr-2" / > Email address <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Email"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-3 flex items-center"
            htmlFor="Username"
          >
            <FaUser className="mr-2" /> What should we call you? <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 flex items-center"
            htmlFor="password"
          >
            <FaLock className="mr-2" /> Create Password <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign up
          </button>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Already have an account? 
            <a href="/login" className="text-blue-500 hover:underline">login here</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupComponent;
