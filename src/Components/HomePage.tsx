import '../Styles/HomePage.css';
import Headshot from '../Assets/Images/Untitled-1-Recovered_2.png';
import navIcon1 from '../Assets/Images/nav-icon1.svg';
import navIcon2 from '../Assets/Images/nav-icon2.svg';
import navIcon3 from '../Assets/Images/nav-icon3.svg';
 

export default function HomePage() {
    return (
      
        <div className='parent'>
          <img id ='headshot' src={Headshot} alt=""/>

             <div className="name">Hi, It's&nbsp;<span className='kevin'>Kevin!</span></div><span className='roles'>I'm a&nbsp;<span></span></span>
        
             <div className='caption'>As a student at Northeastern University pursuing a bachelor's degree in computer science, I am passionate about leveraging my technical knowledge to drive positive change in the tech industry. My interests lies in web and app development and I aspire to be a frontend or full stack developer. </div>

             <span className="connect" ><button className="vvd" ><span>Lets connect!</span></button>      
             <div className="social-icon" style={{paddingLeft: 10}}>
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>            
           </span>  
    
        
        </div>
    )
}