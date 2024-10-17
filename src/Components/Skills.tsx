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
        <div className='body'> 
            <div className='skills'>Skills</div>
           <div className="table-responsive">
           <div className="container">
  <div className="row">
    <div className="col">
    Languages: 
    </div>
    <div className="col">
    <img className='icon' src = {Javascript}/>
    </div>
    <div className="col">
    <img className='icon' src = {HTML}/>
    </div>
    <div className="col">
    <img className='icon' src = {CSS}/>
    </div>
    <div className="col">
    <img className='icon' src = {Java}/>
    </div>
  </div>
  <div className="row">
    <div className="col">
    OS:
    </div>
    <div className="col">
    <img className='icon' src = {Windows}/>
    </div>
    <div className="col">
    <img className='icon' src = {MacOS}/>
    </div>
  </div>
  <div className="row">
    <div className="col">
    Tools:
    </div>
    <div className="col">
    <img className ='icon' src ={React}/>
    </div>
    <div className="col">
    <img className='icon' src={Node}/>
    </div>
    <div className="col">
    <img className='icon' src={Unity}/>
    </div>
    <div className="col">
    <img className='icon' src={Figma}/>
    </div>
  </div>
  
</div>
  
<div className='projects'>Projects</div>
<div className='project-cards'>
<div className="table-responsive">
<div className="container">

<div className="row row2">
<div className="col">
<div className="card" style={{width: '22rem'}}>
     <img className='cover' src = {Javascript}/>
  <div className="card-body">
    <h5 className="card-title">Curve</h5>
    <p className="card-text">Curve is an AI-powered app that personalizes learning, generating a custom plan, including assessment questions, a condensed "textbook," and practice steps, for users to master new skills.</p>
    <a href="#" className="btn btn-primary">See more</a>
  </div>
  </div>
</div>

<div className="col">
<div className="card" style={{width: '22rem'}}>
     <img className='cover' src = {Javascript}/>
  <div className="card-body">
    <h5 className="card-title">CamRa</h5>
    <p className="card-text">CamRa is an exclusive video networking service designed specifically for college students, offering a unique platform to connect and engage with peers from their university and many others across the globe.</p>
    <a href="#" className="btn btn-primary">See more</a>
  </div>
</div></div>


<div className="col">
<div className="card" style={{width: '22rem'}}>
     <img className='cover' src = {Javascript}/>
  <div className="card-body">
    <h5 className="card-title">Flow Fitness</h5>
    <p className="card-text">Worked closely with professionals to develop a mobile app and website prototype in Figma that incorporates design changes and many other new features, enhancing overall usability and gym experience for potential users.</p>
    <a href="#" className="btn btn-primary">See more</a>
  </div>
</div></div></div> 

<div className="row row2">
    
<div className="col">
<div className="card" style={{width: '22rem'}}>
     <img className='cover' src = {Javascript}/>
  <div className="card-body">
    <h5 className="card-title">Harmony Notes</h5>
    <p className="card-text">Harmony Notes is 2D musical puzzle platformer made in Unity, designed with a focus on storytelling and visuals. Players take control of a whole note, navigating through music-themed levels and solving puzzles to progress. </p>
    <a href="#" className="btn btn-primary">See more</a>
  </div>
</div></div>


<div className="col">
<div className="card" style={{width: '22rem'}}>
     <img className='cover' src = {Javascript}/>
  <div className="card-body">
    <h5 className="card-title">Cyber-Shooter</h5>
    <p className="card-text">Cyber-Shooter is a 2D shooter game set in a cyber apocalyptic world powered by GameMaker, drawing inspiration from the popular video game “Call of Duty: Zombies”.<br/><br/></p>
    <a href="#" className="btn btn-primary">See more</a>
  </div></div></div>

  <div className="col">
<div className="card" style={{width: '22rem'}}>
     <img className='cover' src = {Javascript}/>
  <div className="card-body">
    <h5 className="card-title">Story-Hunters</h5>
    <p className="card-text">Story-Hunters is an app that allows users to share book reviews, recommend books, display the books they've read, and connect with fellow readers. The app also maps the little libraries around Boston.</p>
    <a href="#" className="btn btn-primary">See more</a>
  </div></div></div>
  </div>
</div>
</div>
</div>

</div>
</div>
    )
}