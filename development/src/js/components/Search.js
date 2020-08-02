import React from "react";

const Search = () => {
    return (
        <div className="search">
            <form className="search--form">
                <button type="submit">
                    <i className="fas fa-search"></i>
                </button>
                <input type="text" placeholder="np. eobuwie, Media Markt, adidas" />
            </form>
        </div>
    );
}

export default Search;