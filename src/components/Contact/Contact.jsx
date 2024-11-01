import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";


export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to kickstart your project?</p>
        <p>Contact me now for a consultation, and let's explore how I can contribute to your team's success!</p>
      </header>
      <div className="contacts">
        <div className="contact-item">
          <a href="mailto:ashutoshmukherjee35@gmail.com" className="contact-link">
            <img src={emailIcon} alt="Email" />
            <span>ashutoshmukherjee35@gmail.com</span>
          </a>
        </div>
        <div className="contact-item">
          <a href="tel:+919165222429" className="contact-link">
            <img src={phoneIcon} alt="Phone No" />
            <span>(+91) 9165222429</span>
          </a>
        </div>
      </div>
    </Container>
  );
}
