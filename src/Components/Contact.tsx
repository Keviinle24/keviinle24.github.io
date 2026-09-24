import '../Styles/Contact.css';
import navIcon1 from '../Assets/Images/nav-icon1.svg';
import githubIcon from '../Assets/Images/github.svg';
import navIcon3 from '../Assets/Images/nav-icon3.svg';
import DownloadIcon from '../Assets/Images/download-svgrepo-com.svg';

export default function Contact() {
  return (
    <section id="contact" className="contact page-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="container">
        <div className="glass-card contact-card reveal">
          <h3 className="contact-heading">Let's build something <span className="gradient-text">together.</span></h3>
          <p className="contact-text">I'm available starting May 2027 and always happy to chat about new opportunities, collaborations, or anything tech. My inbox is always open!</p>

          <div className="contact-actions">
            <a className="contact-button" href="mailto:le.kev@northeastern.edu"><span>Email Me</span></a>
            <a className="contact-button" href="/Downloads/Kevin_Le's_Resume.pdf" download><span>Resume <img className="download-icon" src={DownloadIcon} alt="" /></span></a>
          </div>
          <a className="contact-email" href="mailto:le.kev@northeastern.edu">le.kev@northeastern.edu</a>

          <div className="social-icon">
            <a href="https://www.linkedin.com/in/kevinle24" target="_blank" rel="noreferrer"><img src={navIcon1} alt="linkedin" /></a>
            <a href="https://github.com/Keviinle24" target="_blank" rel="noreferrer"><img src={githubIcon} alt="github" /></a>
            <a href="https://www.instagram.com/kevin.le24/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="instagram" /></a>
          </div>
        </div>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Kevin Le · Boston, MA
      </footer>
    </section>
  )
}
