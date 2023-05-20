import DoSomethingGreat from "../assets/clark-tibbs-unsplash.jpg";

export default function Home() {
  return (
    <div className="container">
      <div className="col-6">
        <h2>
          A curious learner and passionate creator sharing my journey with the
          world.
        </h2>
        <p>
          I have had the opportunity to work on a diverse range of projects,
          from small business websites to large-scale web applications. I am
          highly collaborative and enjoy working with a team, but am also
          comfortable taking on individual projects and seeing them through to
          completion.
        </p>
      </div>
      <div className="col-6">
        <img
          src={DoSomethingGreat}
          alt="Do Something Great"
          className="home-intro"
        />
      </div>
    </div>
  );
}
