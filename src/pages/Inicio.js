import React from "react";
import Footer from "../components/Footer";
import Barra from "../components/Barra";
import { useAuth } from "../token/Auth";
import imagen1 from "../assets/1.avif"
import imagen2 from "../assets/2.avif"
import imagen3 from "../assets/3.jpg"

export const Inicio = () => {
    const { setAdmin } = useAuth();

    return (
        <>
            <Barra setAdmin={setAdmin} />
            <div className="container" >
                <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={imagen1} class="d-block w-100" alt="..." className="img-fluid" width={800} height={800} />
                        </div>
                        <div class="carousel-item">
                            <img src={imagen2} class="d-block w-100" alt="..." className="img-fluid" width={700} height={700} />
                        </div>
                        <div class="carousel-item">
                            <img src={imagen3} class="d-block w-100" alt="..." className="img-fluid" width={800} height={800} />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="container">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                        
                    </div>

                </div>
            </div>
            <div className="text-white">
                <Footer />
            </div>
        </>
    )
};

export default Inicio;