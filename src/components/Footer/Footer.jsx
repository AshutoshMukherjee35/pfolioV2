import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <Container className="footer">    
        <span>© {currentYear} Ashutosh Mukherjee. All rights reserved.</span>
      <div>
        <p>
          Reach out to me on other social media platforms
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/ashutosh-mukherjee28/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/AshutoshMukherjee35"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/mr_funny_bong/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
