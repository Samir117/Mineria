import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import Barra from "../components/Barra";
import Swal from "sweetalert2";




export const Admin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const [isAdmin] = useState(false);


    const handleLogin = async (e) => {
        e.preventDefault();

        const usuario = document.getElementById("txtUsuario").value;
        const password = document.getElementById("txtPassword").value;
        const fetchData = {
            method: 'POST', // Método de la solicitud (POST, GET, etc.)
            headers: {
                'Content-Type': 'application/json' // Tipo de contenido de la solicitud
            },
            // Cuerpo de la solicitud (datos que se enviarán al servidor)
            body: JSON.stringify({
                // Aquí puedes incluir los datos necesarios para la autenticación
                usuario: document.getElementById("txtUsuario").value,
                password: document.getElementById("txtPassword").value
            })
        };
        if (usuario === "" || password === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Campos Vacios',
                footer: '<a href="">Necesitas ayuda?</a>'
            });
        } else {
            try {
                const response = await fetch('http://127.0.0.1:5000/login', fetchData);
                const data = await response.json();
    
                if (data === null) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Contraseña o Usuario Incorrecto',
                        footer: '<a href="">Necesitas ayuda?</a>'
                    });
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Exitoso',
                        text: 'Bienvenido Administrador',
                        footer: '<a href="">Necesitas ayuda?</a>'
                    });
                    navigate('/Dashboard');
                }
    
    
            } catch (error) {
                // Manejar errores de la solicitud fetch
                console.error('Error:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.',
                    footer: '<a href="">Necesitas ayuda?</a>'
                });
            }
        }

        /* if (email === '' && password === '') {


            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'INGRESE SUS CREDENCIALES POR FAVOR',
                footer: '<a href="">Necesitas ayuda?</a>',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false
            });
            return;

            }else{
                const isAdmin = true;


            if (email==='Samir' && password==='123') {
                // Establecer isAdmin como true en el estado local
                setIsAdmin(true);
                console.log('isAdmin después de establecerlo como verdadero:', isAdmin); // Agregar esta línea

                navigate('/Dashboard');
                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido Administrador',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false
                }); 
                // Resto de tu lógica después de ser administrador...
            } else {
                // Si las credenciales son correctas pero el usuario no es administrad
                // Resto de tu lógica...
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'INGRESE SUS CREDENCIALES POR FAVOR',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false
                }); 
            }
        } 
    }; */

    };
    return (

        <>
            <Barra isAdmin={isAdmin} />
            <div className="caja" >
                <div className="login bg-dark text-white" >
                    <form className="form" onSubmit={handleLogin}>
                        <div className="titulo display-6">
                            Inicio de Sesion
                        </div>
                        <div className="form-group" >
                            <label htmlFor="txtUsuario">Usuario:</label>
                            <input
                                aria-label="Username"
                                id="txtUsuario"
                                className="txtusuario form-control"
                                type="text"
                                placeholder="Ingresa tu Usuario"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="txtPassword">Contraseña:</label>
                            <input
                                id="txtPassword"
                                className="txtpassword form-control"
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="boton">
                            <button type="submit" className=" btn btn-outline-light">Inicar Sesion</button>
                        </div>
                    </form>

                </div>
            </div>

            <div className="text-white">
                <Footer />
            </div>

        </>
    )

};

export default Admin;