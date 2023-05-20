import MG from "../assets/mardi-gras.jpeg";

export default function About() {
  return (
    <div className="container">
      <div class="col-6">
        <img src={MG} alt="Mardi Gras" className="about" />
      </div>
      <div class="col-6 text-left">
        <h2>Get to know the real me.</h2>
        <p>
          A curious learner and passionate creator sharing my journey with the
          world. Using my skills and passions to make a positive impact and
          empower others to do the same.
        </p>

        <h3>Software Engineer</h3>
        <p>
          As a web developer with 2 years of experience, I have a strong
          foundation in HTML, CSS, and JavaScript. I am also skilled in other
          relevant technologies, such as AWS, Git/Github, Figma, as well as
          responsive design with Bootstrap and front-end frameworks.
        </p>

        <h3>A Florida Original Since 1990</h3>
        <p>
          I have had the opportunity to work on a diverse range of projects,
          from small business websites to large-scale web applications. I am
          highly collaborative and enjoy working with a team, but am also
          comfortable taking on individual projects and seeing them through to
          completion.
        </p>

        <h3>Non-Profit</h3>
        <small>Worked/volunteered with Young Life for 10 years</small>
        <p>
          In addition to my technical skills, I have excellent problem-solving
          and communication skills, which have proven to be valuable assets in
          my career as a web developer.
        </p>

        <h3>Certifications</h3>
        <ul>
          <li>Meta Front End Developer</li>
          <li>freeCodeCamp Responsive Web Design</li>
          <li>Microsoft 365 Fundamentals</li>
          <li>CompTIA A+</li>
        </ul>

        <a
          href="https://www.linkedin.com/in/andrew-virts/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
