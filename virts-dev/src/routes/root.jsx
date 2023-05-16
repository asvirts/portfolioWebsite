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
        <div>
          <img src="./a-logo.png" alt="logo" className="logo" />
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

      <main className="container">
        <div className="col-6">
          <h1>Andrew Virts</h1>
        </div>
        <div className="col-6">
          <p className="text-left">
            A passionate and dedicated software engineer specializing in
            creating cutting-edge solutions for today's digital landscape. I
            have honed my skills in developing robust and scalable web
            applications.
          </p>
        </div>
      </main>

      <Outlet />
    </div>
  );
}
