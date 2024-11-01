import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import projects from "./projects";

function ProjectItem({ title, description, githubUrl, liveUrl, techStack }) {
  return (
    <ScrollAnimation animateIn="flipInX">
      <div className="project">
        <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <title>Folder</title>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <div className="project-links">
            {githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer"><img src={githubIcon} alt="GitHub link" /></a>}
            {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer"><img src={externalLink} alt="Live link" /></a>}
          </div>
        </header>
        <div className="body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <footer>
          <ul className="tech-list">
            {techStack.map((tech, index) => <li key={index}>{tech}</li>)}
          </ul>
        </footer>
      </div>
    </ScrollAnimation>
  );
}

export function Project() {
  return (
    <Container id="project">
      <h2>My Work</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </Container>
  );
}
