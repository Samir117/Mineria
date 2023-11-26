import React from "react";
import Barra from "../components/Barra";
import Swal from 'sweetalert2'
import Footer from "../components/Footer";




export const Registro = () => {

    const handleregistro = async (e) => {
        e.preventDefault();
        const documento = document.getElementById("documento").value;
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const segundoapellido = document.getElementById("segundoapellido").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;
        const password = document.getElementById("password").value;
        const usuario = document.getElementById("Usuario").value;

        const fetchData = {
            method: 'POST', // Método de la solicitud (POST, GET, etc.)
            headers: {
                'Content-Type': 'application/json' // Tipo de contenido de la solicitud
            },
            // Cuerpo de la solicitud (datos que se enviarán al servidor)
            body: JSON.stringify({
                // Aquí puedes incluir los datos necesarios para la autenticación
                documento: parseInt(document.getElementById("documento").value),
                nombre: document.getElementById("nombre").value,
                apellido: document.getElementById("apellido").value,
                s_apellido: document.getElementById("segundoapellido").value,
                user_password: document.getElementById("password").value,
                usuario: document.getElementById("Usuario").value,
                correo: document.getElementById("correo").value,
                telefono: parseInt(document.getElementById("telefono").value)
            })
        };

        if (documento === "" || nombre === "" || apellido === "" || segundoapellido === "" || password === "" || usuario === ""
            || correo === "" || telefono === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Campos Vacios',
                footer: '<a href="">Necesitas ayuda?</a>'
            });

        } else {
            try {
                const response = await fetch('http://127.0.0.1:5000/insert ', fetchData);
                const data = await response.json();
                console.log(data);

                if (data === true) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Registro',
                        text: 'Registro Exitoso',
                        footer: '<a href="">Necesitas  ayuda?</a>'
                    });

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Opps',
                        text: 'Datos Erroneos o Vacios por favor contactar a su Administrador',
                        footer: '<a href="">Necesitas  ayuda?</a>'
                    });

                }

            } catch (error) {
                console.error('Error:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.',
                    footer: '<a href="">Necesitas ayuda?</a>'
                });
            }
        }
    };
    return (
        <>
            <Barra />
            <div className="container">
                <div className="caja">
                    <div className="login2 top">
                        <div className="row">
                            <div className="display-2">
                                Formulario de Registro
                            </div>
                            <form className="form" onSubmit={handleregistro}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Documento</label>
                                            <input id="documento" type="number" className="form-control" placeholder="Documento" aria-label="First name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Nombre</label>
                                            <input type="text" id="nombre" className="form-control" placeholder=" Nombre" aria-label="Last name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Apellido</label>
                                            <input type="text" id="apellido" className="form-control" placeholder="Apellido" aria-label="Last name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Segundo Apellido</label>
                                            <input type="text" id="segundoapellido" className="form-control" placeholder="Segundo Apellido" aria-label="Last name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Correo</label>
                                            <input type="text" id="correo" className="form-control" placeholder="Correo" aria-label="Last name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Usuario</label>
                                            <input type="text" id="Usuario" className="form-control" placeholder="Usuario" aria-label="Last name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Contraseña</label>
                                            <input type="password" id="password" className="form-control" placeholder="password" aria-label="Last name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Telefono</label>
                                            <input type="number" id="telefono" className="form-control" placeholder="Telefono" aria-label="Last name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="boton ">
                                    <button type="submit" className="btn btn-light ">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Registro;
