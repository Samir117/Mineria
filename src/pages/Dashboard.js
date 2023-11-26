import React from "react";
import BarraAdmin from "../components/BarraAdmin";
import Footer from "../components/Footer";

export const Dashboard = () => {

    return (
        <>
            <BarraAdmin />
            <div className="container">
                <div className="display-5">
                    Dashboard            </div>
                <iframe width="800" height="600" src="https://lookerstudio.google.com/embed/reporting/d5cbc81d-97de-475d-85b1-d4b1112e6877/page/zQNjD" title="Dash" ></iframe>
                <Footer />
            </div>
        </>
    )
};

export default Dashboard;


