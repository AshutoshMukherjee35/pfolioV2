import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import { motion } from "framer-motion";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import AnimatedText from "./AnimatedText";
import SocialMediaLinks from "./SocialMediaLinks";
import Hello from "../../assets/Hello.gif";
import { getYearsOfExperience } from "./Utilities/getYearsOfExperience";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5 }
  })
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.1, duration: 0.5 }
  })
};

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <AnimatedText delay={0}>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </motion.p>
        </AnimatedText>
        <AnimatedText delay={200}>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Ashutosh Mukherjee
          </motion.h1>
        </AnimatedText>
        <AnimatedText delay={400}>
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            Frontend Developer
          </motion.h3>
        </AnimatedText>
        <AnimatedText delay={600}>
          <motion.p
            className="small-resume"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={6}
          >
            {getYearsOfExperience()}+ Years of Experience
          </motion.p>
        </AnimatedText>
        <AnimatedText delay={800}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </AnimatedText>
        <AnimatedText delay={1000}>
          <SocialMediaLinks />
        </AnimatedText>
      </div>
      <div className="hero-image">
        <motion.img
          src={Illustration}
          alt="Illustration"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          custom={10}
        />
      </div>
    </Container>
  );
}
