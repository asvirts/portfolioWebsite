import { Routes, Route, Link } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'
import About from "./About.js"

export default function Home() {
  return (
    <>
      <nav>
        <Link to="./src/" className="nav-item">Home</Link>
        <Link to="./src/about" className="nav-item">About</Link>
      </nav>
      <Routes>
        <Route path="./src/" element={<Home />}></Route>
        <Route path="./src/about" element={<About />}></Route>
      </Routes>
    </>
  )
}