import './App.css';
import { NavBar } from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage';
import Skills from './Components/Skills';
function App() {
 
  return (
 
    <div className="App" >
  <NavBar/>
  <HomePage/>
  <Skills/>

    </div>
   
  );
}

export default App;
