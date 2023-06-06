import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Signin from './pages/signin';
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "./NotFound";

import Signup from './pages/signup';

import Dashboard from "./pages/dashboard"


const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/dashboard" element={<ProtectedRoute element={ <Dashboard/> } />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </div>
  );
}

export default App;