import React from "react";
import { Outlet, Link } from "react-router-dom";
import About from "./about";
import "../index.css";

export async function loader() {
  const about = await About();
  return { about };
}

export default function Root() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-sec">
          <img src="./a-logo.png" alt="logo" className="logo" />
          <h1 className="logo-name">Andrew Virts</h1>
        </div>
        <div>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/andrewvirts" target="_blank">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link to="https://github.com/asvirts" target="_blank">
              GitHub
            </Link>
          </li>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
