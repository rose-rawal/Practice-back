import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { routes } from "./routes";

/**
 *
 *  [1,2,3,4].map(callbackfunction)
 * [1,2,3,4].map((eachInput)=>value)
 *
 *
 *  {path: '/', element: <Index/>} ==> <Route key="/" path="/" element={<Index/>} />
 */

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((each) => (
          <Route key={each.path} path={each.path} element={each.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
