import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import AnimatedText from "./AnimatedText";
import SocialMediaLinks from "./SocialMediaLinks";
import Hello from "../../assets/Hello.gif"

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <AnimatedText delay={0}>
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </AnimatedText>
        <AnimatedText delay={200}>
          <h1>Ashutosh Mukherjee</h1>
        </AnimatedText>
        <AnimatedText delay={400}>
          <h3>Frontend Developer</h3>
        </AnimatedText>
        <AnimatedText delay={600}>
          <p className="small-resume">3 Years of Experience</p>
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
        <ScrollAnimation animateIn="fadeInRight" delay={1000}>
          <img src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
