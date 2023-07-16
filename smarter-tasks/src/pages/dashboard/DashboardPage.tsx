import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPages: React.FC = () => {
  let navigate = useNavigate();
  let userdata = localStorage.getItem("userData");
  let udata;
  if (userdata) {
    udata = JSON.parse(userdata);
  }

  //signout
  const signout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/signin");
  };

  return (
    <div className="App text-center items-center">
      <div className="">
        <h1>Welcome {udata.name}</h1>
      </div>
      <div>
        <h1>Your Email is {udata.email}</h1>
      </div>
      <div>
        <button type="submit" id="logout-link" onClick={signout}>
          Signout
        </button>
      </div>
    </div>
  );
};

export default DashboardPages;
