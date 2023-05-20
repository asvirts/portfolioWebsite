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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
        </div>
      </nav>

      <main className="container">
        <h2>
          A curious learner and passionate creator sharing my journey with the
          world.
        </h2>
        <p>
          I have had the opportunity to work on a diverse range of projects,
          from small business websites to large-scale web applications. I am
          highly collaborative and enjoy working with a team, but am also
          comfortable taking on individual projects and seeing them through to
          completion.
        </p>
      </main>

      <Outlet />
    </div>
  );
}
