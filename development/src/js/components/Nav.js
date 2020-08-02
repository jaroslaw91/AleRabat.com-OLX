import React, { useState, useEffect } from "react";
import {
    HashRouter as Router,
    NavLink
} from "react-router-dom";

const Nav = ({ DB_URL }) => {
    const [nav, setNav] = useState([]);

    useEffect(() => {
        fetch(DB_URL + "nav")
            .then(res => res.json())
            .then(data => setNav(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="navigation">
            <div className="navigation--mobile">
                <nav>
                    <select>
                        {nav?.map(e => (
                            <option key={e.id}>{e.name}</option>
                        ))}
                    </select>
                </nav>
            </div>
            <div className="navigation--desktop">
                <nav>
                    <ul>
                        <Router>
                            {nav?.map(e => (
                                <NavLink key={e.id} exact to={e.url} activeClassName="nav-active">
                                    <li className="nav-disabled">{e.name}</li>
                                </NavLink>
                            ))}
                        </Router>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav;