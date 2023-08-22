import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

//lazy loaded the about component
const About = lazy(() => import("./Components/About"));
//import About from "./Components/About";
import Contact from "./Components/Contact";
import RestrauntMenu from "./Components/RestrauntMenu";
import Error from "./Components/error";

import Profile from "./Components/ProfileFunctional";
import ProfileClass from "./Components/ProfileClass";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProfileFunction from "./Components/ProfileFunctional";
import { lazy } from "react";
import Shimmer from "./Components/ShimmerUI";

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
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunt/:id",
        element: <RestrauntMenu />,
      },
      {
        path: "/functionProfile",
        element: <ProfileFunction />,
      },
    ],
  },
]);

const element = ReactDOM.createRoot(document.getElementById("demo"));
element.render(<RouterProvider router={Applayout} />);
