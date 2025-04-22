import { Container } from "./styles";
import { motion } from "framer-motion";
import newPI from "../../assets/newPI.png";
import { skills } from "./skillsData";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.1, duration: 0.5 }
  })
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5 }
  })
};

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <motion.h2
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          About me
        </motion.h2>
        <motion.p
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Hi, I’m Ashutosh — a passionate frontend developer committed to crafting exceptional digital experiences that bring unique visions to life. With a strong foundation in HTML, CSS, JavaScript, React, and Redux Toolkit, I specialize in building high-performance, responsive websites that blend precision, creativity, and functionality.<br/><br/>

          In addition to frontend development, I have hands-on expertise in CMS platforms like Drupal, enabling clients to easily manage and scale their websites. Whether it's designing intuitive user interfaces or developing sleek, accessible layouts, I focus on delivering custom solutions that evolve with your business needs.

          I'm currently open to exciting new opportunities where I can contribute to innovative and impactful projects. If you’re looking for a developer who brings both technical excellence and creative energy to the table — let’s connect!
        </motion.p>
        <motion.p
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          Alongside development, I'm also skilled in CMS platforms like Drupal, enabling my clients to manage and update their websites with ease. Whether it's complex user interfaces or sleek, accessible designs, I deliver tailored solutions that evolve with your needs.
        </motion.p>
        <motion.p
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          I'm actively exploring new opportunities to contribute to innovative projects. For a detailed report of my experience and skills, please click the Resume button to view my latest, updated resume. Let’s connect and make your website goals a reality!
        </motion.p>
        <motion.h3
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          Here are my main skills:
        </motion.h3>
        <div className="hard-skills">
          {skills.map((skill, index) => (
            <motion.div
              className="hability"
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={skill.delay * 10}
            >
              <img src={skill.icon} alt={skill.alt} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <motion.img
          src={newPI}
          alt="Ashutosh Mukherjee"
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          custom={2}
        />
      </div>
    </Container>
  );
}
