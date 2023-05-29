export default function Projects() {
  return (
    <>
      <h2 className="text-center">Projects</h2>

      <div class="card">
        <div class="card-body">
          <div>
            <h3 class="card-title">Virts.dev</h3>
            <p class="card-text">
              This website is built in React and deployed to Vercel using the
              Vercel CLI.
            </p>
          </div>
          <div className="flex">
            <a href="#">View Live Site</a>
            <a
              href="https://github.com/asvirts/portfolioWebsite"
              target="_blank"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h3 class="card-title">R&R Window Tinting</h3>
          <p class="card-text">
            A website I built for a client that involved SEO work as well as
            lead generation.
          </p>
          <div className="flex">
            <a href="https://rrwindowtinting.com" target="_blank">
              View Live Site
            </a>
            <a href="https://github.com/asvirts/r-and-r" target="_blank">
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Lord of the Rings</h3>
          <p class="card-text">
            Built with React, this website explores the lore of J.R.R. Tolkien's
            Middle-earth.
          </p>
          <div className="flex">
            <a href="https://lotr-lore.vercel.app/" target="_blank">
              View Live Site
            </a>
            <a href="https://github.com/asvirts/lotr-lore" target="_blank">
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Onyxia's Lair</h3>
          <p class="card-text">
            This is a text-based JavaScript game that I developed as a solo
            project. Can YOU defeat Onyxia?
          </p>
          <div className="flex">
            <a href="https://asvirts.github.io/onyxias-lair" target="_blank">
              View Live Site
            </a>
            <a href="https://github.com/asvirts/onyxias-lair" target="_blank">
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Password Generator</h3>
          <p class="card-text">
            Never use an insecure password again. Automatically generates a
            secure password.
          </p>
          <div className="flex">
            <a
              href="https://asvirts.github.io/password-generator/"
              target="_blank"
            >
              View Live Site
            </a>
            <a
              href="https://github.com/asvirts/password-generator"
              target="_blank"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h3 class="card-title">React Calculator App</h3>
          <p class="card-text">
            A calculator app built with React. This was a fun project that
            challenged me to think outside the box.
          </p>
          <div>
            <a
              href="https://github.com/asvirts/React-Calculator-App"
              target="_blank"
            >
              View Live Site
            </a>
            <a
              href="https://github.com/asvirts/React-Calculator-App"
              target="_blank"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
