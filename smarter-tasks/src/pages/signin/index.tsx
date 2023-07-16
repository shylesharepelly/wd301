import React from "react";
import SigninForm from "./SigninForm";

const Signin: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="App max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="App text-3xl font-bold text-center text-gray-800 mb-8">
          Sign in
        </h1>
        <SigninForm />
      </div>
    </div>
  );
};

export default Signin;
