/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
const PrivateRoute = ({ children }) => {
  const { user, isLoading } = UseAuth();
  const location = useLocation();
  if (isLoading) {
    return (
      <img
        className="img-fluid w-25"
        src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif"
      />
    );
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/logIn" state={{ from: location }} />;
};

export default PrivateRoute;
