import React, { useContext } from "react";
import Header from "./header";
import { UserContext } from "../contexts/usercontext";
import Login from "../pages/login";

const Layout = ({ children }) => {
  const {isLoggedIn} = useContext(UserContext)
  return (
    <div 
      className="mx-20 my-5 flex flex-col items-center"
    >
      <Header />
      {isLoggedIn ? children : <Login/>}

    </div>
  );
};

export default Layout;
