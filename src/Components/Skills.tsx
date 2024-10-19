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
import Curve from '../Assets/Images/curve.png';
import CamRa from '../Assets/Images/CamRa.png';
import FlowFitness from '../Assets/Images/flowfitness.png';
import HarmonyNotes from '../Assets/Images/harmonynotes.png';
import BlackUnity from '../Assets/Images/unity.png'
import StoryHunters from '../Assets/Images/storyhunters.png';

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
    <img className='icon' src = {Javascript} alt=''/>
    </div>
    <div className="col">
    <img className='icon' src = {HTML} alt=''/>
    </div>
    <div className="col">
    <img className='icon' src = {CSS} alt=''/>
    </div>
    <div className="col">
    <img className='icon' src = {Java} alt=''/>
    </div>
  </div>
  <div className="row">
    <div className="col">
    OS:
    </div>
    <div className="col">
    <img className='icon' src = {Windows} alt=''/>
    </div>
    <div className="col">
    <img className='icon' src = {MacOS} alt=''/>
    </div>
  </div>
  <div className="row">
    <div className="col">
    Tools:
    </div>
    <div className="col">
    <img className ='icon' src ={React} alt=''/>
    </div>
    <div className="col">
    <img className='icon' src={Node} alt=''/>
    </div>
    <div className="col">
    <img className='icon' src={Unity} alt=''/>
    </div>
    <div className="col">
    <img className='icon' src={Figma} alt=''/>
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
     <img className='cover' src = {Curve} alt=''/>
  <div className="card-body">
    <h5 className="card-title">Curve</h5>
    <p className="card-text">Curve is an AI-powered app that personalizes learning, generating a custom plan, including assessment questions, a condensed "textbook," and practice steps, for users to master new skills.</p>
    <a href="https://devpost.com/software/curve-a5wcku?ref_content=contribution-prompt&ref_feature=engagement&ref_medium=email&utm_campaign=contribution-prompt&utm_content=contribution_reminder&utm_medium=email&utm_source=transactional#app-team" className="btn btn-primary"  target="_blank" rel="noreferrer">See more</a>
  </div>
  </div>
</div>

<div className="col">
<div className="card" style={{width: '22rem'}}>
     <img className='cover' src = {CamRa} alt=''/>
  <div className="card-body">
    <h5 className="card-title">CamRa</h5>
    <p className="card-text">CamRa is an exclusive video networking service designed specifically for college students, offering a unique platform to connect and engage with peers from their university and many others across the globe.</p>
    <a href="https://main--officialcamra.netlify.app/login" className="btn btn-primary" target="_blank" rel="noreferrer">See more</a>
  </div>
</div></div>


<div className="col">
<div className="card" style={{width: '22rem'}}>
     <img className='cover' src = {FlowFitness} alt=''/>
  <div className="card-body">
    <h5 className="card-title">Flow Fitness</h5>
    <p className="card-text">Worked closely with professionals to develop a mobile app and website prototype in Figma that incorporates design changes and many other new features, enhancing overall usability and gym experience for potential users.</p>
    <a href="https://www.canva.com/design/DAGMYYVUJ50/-KpHykuzNtXSTHLW2oTnow/view?utm_content=DAGMYYVUJ50&utm_campaign=designshare&utm_medium=link&utm_source=editor" className="btn btn-primary" target="_blank" rel="noreferrer">See more</a>
  </div>
</div></div></div> 

<div className="row row2">
    
<div className="col">
<div className="card" style={{width: '22rem'}}>
     <img className='cover' src = {HarmonyNotes} alt=''/>
  <div className="card-body">
    <h5 className="card-title">Harmony Notes</h5>
    <p className="card-text">Harmony Notes is 2D musical puzzle platformer made in Unity, designed with a focus on storytelling and visuals. Players take control of a whole note, navigating through music-themed levels and solving puzzles to progress. </p>
    <a href="https://www.youtube.com/watch?v=NnzSG0QC4ck" className="btn btn-primary" target="_blank" rel="noreferrer">See more</a>
  </div>
</div></div>


<div className="col">
<div className="card" style={{width: '22rem'}}>
     <img className='cover' src = {BlackUnity} alt =''/>
  <div className="card-body">
    <h5 className="card-title">Cyber-Shooter</h5>
    <p className="card-text">Cyber-Shooter is a 2D shooter game set in a cyber apocalyptic world powered by GameMaker, drawing inspiration from the popular video game “Call of Duty: Zombies”.<br/><br/></p>
    <a href="https://keviinle24.itch.io/cyber-shooter" className="btn btn-primary" target="_blank" rel="noreferrer">See more</a>
  </div></div></div>

  <div className="col">
<div className="card" style={{width: '22rem'}}>
     <img className='cover' src = {StoryHunters} alt=''/>
  <div className="card-body">
    <h5 className="card-title">Story-Hunters</h5>
    <p className="card-text">Story-Hunters is an app that allows users to share book reviews, recommend books, display the books they've read, and connect with fellow readers. The app also maps the little libraries around Boston.</p>
    <a href="https://www.figma.com/deck/VlhqU4W85eJaNf29Gymejp/Story-Hunter-Slides?node-id=4-21&t=DVApIrwfxTCqZYuE-1" className="btn btn-primary" target="_blank" rel="noreferrer">See more</a>
  </div></div></div>
  </div>
</div>
</div>
</div>

</div>
</div>
    )
}