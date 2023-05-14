export default function Projects() {
  return (
    <>
      <h2>Projects</h2>

      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Virts.dev</h3>
          <p class="card-text">
            This website is built in React and deployed to Vercel using the
            Vercel CLI.
          </p>
          <a
            href="https://github.com/asvirts/portfolioWebsite"
            class="btn-primary"
            target="_blank"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h3 class="card-title">R&R Window Tinting</h3>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://rrwindowtinting.com"
            class="btn btn-primary"
            target="_blank"
          >
            <button>View Site</button>
          </a>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Card title</h3>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" class="btn btn-primary">
            <button>Go somewhere</button>
          </a>
        </div>
      </div>
    </>
  );
}
