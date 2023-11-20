import React from "react";
import { useNavigate } from 'react-router-dom';

export const Barra = ({ isAdmin, setIsAdmin }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAdmin(false);
        navigate('/Inicio');
    };

    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/Inicio">Mineria Data</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark flex-column" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Mineria Data</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="nav justify-content-center">
                                {isAdmin && (
                                    <li className="nav-item">
                                        <a className="nav-link" href="/Dashboard">Dashboard</a>
                                        <button className="btn btn-danger mt-3" onClick={handleLogout}>Cerrar Sesión</button>
                                    </li>
                                )}
                                <li className="nav-item">
                                    <a className={`nav-link ${!isAdmin ? 'active' : ''}`} aria-current="page" href="/Inicio">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${!isAdmin ? '' : 'hidden'}`} href="/Admin">Admin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Barra;
