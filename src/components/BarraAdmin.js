import React from "react";

export const BarraAdmin = () => {


    return (
        <>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/Inicio">Mineria Datos</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Mineria</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">  
                            <li className="nav-item">
                                    <a className="nav-link" href="/PrediccionAdmin  ">Prediccion</a>
                                </li>  
                            <li className="nav-item">
                                    <a className="nav-link" href="/Resultados  ">Analisis de Datos</a>
                                </li>                 
                                <li className="nav-item">
                                    <a className="nav-link" href="/Dashboard">Dashboard</a>
                                </li>                   
                                <li className="nav-item">
                                    <a className="nav-link" href="/Inicio">Cerrar Sesion</a>
                                </li>
                            </ul>
                        
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default BarraAdmin;
