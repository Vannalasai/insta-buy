import React from "react";

import CheckoutImg from "../assets/checkout.png"

export default function Checkout() {
    return(
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"5rem"}}>
            <img height="500px" src={CheckoutImg} alt="" />
        </div>
    )
}