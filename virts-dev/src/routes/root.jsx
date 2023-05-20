import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import About from "./about";
import "../index.css";

export async function loader() {
  const about = await About();
  return { about };
}

export default function Root() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <nav className="navbar">
        <div className="logo-sec">
          <img src="./a-logo.png" alt="logo" className="logo" />
          <h1 className="logo-name">Andrew Virts</h1>
        </div>
        <div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            Current theme: {theme}
          </button>
        </div>
      </nav>

      <main className="container"></main>

      <Outlet />
    </div>
  );
}
