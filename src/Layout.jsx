import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/home/Navbar";
// Layout component
export const Layout = () => {
  return (
    <div>
      <header>
        <nav><Navbar/></nav>
      </header>
      <main>
        <Outlet /> {/* Renders child routes here */}
      </main>
      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
};
