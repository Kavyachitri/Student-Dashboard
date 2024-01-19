
import './App.css';
import Home from './Components/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
   
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        
      </Routes>
    </Router>
   
   
  
    
    </>
  );
}

export default App;
