import React from "react";

const Heading = ({ shops }) => {

    return (
        <div className="heading">
            <h2 className="heading--text">
                {shops.length ?
                    shops.length + " sklepów z kuponami rabatowymi w jednym miejscu"
                    : "Ładowanie..."
                }
            </h2>
        </div>
    );
}

export default Heading;