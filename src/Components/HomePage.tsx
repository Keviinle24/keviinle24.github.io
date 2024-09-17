import '../Styles/HomePage.css';
import Headshot from '../Assets/Images/Untitled-1-Recovered_2.png';
 

export default function HomePage() {
    return (
        <div>
        
             <div className="name">Hi, I'm&nbsp;<span className='roles'>Kevin!</span></div>
             <div className='caption'>As a student at Northeastern University pursuing a bachelor's degree in computer science, I am passionate about leveraging my technical knowledge to drive positive change in the tech industry. My interests lies in web and app development and I aspire to be a frontend or full stack developer.  </div>

             <span className="connect" ><button className="vvd"><span>Lets connect!</span></button>                  <img className='headshot' src={Headshot} alt=""/></span>  
    

        </div>
    )
}