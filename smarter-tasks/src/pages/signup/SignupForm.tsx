import React, { useState }  from 'react';
import { API_ENDPOINT } from '../../config/constants';


const SignupForm: React.FC = () => {
    const [organisationName, setOrganisationName] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
  
    
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
        const response = await fetch(`${API_ENDPOINT}/organisations`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: organisationName, user_name: userName, email: userEmail, password: userPassword}),
        });
  
        if (!response.ok) {
          throw new Error('Sign-up failed');
        }
        console.log('Sign-up successful');
        // Dialogue: After successful signup we have to redirect the user to the secured page. We will do that later.
      } catch (error) {
        console.error('Sign-up failed:', error);
      }
    };

    
    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Organisation Name:</label>
            <input type="text" name="organisationName" id="organisationName" value={organisationName} onChange={(e) => setOrganisationName(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Your Name:</label>
            <input type="text" name="userName" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input type="email" name="userEmail" id="userEmail" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password:</label>
            <input type="password" name="userPassword" id="userPassword" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
          </div>
          <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign up</button>
        </form>
      );
}
export default SignupForm;