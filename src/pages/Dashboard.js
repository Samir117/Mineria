import React from "react";
import BarraAdmin from "../components/BarraAdmin";
import Footer from "../components/Footer";

export const Dashboard = () => {

    return (
        <>
            <BarraAdmin  />
        <div className="container">
            <div className="display-5">
                DASHBOARD
            </div>
            <iframe width="800" height="600" src="https://lookerstudio.google.com/embed/reporting/421b6916-4a69-4a07-998d-0764689def9d/page/V7niD" title="Dash" ></iframe>
        <Footer />
        </div>
        </>
    )
};

export default Dashboard;