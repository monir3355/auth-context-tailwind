import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handlelogOut = () => {
    logOut()
      .then(() => {
        alert("Sign Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-blue-500">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Auth master
        </Link>
      </div>
      <div className="flex-none">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/orders" className="btn btn-ghost normal-case text-xl">
          Orders
        </Link>
        <Link to="/profile" className="btn btn-ghost normal-case text-xl">
          Profile
        </Link>
        <Link to="/login" className="btn btn-ghost normal-case text-xl">
          Login
        </Link>
        <Link to="/register" className="btn btn-ghost normal-case text-xl">
          Register
        </Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handlelogOut} className="btn btn-xs">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
