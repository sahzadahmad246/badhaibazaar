// src/App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "./components/home/Home";
import { About } from "./components/nav/About";
import Login from "./components/home/Login";
import Signup from "./components/home/Signup";
import Profile from "./components/home/Profile";
import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "react-hot-toast";
// Festivals
import {
  Christmas,
  Diwali,
  DurgaPuja,
  Eid,
  Holi,
  Navratri,
} from "./components/index";
// speacial days
import {
  ChildrensDay,
  FathersDay,
  FriendshipDay,
  MothersDay,
  TeacherDay,
  ValentinesDay,
} from "./components/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      // Routes for festival components here
      {
        path: "festivals/christmas",
        element: <Christmas />,
      },
      {
        path: "festivals/diwali",
        element: <Diwali />,
      },
      {
        path: "festivals/durga-puja",
        element: <DurgaPuja />,
      },
      {
        path: "festivals/eid",
        element: <Eid />,
      },
      {
        path: "festivals/holi",
        element: <Holi />,
      },
      {
        path: "festivals/navratri",
        element: <Navratri />,
      },
      // Routes for special days
      {
        path: "special-days/childrens-day",
        element: <ChildrensDay />,
      },
      {
        path: "special-days/fathers-day",
        element: <FathersDay />,
      },
      {
        path: "special-days/friendship-day",
        element: <FriendshipDay />,
      },
      {
        path: "special-days/mothers-day",
        element: <MothersDay />,
      },
      {
        path: "special-days/teachers-day",
        element: <TeacherDay />,
      },
      {
        path: "special-days/valentines-day",
        element: <ValentinesDay />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
      <Toaster />
    </Provider>
  );
}

export default App;
