  import './App.css';
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import Inicio from './pages/Inicio';
  import Dashboard from './pages/Dashboard';
  import Admin from './pages/Admin';
  import { AuthProvider } from './token/Auth';
  import { useState } from 'react';
  import { useEffect } from 'react';


  
  function App() {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    const [isAdmin, setIsAdmin] = useState(storedIsAdmin === 'true');
    useEffect(() => {
      // Almacena isAdmin en localStorage cada vez que cambia
      localStorage.setItem('isAdmin', isAdmin);
    }, [isAdmin]);
    return (

      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Inicio isAdmin={isAdmin} />} />
            <Route path="/Inicio" element={<Inicio isAdmin={isAdmin} />} />
            <Route exact path="/Dashboard" element={<Dashboard isAdmin={isAdmin} />} />
            <Route path="/Admin" element={<Admin isAdmin={isAdmin} setIsAdmin={setIsAdmin} />} />
            </Routes>
        </BrowserRouter>
      </AuthProvider>

    );
  }

  export default App;
