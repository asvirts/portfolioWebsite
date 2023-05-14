import {Outlet, Link, useLoaderData} from "react-router-dom"
import About from "./about"

export async function loader() {
  const about = await About()
  return {about}
}

export default function Root() {
    const {about} = useLoaderData()
    return (
        <>
          <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to={'about'}>About</Link></li>
          </nav>
          <h1>Software Engineer</h1>
          <div id="detail">
            <Outlet />
          </div>
        </>
      );
  }