import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import newPI from "../../assets/newPI.png";
import { skills } from "./skillsData";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Hi, I'm Ashutosh, a frontend developer dedicated to creating custom
        online experiences that capture my clients' unique visions. With
        expertise in HTML, CSS, JavaScript, React, and Redux Toolkit, I bring
        high-performance, responsive websites to life with precision and
        creativity.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
          Alongside development, I'm also skilled in CMS platforms like Drupal, enabling my clients to manage and update their websites with ease. Whether it's complex user interfaces or sleek, accessible designs, I deliver tailored solutions that evolve with your needs.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          I'm actively exploring new opportunities to contribute to innovative projects. For a detailed report of my experience and skills, please click the Resume button to view my latest, updated resume. Let’s connect and make your website goals a reality!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {skills.map((skill, index) => (
            <div className="hability" key={index}>
              <ScrollAnimation animateIn="fadeInUp" delay={skill.delay * 1000}>
                <img src={skill.icon} alt={skill.alt} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={newPI} alt="Ashutosh Mukherjee" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
