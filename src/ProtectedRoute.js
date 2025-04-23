// ProtectedRoute.js

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Importing useAuth hook to check user state

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Get user from context
  const location = useLocation(); // To store the current location

  if (!user) {
    // If no user, redirect to the login page and save the current location
    return <Navigate to={{ pathname: "/login", state: { from: location } }} />;
  }

  return children; // If user exists, show the protected route (children)
};

export default ProtectedRoute;
