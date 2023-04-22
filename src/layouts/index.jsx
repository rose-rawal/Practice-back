import React, { useContext } from "react";
import Header from "./header";
import { UserContext } from "../contexts/usercontext";
import Login from "../pages/login";

const Layout = ({ children }) => {
  const {isLoggedIn} = useContext(UserContext)
  return (
    <div 
      style={{
        margin: "20px 80px",
      }}
    >
      <Header />
      {isLoggedIn ? children : <Login/>}

    </div>
  );
};

export default Layout;
