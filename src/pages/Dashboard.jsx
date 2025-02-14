import React from "react";
import Navbar from "../components/Navbar";
import Promo from "../components/Promo";
import ReferralBenefit from "../components/ReferralBenefit";

function Dashboard() {
    return (
        <div>
            <Navbar />
            <Promo />
            <ReferralBenefit />
        </div>
    );
}

export default Dashboard;
