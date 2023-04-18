import React from "react";
import Header from "./header";

const Layout = ({ children }) => {

  return (
    <div 
      style={{
        margin: "20px 80px",
      }}
    >
      <Header />
      {children}
    </div>
  );
};

export default Layout;
