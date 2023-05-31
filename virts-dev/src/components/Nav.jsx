import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="logo-sec">
          <img src="./a-logo.png" alt="logo" className="logo" />
          <h1 className="logo-name">Andrew Virts</h1>
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
            <Link to="ai-art">AI Art</Link>
          </li>
        </div>
        <div>
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
    </>
  );
}
