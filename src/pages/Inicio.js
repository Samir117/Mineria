import React from "react";
import Footer from "../components/Footer";
import Barra from "../components/Barra";
import { useAuth } from "../token/Auth";



export const Inicio = () => {
    const { setAdmin} = useAuth();

    return (
        <>
      <Barra setAdmin={setAdmin} />
            <div className="container">
                <div className="display-5">

                </div>

            </div>
            <div className="text-white">
                <Footer />
            </div>
        </>
    )
};

export default Inicio;