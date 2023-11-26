import React from "react";
import Barra from "../components/Barra";
import Footer from "../components/Footer";
import { useState } from "react";
import Swal from "sweetalert2";

export const Prediccion = () => {
    const [edad, setedad] = useState('');
    const [localizacion, setlocalizacion] = useState('');
    const [previa, setprevia] = useState('');

    const [selectedSizes, setSelectedSizes] = useState({
        talla: '',
        color: '',
        temporada: '',
        descuento: '',
        promocion: '',
        pago: '',
        compra: ''
    });

    const handleSizeChange = (event, talla) => {
        setSelectedSizes({
            ...selectedSizes,
            [talla]: parseInt(event.target.value)// Actualiza el estado con la talla seleccionada
        });
    };

    const handleprediccion = async (e) => {
        e.preventDefault();

        const edad = document.getElementById('txtedad').value;
        const localizacion = document.getElementById('txtlocalizacion').value;
        const talla = document.getElementById('cmbtalla').value;
        const color = document.getElementById('cmbcolor').value;
        const temporada = document.getElementById('cmbtemporada').value;
        const aplicado = document.getElementById('cmbaplicado').value;
        const promocion = document.getElementById('cmbpromo').value;
        const previa = document.getElementById('previa').value;
        const pago = document.getElementById('cmbtipopago').value;
        const frecuencia = document.getElementById('cmbfrecuencia').value;
        console.log('Edad:', edad);
        console.log('Localización:', localizacion);
        console.log('Valores seleccionados:', talla);

        const fetchData = {
            method: 'POST', // Método de la solicitud (POST, GET, etc.)
            headers: {
                'Content-Type': 'application/json' // Tipo de contenido de la solicitud
            },
            // Cuerpo de la solicitud (datos que se enviarán al servidor)
            body: JSON.stringify({
                // Aquí puedes incluir los datos necesarios para la autenticación
                edad: parseInt(document.getElementById("txtedad").value),
                localizacion: parseInt(document.getElementById("txtlocalizacion").value),
                talla: parseInt(document.getElementById("cmbtalla").value),
                color: parseInt(document.getElementById("cmbcolor").value),
                temporada: parseInt(document.getElementById("cmbtemporada").value),
                des_aplicado: parseInt(document.getElementById("cmbaplicado").value),
                cd_promo_usado: parseInt(document.getElementById("cmbpromo").value),
                compra_previa: parseInt(document.getElementById("previa").value),
                metodo_pago: parseInt(document.getElementById("cmbtipopago").value),
                frecuencia_compra: parseInt(document.getElementById("cmbfrecuencia").value)
            })
        };
        console.log("ENVIADO A BACKEND", fetchData);

        if (edad === '' || localizacion === '' || talla === '' || color === '' || temporada === '' || aplicado === '' || promocion === '' || previa === '' || pago === "" || frecuencia === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Campos Vacios',
                footer: '<a href="">Necesitas ayuda?</a>'
            });
        } else {
            try {
                const response = await fetch('http://127.0.0.1:5000/prediction', fetchData);
                const data = await response.json();
                console.log(data);

                if (data === 'Male') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Prediccion',
                        text: 'De acuerdo a los datos registrados su genero es Masculino',
                        footer: '<a href="">Necesitas  ayuda?</a>'
                    });

                } else {
                    if (data === 'Female') {
                        Swal.fire({
                            icon: 'success',
                            title: 'Prediccion',
                            text: 'De acuerdo a los datos registrados su genero es Femenino',
                            footer: '<a href="">Necesitas  ayuda?</a>'
                        });

                    }
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

    }
    return (
        <>
            <Barra />
            <div className="container">
                <div className="caja">
                    <div className="login3 top">
                        <div className="row">
                            <div className="display-2">
                                Formulario de Prediccion
                            </div>
                            <form className="form" onSubmit={handleprediccion}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Edad</label>
                                            <input type="number"
                                                id="txtedad"
                                                onChange={(e) => setedad(e.target.value)}
                                                value={edad}
                                                className="form-control"
                                                placeholder="Edad"
                                                aria-label="First name" />
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Localizacion</label>
                                            <input type="text"
                                                className="form-control"
                                                placeholder=" Localizacion"
                                                aria-label="Last name"
                                                id="txtlocalizacion"
                                                onChange={(e) => setlocalizacion(e.target.value)}
                                                value={localizacion}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="validationCustom04" className="form-label">Talla</label>
                                            <select
                                                className="form-select"
                                                id="cmbtalla"
                                                required
                                                value={selectedSizes.talla} // Asigna el valor del estado al select para reflejar la selección
                                                onChange={(e) => handleSizeChange(e, 'talla')} // Manejador para el cambio de selecció
                                            >
                                                <option defaultValue="">Choose...</option>
                                                <option value='0'>L</option>
                                                <option value='1'>S</option>
                                                <option value='2'>M</option>
                                                <option value='3'>XL</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid state.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="validationCustom04" className="form-label">Color</label>
                                            <select
                                                className="form-select"
                                                id="cmbcolor"
                                                required
                                                value={selectedSizes.color} // Asigna el valor del estado al select para reflejar la selección
                                                onChange={(e) => handleSizeChange(e, 'color')} // Manejador para el cambio de selecció
                                            >
                                                <option defaultValue="">Choose...</option>
                                                <option value='7' >Gray</option>
                                                <option value='12'>Maroon</option>
                                                <option value='21'>Turquoise</option>
                                                <option value='23'>White</option>
                                                <option value='4'>Charcoal</option>
                                                <option value='19'>Silver</option>
                                                <option value='16'>Pink</option>
                                                <option value='17' >Purple</option>
                                                <option value='13'>Olive</option>
                                                <option value='6'>Gold</option>
                                                <option value='22' >Violet</option>
                                                <option value='20'>Teal</option>
                                                <option value='10'>Lavender</option>
                                                <option value='1'>Black</option>
                                                <option value='8'>Green</option>
                                                <option value='15'>Peach</option>
                                                <option value='18'>Red</option>
                                                <option value='5'>Cyan</option>
                                                <option value='3'>Brown</option>
                                                <option value='0'>Beige</option>
                                                <option value='14'>Orange</option>
                                                <option value='9'>Indigo</option>
                                                <option value='24'>Yellow</option>
                                                <option value='11'>Magenta</option>
                                                <option value='2'>Blue</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid state.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="validationCustom04" className="form-label">Temporada</label>
                                            <select
                                                className="form-select"
                                                id="cmbtemporada"
                                                required
                                                value={selectedSizes.temporada} // Asigna el valor del estado al select para reflejar la selección
                                                onChange={(e) => handleSizeChange(e, 'temporada')} // Manejador para el cambio de selecció
                                            >
                                                <option defaultValue="">Choose...</option>
                                                <option value='3' >Winter</option>
                                                <option value='1'>Spring</option>
                                                <option value='2'>Summer</option>
                                                <option value='0'>Fall</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid state.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="validationCustom04" className="form-label">Descuento Aplicado</label>
                                            <select
                                                className="form-select"
                                                id="cmbaplicado"
                                                required
                                                value={selectedSizes.descuento} // Asigna el valor del estado al select para reflejar la selección
                                                onChange={(e) => handleSizeChange(e, 'descuento')} // Manejador para el cambio de selecció
                                            >
                                                <option defaultValue="">Choose...</option>
                                                <option value='0'>No</option>
                                                <option value='1'>Si</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid state.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="validationCustom04" className="form-label">Codigo de promocion</label>
                                            <select
                                                className="form-select"
                                                id="cmbpromo"
                                                required
                                                value={selectedSizes.promocion} // Asigna el valor del estado al select para reflejar la selección
                                                onChange={(e) => handleSizeChange(e, 'promocion')} // Manejador para el cambio de selecció
                                            >
                                                <option defaultValue="">Choose...</option>
                                                <option value='0'>No</option>
                                                <option value='1'>Si</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid state.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="validationCustom04" className="form-label">Compra Previa</label>
                                            <input type="number"
                                                id="previa"
                                                onChange={(e) => setprevia(e.target.value)}
                                                value={previa}
                                                className="form-control"
                                                placeholder="Compra previa"
                                                aria-label="First name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="validationCustom04" className="form-label">Metodo de Pago</label>
                                            <select
                                                className="form-select"
                                                id="cmbtipopago"
                                                required
                                                value={selectedSizes.pago} // Asigna el valor del estado al select para reflejar la selección
                                                onChange={(e) => handleSizeChange(e, 'pago')} // Manejador para el cambio de selecció
                                            >
                                                <option defaultValue="">Choose...</option>
                                                <option value='5'>Venmo</option>
                                                <option value='1'>Cash</option>
                                                <option value='2'>Credit Card</option>
                                                <option value='4'>PayPal</option>
                                                <option value='0'>Bank Transfer</option>
                                                <option value='3'>Debit Card</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid state.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="validationCustom04" className="form-label">Frecuencia de Compra</label>
                                            <select
                                                className="form-select"
                                                id="cmbfrecuencia"
                                                required
                                                value={selectedSizes.compra} // Asigna el valor del estado al select para reflejar la selección
                                                onChange={(e) => handleSizeChange(e, 'compra')} // Manejador para el cambio de selecció
                                            >
                                                <option defaultValue="">Choose...</option>
                                                <option value='3'>Fortnightly</option>
                                                <option value='6'>Weekly</option>
                                                <option value='0'>Annually</option>
                                                <option value='5'>Quarterly</option>
                                                <option value='1'>Bi-Weekly</option>
                                                <option value='4'>Monthly</option>
                                                <option value='2'>Every 3 Months</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid state.
                                            </div>
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
            </div>
            <Footer />
        </>
    );
}

export default Prediccion;
