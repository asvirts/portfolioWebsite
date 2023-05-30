export default function Project(src, title, desc, live, github) {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <img src={src} className="proj" />
          <div className="w-500 text-left">
            <h3 class="card-title">{title}</h3>
            <p class="card-text">{desc}</p>
          </div>
          <div>
            <a className="d-block" href={live}>
              Live
            </a>
            <a className="d-block" href={github} target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
