import { Routes, Route, Link } from "react-router-dom"
import Nav from '../components/Nav.js'
import Title from '../components/Title.js'

export default function Home() {
  return (
    <>
      <nav>
        <Title />
        <Nav />
      </nav>
    </>
  )
}
