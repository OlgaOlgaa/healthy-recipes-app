import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Recipe from './Recipe';
import Home from './Home';
import Articles from './Articles'


function App() {

  return (
    <div >
       <Router >
        <nav  >
         <Link className='link' to='/'>Home</Link>
         <Link className='link' to="/Recipe">Recipes</Link>
         <Link className='link' to="/Articles">Articles</Link>
        </nav>
       
        <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Recipe' element = {<Recipe/>}/>
        <Route path='/Articles' element = {<Articles/>}/>
        </Routes>
        
       </Router>
     </div>
      
      
      )
      
}

export default App;
