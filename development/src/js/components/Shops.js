import React, { useState, useEffect } from "react";
import {
    HashRouter as Router,
    NavLink
} from "react-router-dom";

const Shops = ({ token, DB_URL }) => {
    const [sort, setSort] = useState([]);
    const [shops, setShops] = useState([]);

    useEffect(() => {
        if (token) {
            fetch(process.env.DB_HOST + "shops", {
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => setShops(data))
                .catch(error => console.log(error));
        }
        fetch(DB_URL + "sort")
            .then(res => res.json())
            .then(data => setSort(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <div className="shops">
                <div className="shops--container">
                    <h2>Wszystkie sklepy</h2>
                    <div className="shops--container__sort">
                        {sort?.map(e => <span key={e.id}>{e.name}</span>)}
                    </div>
                    {sort?.map(e => (
                        e.name.charAt(0) === "0" ?
                            <div key={e.id} className="shops--container__box">
                                <h3>{e.name}</h3>
                                <ul>
                                    <Router>
                                        {shops?.filter(f => Number(f.name.charAt(0)))
                                            .map(m => (
                                                <NavLink key={m.id} exact to={"/kody-promocyjne/" + m.name}>
                                                    <li>{m.name}</li>
                                                </NavLink>
                                            ))}
                                    </Router>
                                </ul>
                            </div>
                            : <div key={e.id
                            } className="shops--container__box" >
                                <h3>{e.name}</h3>
                                <ul>
                                    <Router>
                                        {shops?.filter(f => f.name.charAt(0).toUpperCase() === e.name)
                                            .map(m => (
                                                <NavLink key={m.id} exact to={"/kody-promocyjne/" + m.name}>
                                                    <li>{m.name}</li>
                                                </NavLink>
                                            ))}
                                    </Router>
                                </ul>
                            </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Shops;