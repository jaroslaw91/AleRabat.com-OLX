import React, { useState, useEffect } from 'react'
import {
    HashRouter as Router,
    Link
} from "react-router-dom";

const Search = ({ shops }) => {

    const [shopList, setShopList] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    const [searchShop, setSearchShop] = useState([]);

    useEffect(() => {
        setShopList(shops?.map(m => m.name));
        const shop = shopList.filter(shop => (
            shop.toLowerCase().includes(searchValue)
        ));
        setSearchShop(shop);
    }, [searchValue]);

    const handleOfSearch = e => {
        const value = e.target.value;
        setSearchValue(value);
    };

    const onSearch = () => {
        input.value = "";
        setSearchValue("");
    }

    return (
        <div className="search">
            <form className="search--form">
                <button type="submit">
                    <i className="fas fa-search" />
                </button>
                <input id="input" type="text" placeholder="np. eobuwie, Media Markt, adidas" value={searchValue} onChange={handleOfSearch} />
                <ul>
                    <Router>
                        {searchShop.map(shop => (
                            searchValue ?
                                <Link key={shop} exact="true" to={"/kody-promocyjne/" + shop} onClick={onSearch}>
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

export default Search;