import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Barra from './components/Barra';
import Inicio from './pages/Inicio';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
    <div className='Barra'>
    <Barra/>
    </div>
    <Routes>
       <Route exact path="/Inicio" element={<Inicio />}/>
       <Route exact path="/Dashboard" element={<Dashboard />}/>
       <Route exact path="/Admin" element={<Admin />}/>
    </Routes>


    </BrowserRouter>

  );
}

export default App;
