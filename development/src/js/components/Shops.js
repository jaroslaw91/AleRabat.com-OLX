import React from "react";
import {
    HashRouter as Router,
    NavLink
} from "react-router-dom";
import { Link } from "react-scroll";

const Shops = ({ letters, shops }) => {
    return (
        <>
            <h2>Wszystkie sklepy</h2>
            <div className="shops--sort">
                {letters?.map(e =>
                    <Link key={e.id} to={"/sklepy/" + e.name} spy={true} smooth={true} offset={- 100} duration={500}>
                        <span>{e.name}</span>
                    </Link>
                )}
            </div>

            {letters?.map(e => (
                e.name.charAt(0) === "0" ?
                    <div key={e.id} className="shops--box" id={"/sklepy/" + e.name}>
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
                    :
                    <div className="shops--box" key={e.id} id={"/sklepy/" + e.name}>
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
        </>
    )
}

export default Shops;