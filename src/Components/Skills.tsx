import '../Styles/Skills.css';
import Javascript from '../Assets/Images/js.png';
import HTML from '../Assets/Images/html-5-2.png';
import CSS from '../Assets/Images/css-3-2.png';
import Java from '../Assets/Images/java.png';
import Swift from '../Assets/Images/swift.png';
import Windows from '../Assets/Images/windows.png';
import MacOS from '../Assets/Images/apple-6.png';
import React from '../Assets/Images/atom.png';
import Node from '../Assets/Images/nodejs.png';
import Unity from '../Assets/Images/unity-2.png';
import Figma from '../Assets/Images/figma.png';
import GitHub from '../Assets/Images/github.svg';
import Curve from '../Assets/Images/curve.png';
import CamRa from '../Assets/Images/CamRa.png';
import FlowFitness from '../Assets/Images/flowfitness.png';
import HarmonyNotes from '../Assets/Images/harmonynotes.png';
import CyberShooter from '../Assets/Images/Cyber-Shooter.png';
import StoryHunters from '../Assets/Images/storyhunters.png';

// The rest of the skills from my resume, shown as tags under each row of icons.
const moreLanguages = ['Kotlin', 'C', 'SQL', 'Python'];
const moreOS = ['Apple iOS'];
const moreTools = ['React Native', 'Netlify', 'Render', 'Expo', 'Xcode', 'MongoDB', 'WordPress', 'MS Office 365', 'MS Excel', 'Unit Testing', 'VS Code', 'IntelliJ'];

export default function Skills() {
    return (
        <div className='body'> 
            <div className='skills' id='skills'>Skills</div>
           <div className="table-responsive">
           <div className="container">
  <div className="row">
    <div className="col">
    Languages: 
    </div>
    <div className="col">
    <img className='icon' src = {Javascript} alt='JavaScript'/>
    </div>
    <div className="col">
    <img className='icon' src = {HTML} alt='HTML'/>
    </div>
    <div className="col">
    <img className='icon' src = {CSS} alt='CSS'/>
    </div>
    <div className="col">
    <img className='icon' src = {Java} alt='Java'/>
    </div>
    <div className="col">
    <img className='icon' src = {Swift} alt='Swift'/>
    </div>
    <div className="col-12 col-sm-10 offset-sm-2 skill-tags">
    {moreLanguages.map((skill) => <span className='tag' key={skill}>{skill}</span>)}
    </div>
  </div>
  <div className="row">
    <div className="col">
    OS:
    </div>
    <div className="col">
    <img className='icon' src = {Windows} alt='Windows'/>
    </div>
    <div className="col">
    <img className='icon' src = {MacOS} alt='MacOS'/>
    </div>
    <div className="col-12 col-sm-8 offset-sm-4 skill-tags">
    {moreOS.map((skill) => <span className='tag' key={skill}>{skill}</span>)}
    </div>
  </div>
  <div className="row">
    <div className="col">
    Tools:
    </div>
    <div className="col">
    <img className ='icon' src ={React} alt='React.js'/>
    </div>
    <div className="col">
    <img className='icon' src={Node} alt='Node.js'/>
    </div>
    <div className="col">
    <img className='icon' src={Unity} alt='Unity'/>
    </div>
    <div className="col">
    <img className='icon' src={Figma} alt='Figma'/>
    </div>
    <div className="col">
    <img className='icon' src={GitHub} alt='GitHub'/>
    </div>
    <div className="col-12 col-sm-10 offset-sm-2 skill-tags">
    {moreTools.map((skill) => <span className='tag' key={skill}>{skill}</span>)}
    </div>
  </div>
  
</div>
  
<div className='projects' id='projects'>Projects</div>
<div className='project-cards'>
<div className="table-responsive">
<div className="container">

<div className="row row2">
<div className="col">
<div className="card project-card reveal" style={{width: '22rem'}}>
  <span className="card-badge">★ 1st Place · PawHacks</span>
     <img className='cover' src = {Curve} alt='Curve logo'/>
  <div className="card-body">
    <h5 className="card-title">Curve</h5>
    <p className="card-meta">Frontend Developer & Designer<span className="card-date">Mar 2024 – Aug 2024</span></p>
    <p className="card-text">Curve is an AI-powered app that personalizes learning, generating a custom plan, including assessment questions, a condensed "textbook," and practice steps, for users to master new skills.</p>
    <div className="card-tags"><span>React Native</span><span>LangChain</span><span>Expo</span><span>Figma</span></div>
    <a href="https://devpost.com/software/curve-a5wcku?ref_content=contribution-prompt&ref_feature=engagement&ref_medium=email&utm_campaign=contribution-prompt&utm_content=contribution_reminder&utm_medium=email&utm_source=transactional#app-team" className="btn btn-primary"  target="_blank" rel="noreferrer">See more</a>
  </div>
  </div>
</div>

<div className="col">
<div className="card project-card reveal" style={{width: '22rem'}}>
  <span className="card-badge">★ Funded · Husky Startup Challenge</span>
     <img className='cover' src = {CamRa} alt='CamRa logo'/>
  <div className="card-body">
    <h5 className="card-title">CamRa</h5>
    <p className="card-meta">Frontend Developer<span className="card-date">Mar 2024 – Dec 2024</span></p>
    <p className="card-text">CamRa is an exclusive video networking service designed specifically for college students, offering a unique platform to connect and engage with peers from their university and many others across the globe.</p>
    <div className="card-tags"><span>React.js</span><span>UI Design</span></div>
    <a href="https://main--officialcamra.netlify.app" className="btn btn-primary" target="_blank" rel="noreferrer">See more</a>
  </div>
</div></div>


<div className="col">
<div className="card project-card reveal" style={{width: '22rem'}}>
     <img className='cover' src = {FlowFitness} alt='Flow Fitness logo'/>
  <div className="card-body">
    <h5 className="card-title">Flow Fitness</h5>
    <p className="card-meta">Frontend Designer<span className="card-date">Jun 2024 – Aug 2024</span></p>
    <p className="card-text">Worked closely with professionals to develop a mobile app and website prototype in Figma that incorporates design changes and many other new features, enhancing overall usability and gym experience for potential users.</p>
    <div className="card-tags"><span>Figma</span><span>UX Design</span></div>
    <a href="https://www.canva.com/design/DAGMYYVUJ50/-KpHykuzNtXSTHLW2oTnow/view?utm_content=DAGMYYVUJ50&utm_campaign=designshare&utm_medium=link&utm_source=editor" className="btn btn-primary" target="_blank" rel="noreferrer">See more</a>
  </div>
</div></div></div> 

<div className="row row2">
    
<div className="col">
<div className="card project-card reveal" style={{width: '22rem'}}>
  <span className="card-badge">★ Gameheads Showcase</span>
     <img className='cover' src = {HarmonyNotes} alt='Harmony Notes cover art'/>
  <div className="card-body">
    <h5 className="card-title">Harmony Notes</h5>
    <p className="card-meta">Game Developer<span className="card-date">Gameheads</span></p>
    <p className="card-text">Harmony Notes is 2D musical puzzle platformer made in Unity, designed with a focus on storytelling and visuals. Players take control of a whole note, navigating through music-themed levels and solving puzzles to progress. </p>
    <div className="card-tags"><span>Unity</span><span>Game Design</span></div>
    <a href="https://www.youtube.com/watch?v=NnzSG0QC4ck" className="btn btn-primary" target="_blank" rel="noreferrer">See more</a>
  </div>
</div></div>


<div className="col">
<div className="card project-card reveal" style={{width: '22rem'}}>
     <img className='cover' src = {CyberShooter} alt ='Cyber-Shooter game art' style={{imageRendering: 'pixelated'}}/>
  <div className="card-body">
    <h5 className="card-title">Cyber-Shooter</h5>
    <p className="card-text">Cyber-Shooter is a 2D shooter game set in a cyber apocalyptic world powered by GameMaker, drawing inspiration from the popular video game “Call of Duty: Zombies”.</p>
    <div className="card-tags"><span>GameMaker</span></div>
    <a href="https://keviinle24.itch.io/cyber-shooter" className="btn btn-primary" target="_blank" rel="noreferrer">See more</a>
  </div></div></div>

  <div className="col">
<div className="card project-card reveal" style={{width: '22rem'}}>
     <img className='cover' src = {StoryHunters} alt='Story-Hunters logo'/>
  <div className="card-body">
    <h5 className="card-title">Story-Hunters</h5>
    <p className="card-meta">CS4520 Mobile Application Development<span className="card-date">Group final project</span></p>
    <p className="card-text">Story-Hunters is an app that allows users to share book reviews, recommend books, display the books they've read, and connect with fellow readers. The app also maps the little libraries around Boston.</p>
    <div className="card-tags"><span>Swift</span><span>iOS</span><span>Firebase</span><span>MapKit</span></div>
    <div className="card-links">
    <a href="https://youtu.be/fKMSjQes1gE" className="btn btn-primary" target="_blank" rel="noreferrer">See more</a>
    <a href="https://github.com/dgadsden/StoryHunters" className="btn btn-dark" target="_blank" rel="noreferrer"><img src={GitHub} alt=''/>GitHub</a>
    </div>
  </div></div></div>
  </div>
</div>
</div>
</div>

</div>
</div>
    )
}