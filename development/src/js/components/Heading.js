import React from "react";

const Heading = ({ shops }) => {

    return (
        <>
            <div className="heading">
                <h2 className="heading--text">{shops} kodów rabatowych i promocji w jednym miejscu</h2>
            </div>
        </>
    );
}

export default Heading;