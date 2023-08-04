import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

import About from "./Components/About";
import Contact from "./Components/Contact";
import RestrauntMenu from "./Components/RestrauntMenu";
import Error from "./Components/error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const heading = <h1 id="title">Namaste 🙏 React</h1>;

const Maincompo = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const Applayout = createBrowserRouter([
  {
    path: "/",
    element: <Maincompo />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunt/:id",
        element: <RestrauntMenu />,
      },
    ],
  },
]);

const element = ReactDOM.createRoot(document.getElementById("demo"));
element.render(<RouterProvider router={Applayout} />);