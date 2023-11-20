import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Barra from './components/Barra';
import Inicio from './pages/Inicio';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import { AuthProvider } from './token/Auth';
import { useState } from 'react';
function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Inicialmente no es administrador

  return (

    <AuthProvider>
      <BrowserRouter>
        <div className='Barra'>
          <Barra isAdmin={isAdmin} setIsAdmin={setIsAdmin}  />
        </div>
        <Routes>
          <Route path="/*" element={<Inicio setIsAdmin={setIsAdmin} />} />
          <Route path="/Inicio" element={<Inicio setIsAdmin={setIsAdmin} />} />
          <Route exact path="/Dashboard" element={<Dashboard setIsAdmin={setIsAdmin} />} />
          <Route exact path="/Admin" element={<Admin setIsAdmin={setIsAdmin} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
