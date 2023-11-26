import React from "react";
import Barra from "../components/Barra";
import Footer from "../components/Footer";

export const Prediccion = () => {
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
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Edad</label>
                                    <input type="number" className="form-control" placeholder="Edad" aria-label="First name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Localizacion</label>
                                    <input type="text" className="form-control" placeholder=" Localizacion" aria-label="Last name" />
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div class="form-group mb-3">
                                    <label for="validationCustom04" class="form-label">Talla</label>
                                    <select class="form-select" id="cmbtalla" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>L</option>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>XL</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                 <div class="form-group mb-3">
                                    <label for="validationCustom04" class="form-label">Color</label>
                                    <select class="form-select" id="cmbcolor" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>Gray</option>
                                        <option>Maroon</option>
                                        <option>Turquoise</option>
                                        <option>White</option>
                                        <option>Charcoal</option>
                                        <option>Silver</option>
                                        <option>Pink</option>
                                        <option>Purple</option>
                                        <option>Olive</option>
                                        <option>Gold</option>
                                        <option>Violet</option>
                                        <option>Teal</option>
                                        <option>Lavender</option>
                                        <option>Black</option>
                                        <option>Green</option>
                                        <option>Peach</option>
                                        <option>Red</option>
                                        <option>Cyan</option>
                                        <option>Brown</option>
                                        <option>Beige</option>
                                        <option>Orange</option>
                                        <option>Indigo</option>
                                        <option>Yellow</option>
                                        <option>Magenta</option>
                                        <option>Blue</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div class="form-group mb-3">
                                    <label for="validationCustom04" class="form-label">Temporada</label>
                                    <select class="form-select" id="cmbtemporada" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>Winter</option>
                                        <option>Spring</option>
                                        <option>Summer</option>
                                        <option>Fall</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div class="form-group mb-3">
                                    <label for="validationCustom04" class="form-label">Descuento Aplicado</label>
                                    <select class="form-select" id="cmbaplicado" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>No</option>
                                        <option>Si</option>                                      
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div class="form-group mb-3">
                                    <label for="validationCustom04" class="form-label">Codigo de promocion</label>
                                    <select class="form-select" id="cmbpromo" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>No</option>
                                        <option>Si</option>                                      
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div class="form-group mb-3">
                                    <label for="validationCustom04" class="form-label">Compra Previa</label>
                                    <select class="form-select" id="cmbprevia" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>No</option>
                                        <option>Si</option>                                      
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div class="form-group mb-3">
                                    <label for="validationCustom04" class="form-label">Metodo de Pago</label>
                                    <select class="form-select" id="cmbtipopago" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>Venmo</option>
                                        <option>Cash</option>      
                                        <option>Credit Card</option>  
                                        <option>PayPal</option>  
                                        <option>Bank Transfer</option>  
                                        <option>Debit Card</option>                                  
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div class="form-group mb-3">
                                    <label for="validationCustom04" class="form-label">Frecuencia de Compra</label>
                                    <select class="form-select" id="cmbtipopago" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>Fortnightly</option>
                                        <option>Weekly</option>      
                                        <option>Annually</option>  
                                        <option>Quarterly</option>  
                                        <option>Bi-Weekly</option>  
                                        <option>Monthly</option>                                   
                                        <option>Every 3 Months</option>                                 
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                </div>
                            <div className="boton ">
                                <button type="button" class="btn btn-light ">Enviar</button>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Prediccion;
