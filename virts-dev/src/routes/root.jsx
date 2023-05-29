import React from "react";
import { Outlet, Link } from "react-router-dom";
import About from "./about";
import "../index.css";
import Nav from "../components/Nav";

export async function loader() {
  const about = await About();
  return { about };
}

export default function Root() {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  );
}
