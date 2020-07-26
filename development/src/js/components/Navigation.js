import React from "react";
import {
    HashRouter as Router,
    NavLink
} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <div className="navigation--mobile">
                    <select>
                        <option>Strona główna</option>
                        <option>Top20</option>
                        <option>Sklepy</option>
                    </select>
                </div>
                <div className="navigation--desktop">
                    <ul>
                        <Router>
                            <NavLink exact to="/" activeClassName="nav-active">
                                <li className="nav-disabled">Strona główna</li>
                            </NavLink>

                            <NavLink to="/top" activeClassName="nav-active">
                                <li className="nav-disabled">Top20</li>
                            </NavLink>

                            <NavLink to="/sklepy" activeClassName="nav-active">
                                <li className="nav-disabled">Sklepy</li>
                            </NavLink>
                        </Router>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navigation;