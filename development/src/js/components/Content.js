import React, { useState, useEffect } from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Loading from "./Loading";
import Main from "./Main";
import Top from "./Top";
import Shops from "./Shops";
import Shop from "./Shop";


const Content = ({ token, shops, letters }) => {
    const [allVouchers, setAllVouchers] = useState([]);

    useEffect(() => {
        shops.map(m => {
            fetch(process.env.DB_HOST + "shops/" + m.id + "/vouchers", {
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => setAllVouchers(prev => [...prev, data]))
                .catch(error => console.log(error));
        });
    }, [shops]);

    return shops.length ? (
        <div className="content">
            <div className="content--container">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/top" component={() => (
                            <Top allVouchers={allVouchers} />
                        )} />
                        <Route path="/sklepy" component={() => (
                            <Shops letters={letters} shops={shops} />
                        )} />
                        <Route path="/kody-promocyjne/:shop" component={() => (
                            <Shop token={token} shops={shops} />
                        )} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
        : <Loading />;
}

export default Content;