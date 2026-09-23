import { Brand } from './Brand'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons'

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main container">
        <div className="footer-brand">
          <Brand />
          <p>Curated tools, technologies, and resources for developers building modern software.</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><TwitterIcon /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h3>PRODUCT</h3>
            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
          </div>
          <div>
            <h3>COMPANY</h3>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#contact">Careers</a>
          </div>
          <div>
            <h3>LEGAL</h3>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div>
      </div>
    </footer>
  )
}
