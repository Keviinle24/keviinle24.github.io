import './App.css';
import { NavBar } from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
function App() {
 
  return (
 
    <div className="App" >
  <NavBar/>
  <HomePage/>
  <About/>
  <Experience/>
  <Skills/>
  <Contact/>

    </div>
   
  );
}

export default App;
