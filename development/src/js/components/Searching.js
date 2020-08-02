import React from "react";

const Searching = ({ shops }) => {

    return (
        <div className="search">
            <form className="search--form">
                <button type="submit">
                    <i className="fas fa-search"></i>
                </button>
                <input placeholder="np. eobuwie, Media Markt, adidas" />
            </form>
        </div>
    );
}

export default Searching;