import Bit16Coder from "../assets/83fc.jpg";
import Bit16Fellowship from "../assets/fotr16.jpg";
import Bit16Window from "../assets/16rr.jpg";
import Bit16Onyxia from "../assets/16ony.jpg";
import Bit16Hack from "../assets/hx16.jpg";
import Bit16Calculator from "../assets/calc16.jpg";

export default function Projects() {
  return (
    <div className="container">
      <h2 className="text-center">Projects</h2>

      <div class="card">
        <div class="card-body">
          <img src={Bit16Coder} className="proj" />
          <div className="w-500 text-left">
            <h3 class="card-title">Virts.dev</h3>
            <p class="card-text">
              This website is built in React and deployed to Vercel using the
              Vercel CLI.
            </p>
          </div>
          <div>
            <a className="d-block" href="#">
              Live
            </a>
            <a
              className="d-block"
              href="https://github.com/asvirts/portfolioWebsite"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <img src={Bit16Window} className="proj" />
          <div className="w-500 text-left">
            <h3 class="card-title">R&R Window Tinting</h3>
            <p class="card-text">
              A website I built for a client that involved SEO work as well as
              lead generation.
            </p>
          </div>
          <div>
            <a
              className="d-block"
              href="https://rrwindowtinting.com"
              target="_blank"
            >
              Live
            </a>
            <a
              className="d-block"
              href="https://github.com/asvirts/r-and-r"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <img src={Bit16Fellowship} className="proj" />
          <div className="w-500 text-left">
            {" "}
            <h3 class="card-title">Lord of the Rings</h3>
            <p class="card-text">
              Built with React, this website explores the lore of J.R.R.
              Tolkien's Middle-earth.
            </p>
          </div>
          <div>
            <a
              className="d-block"
              href="https://lotr-lore.vercel.app/"
              target="_blank"
            >
              Live
            </a>
            <a
              className="d-block"
              href="https://github.com/asvirts/lotr-lore"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <img src={Bit16Onyxia} className="proj" />
          <div className="w-500 text-left">
            {" "}
            <h3 class="card-title">Onyxia's Lair</h3>
            <p class="card-text">
              This is a text-based JavaScript game that I developed as a solo
              project. Can YOU defeat Onyxia?
            </p>
          </div>
          <div>
            <a
              className="d-block"
              href="https://asvirts.github.io/onyxias-lair"
              target="_blank"
            >
              Live
            </a>
            <a
              className="d-block"
              href="https://github.com/asvirts/onyxias-lair"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <img src={Bit16Hack} className="proj" />
          <div className="w-500 text-left">
            <h3 class="card-title">Password Generator</h3>
            <p class="card-text">
              Never use an insecure password again. Automatically generates a
              secure password.
            </p>
          </div>
          <div>
            <a
              className="d-block"
              href="https://asvirts.github.io/password-generator/"
              target="_blank"
            >
              Live
            </a>
            <a
              className="d-block"
              href="https://github.com/asvirts/password-generator"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <img src={Bit16Calculator} className="proj" />
          <div className="w-500 text-left">
            <h3 class="card-title">React Calculator App</h3>
            <p class="card-text">
              A calculator app built with React. This was a fun project that
              challenged me to think outside the box.
            </p>
          </div>
          <div>
            <a
              className="d-block"
              href="https://github.com/asvirts/React-Calculator-App"
              target="_blank"
            >
              Live
            </a>
            <a
              className="d-block"
              href="https://github.com/asvirts/React-Calculator-App"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
