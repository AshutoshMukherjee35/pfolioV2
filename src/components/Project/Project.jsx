import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import { motion } from "framer-motion";
import projects from "./projects";

const flipInX = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: (custom) => ({
    opacity: 1,
    rotateX: 0,
    transition: { delay: custom * 0.1, duration: 0.6 }
  })
};

function ProjectItem({ title, description, githubUrl, liveUrl, techStack, index }) {
  return (
    <motion.div
      className="project"
      variants={flipInX}
      initial="hidden"
      animate="visible"
      custom={index}
    >
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
          {techStack.map((tech, idx) => <li key={idx}>{tech}</li>)}
        </ul>
      </footer>
    </motion.div>
  );
}

export function Project() {
  return (
    <Container id="project">
      <h2>My Work</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectItem key={index} index={index} {...project} />
        ))}
      </div>
    </Container>
  );
}
