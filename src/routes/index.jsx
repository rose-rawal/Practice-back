import Index from "../pages";
import About from "../pages/about";
import Contact from "../pages/contact";
import Page404 from "../pages/Page404";

export const routes = [
  {
    path: "/",
    element: <Index />,
    name: "Home",
  },
  {
    path: "/about",
    element: <About />,
    name: "About",
  },
  {
    path: "/contact",
    element: <Contact />,
    name: "Contact",
  },
  {
    path: "/404",
    element: <Page404 />,
  }
];
