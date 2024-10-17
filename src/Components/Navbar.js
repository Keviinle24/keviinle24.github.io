import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap"; //Navbar skeleton.
import navIcon1 from '../Assets/Images/nav-icon1.svg';
import navIcon2 from '../Assets/Images/nav-icon2.svg';
import navIcon3 from '../Assets/Images/nav-icon3.svg';
import DownloadIcon from '../Assets/Images/download-svgrepo-com.svg';
// import { HashLink } from 'react-router-hash-link'; //Import a HashLink to create links to sections within the page.
import '../Styles/Navbar.css'
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home'); // Tracks which link is active.
  const [scrolled, setScrolled] = useState(false); // Tracks if the page is scrolled down.

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // If the user scrolls more than 50px, set `scrolled` to true. 
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll); //Listen for when the user scrolls the page. Whenever the user scrolls, it runs the function onScroll.

    return () => window.removeEventListener("scroll", onScroll); // Removes the scroll event listener when the component is no longer in use (e.g., when the user navigates away from the page)
  }, [])// The empty array means this effect only runs once, when the component first loads, rather than running every time something changes.

  const onUpdateActiveLink = (value) => {
    setActiveLink(value); // Update the `activeLink` when a user clicks a navigation link.
  }

  return (
    //If scrolled is true, the class "scrolled" is added to change the Navbar's style when scrolling. 
    //expand="md" means that the navbar will be collapsed (usually shown as a hamburger menu) on small and medium-sized screens, and it will expand into a full navbar on larger screens.
    //Clicking on Links (Home, Skills, Projects) and clicking them updates the activeLink and the navbar-link style.
    <Router>
      
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        
        <Container>
        
          <Navbar.Brand href="/"  >
       
       <div>Kevin.le</div> 
        
          </Navbar.Brand>
          <div id = 'disclaimer'> (DISCLAIMER: Portfolio is working in progress) </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="/" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="/" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text" >
              <div className="social-icon">
              <a href="https://www.linkedin.com/in/kevinle24"  target="_blank" rel="noreferrer" ><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://www.instagram.com/kevin.le24/"  target="_blank" rel="noreferrer" ><img src={navIcon2} alt="facebook" /></a>
                <a href="https://www.instagram.com/kevin.le24/" target="_blank" rel="noreferrer" ><img src={navIcon3} alt="instagram" /></a>
              </div>
              <div className="resume">
        
              <a href="/Downloads/Kevin_Le's_Resume.pdf" download>
  <button className="downloadable">
    <span>Resume <img className="download-icon" src={DownloadIcon} alt="resume" /></span>
  </button>
</a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}