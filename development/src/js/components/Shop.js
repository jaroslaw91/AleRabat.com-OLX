import React from "react";
import { useParams } from "react-router-dom";

const Shop = ({ token }) => {
    const { shop } = useParams();

    return (
        <>
            <div className="shop">
                <div className="shop--container">
                    <h2>Kod rabatowy {shop}</h2>
                </div>
            </div>
        </>
    );
}

export default Shop;