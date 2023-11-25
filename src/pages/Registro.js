import React from "react";
import Barra from "../components/Barra";

export const Registro = () => {
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
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Documento</label>
                                    <input type="number" className="form-control" placeholder="Documento" aria-label="First name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Nombre</label>
                                    <input type="text" className="form-control" placeholder=" Nombre" aria-label="Last name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Segundo Nombre</label>
                                    <input type="text" className="form-control" placeholder="Segundo Nombre" aria-label="Last name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Apellido</label>
                                    <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Segundo Apellido</label>
                                    <input type="text" className="form-control" placeholder="Segundo Apellido" aria-label="Last name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Correo</label>
                                    <input type="text" className="form-control" placeholder="Correo" aria-label="Last name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Telefono</label>
                                    <input type="number" className="form-control" placeholder="Telefono" aria-label="Last name" />
                                </div>
                            </div>
                            <div className="boton ">
                                <button type="button" class="btn btn-light ">Enviar</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Registro;
