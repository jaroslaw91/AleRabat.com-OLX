import React from "react";

const Heading = ({ allVouchers }) => {

    return (
        <div className="heading">
            <h2 className="heading--text">
                {allVouchers.length + " kodów rabatowych i promocji w jednym miejscu"}
            </h2>
        </div>
    );
}

export default Heading;