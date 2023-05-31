import { Link } from "react-router-dom";

import IrishCastle1 from "../assets/ai-art/de3e-4d3b.jpg";
import IrishCastle2 from "../assets/ai-art/8520-498c.jpg";
import IrishCastle3 from "../assets/ai-art/373f-410b.jpg";

import Horse1 from "../assets/ai-art/5a48-444d.jpg";
import Horse2 from "../assets/ai-art/9c46-448e.jpg";
import Horse3 from "../assets/ai-art/cea0-40b9.jpg";

import Gator1 from "../assets/ai-art/575a-4297.jpg";
import Gator2 from "../assets/ai-art/0ba6-44fa.jpg";
import Gator3 from "../assets/ai-art/5fb1-4148.jpg";

export default function Art() {
  return (
    <div className="container my">
      <h2 className="tight flex text-center my-0 mx-0">
        A keen student and imaginative inventor.
      </h2>
      <div className="flex gap">
        <Link to="/projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="16"
            width="16"
          >
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
          </svg>
        </Link>
        <Link to="/projects">
          <p className="tight text-center">Learn more about my projects</p>
        </Link>
      </div>

      <img src={IrishCastle1} alt="Irish Castle" className="ai my" />
      <img src={IrishCastle2} alt="Irish Castle" className="ai my" />
      <img src={IrishCastle3} alt="Irish Castle" className="ai my" />

      <img src={Horse1} alt="Horse" className="ai my" />
      <img src={Horse2} alt="Horse" className="ai my" />
      <img src={Horse3} alt="Horse" className="ai my" />

      <img src={Gator1} alt="Gator and a bird" className="ai my" />
      <img src={Gator2} alt="Gator and a bird" className="ai my" />
      <img src={Gator3} alt="Gator and a bird" className="ai my" />
    </div>
  );
}
