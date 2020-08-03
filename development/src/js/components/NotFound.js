import React from "react";
import {
    HashRouter as Router,
    NavLink
} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <img src="./../../assets/img/404.png" alt="Nie znaleziono strony" />
            <Router>
                <NavLink exact to="/" className="not-found--link">
                    <span>Wróć na stronę główną</span>
                </NavLink>
            </Router>
        </div>
    );
}

export default NotFound;