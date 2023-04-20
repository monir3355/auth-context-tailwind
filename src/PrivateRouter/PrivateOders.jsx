import React, { useContext } from "react";
import { AuthContext } from "../assets/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateOders = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user) {
    return children;
  }
  if (loading) {
    return <progress className="progress w-full"></progress>;
  }
  return <Navigate to="/login" replace={true} />;
};

export default PrivateOders;
