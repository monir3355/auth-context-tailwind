import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      <h2>This is context {user && user.displayName}</h2>
    </div>
  );
};

export default Home;
