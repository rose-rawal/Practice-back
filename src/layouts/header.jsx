import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>React Workshop</div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {routes
          .filter((route) => !!route.name)
          .map((each) => (
            <Link key={each.path} to={each.path}>
              {each.name}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Header;
