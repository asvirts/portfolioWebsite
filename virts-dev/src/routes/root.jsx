import React, { useState } from 'react'
import {Outlet, Link} from "react-router-dom"
import About from "./about"
import "../index.css"

export async function loader() {
  const about = await About()
  return {about}
}

export default function Root() {
    const [theme, setTheme] = useState('light');

    return (
        <div className={theme}>
          <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='projects'>Projects</Link></li>
            <button onClick={() => setTheme(
              theme === 'light' ? 'dark' : 'light'
            )}>
              Current theme: {theme}
            </button>
          </nav>

          <h1>Software Engineer</h1>

          <div id="detail">
            <Outlet />
          </div>
        </div>
      );
  }