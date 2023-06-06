import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ReactPlayground from './ReactPlayground';
import Header from "./Header";
import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import TaskDetailsPage from "./TaskDetailsPage";
import Signin from "./Signin";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "./NotFound";
import Form from './Form';
import Signup from './pages/signup';

function App() {


return (
  <Routes>
    <Route path="/" element={<Signup />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin/>} />
    <Route path="/notfound" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/notfound" />} />
</Routes>
);
}

export default App;