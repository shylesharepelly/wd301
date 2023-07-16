import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  let navigate = useNavigate();
  const BackToHome = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button id="backToHomeButton" onClick={BackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
