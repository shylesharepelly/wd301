import React, { useState } from 'react';
import { API_ENDPOINT } from '../../config/constants';

const SigninForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
        const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          throw new Error('Sign-in failed');
        }
  
        console.log('Sign-in successful');
        
      } catch (error) {
        console.error('Sign-in failed:', error);
      }
    };
  

  return (
    <form>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Password:</label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign In</button>
    </form>
  );
};

export default SigninForm;