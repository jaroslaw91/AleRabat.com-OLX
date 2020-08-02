import React, { useState, useEffect } from 'react'
import {
    HashRouter as Router,
    Link
} from "react-router-dom";

const Searching = ({ shops }) => {
    const [shopList, setShopList] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [searchShop, setSearchShop] = useState([]);

    useEffect(() => {
        setShopList(shops?.map(m => m.name));
        const shop = shopList.filter(shop => (
            shop.toLowerCase().includes(searchValue)
        ));
        setSearchShop(shop);
    }, [searchValue]);

    const handleOfSearch = e => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="search">
            <form className="search--form">
                <button type="submit">
                    <i className="fas fa-search"></i>
                </button>
                <input type="text" placeholder="np. eobuwie, Media Markt, adidas" value={searchValue} onChange={handleOfSearch} />
                <ul>
                    <Router>
                        {searchShop.map(shop => (
                            searchValue ?
                                <Link key={shop} xact="true" to={"/kody-promocyjne/" + shop}>
                                    <li key={shop}>
                                        <img src={"./../../assets/img/search/" + shop + ".png"} alt={shop} />{shop}
                                    </li>
                                </Link>
                                : null
                        ))}
                    </Router>
                </ul>
            </form>
        </div>
    );
}

export default Searching;