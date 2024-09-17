import '../Styles/Skills.css';
import Javascript from '../Assets/Images/js.png';
import HTML from '../Assets/Images/html-5-2.png';
import CSS from '../Assets/Images/css-3-2.png';
import Java from '../Assets/Images/java.png';
import Windows from '../Assets/Images/windows.png';
import MacOS from '../Assets/Images/apple-6.png';
import React from '../Assets/Images/atom.png';
import Node from '../Assets/Images/nodejs.png';
import Unity from '../Assets/Images/unity-2.png';
import Figma from '../Assets/Images/figma.png';

export default function Skills() {
    return (
        <div> 
            <div className='skills'>Skills</div>


            <div className='languages'>Languages: </div>
            <img className='js' src = {Javascript}/>
            <img className='html' src = {HTML}/>
            <img className='css' src = {CSS}/>
            <img className='java' src = {Java}/>

 <div className='opertaing system '>
            <div className='os'>Operating Systems:</div> 
            <img className='windows' src = {Windows}/>
            <img className='macos' src = {MacOS}/>

            </div>

           <div className='tools'>Tools:</div>
           
           <img className ='react' src ={React}/>
           <img className='node' src={Node}/>
           <img className='unity' src={Unity}/>
           <img className='figma' src={Figma}/>
        
           <div className='projects'>Projects</div>
      

         </div>
    )
}