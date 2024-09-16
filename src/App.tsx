import './App.css';
import { NavBar } from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage';
function App() {
 
  return (
    <div className="App" >
  <NavBar/>
  <HomePage/>
    </div>
  );
}

export default App;
