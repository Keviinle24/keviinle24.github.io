
// @ts-ignore CSS files are handled by the bundler and do not have TypeScript declarations.
import '../Styles/HomePage.css';
import Headshot from '../Assets/Images/headshot.png';
import navIcon1 from '../Assets/Images/nav-icon1.svg';
import githubIcon from '../Assets/Images/github.svg';
import navIcon3 from '../Assets/Images/nav-icon3.svg';
 

export default function HomePage() {
    return (
      
        <div className='parent' id='home'>
          <img id ='headshot' src={Headshot} alt="Kevin Le"/>

             <div className="name">Hi, It's&nbsp;<span className='kevin'>Kevin!</span></div><span className='roles'>I'm a&nbsp;<span></span></span>
        
             <div className='availability'><span className='availability-dot'></span>Available May 2027 · Boston, MA</div>

             <div className='caption'>As a student at Northeastern University pursuing a bachelor's degree in computer science, I am passionate about leveraging my technical knowledge to drive positive change in the tech industry. I'm currently a Geospatial Analyst & Web Application Developer on a federally funded research project, building data pipelines and full-stack web apps. My interests lie in web and app development, and I aspire to be a frontend or full-stack developer.</div>

             <span className="connect" ><a href="https://www.linkedin.com/in/kevinle24"  target="_blank" rel="noreferrer"><button className="vvd" ><span>Let's connect!</span></button>      </a>
             <div className="social-icon" style={{paddingLeft: 10}}>
                <a href="https://www.linkedin.com/in/kevinle24"  target="_blank" rel="noreferrer"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://github.com/Keviinle24"  target="_blank" rel="noreferrer"><img src={githubIcon} alt="github" /></a>
                <a href="https://www.instagram.com/kevin.le24/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="instagram" /></a>
              </div>            
           </span>  
    
        
        </div>
    )
}