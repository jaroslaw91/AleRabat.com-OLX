import React, { useEffect } from "react";
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
import NotFound from "./NotFound";

const Content = ({ token, shops, letters, allVouchers, setAllVouchers }) => {

    const dateNow = new Date();
    const monthNames = [
        "Styczeń",
        "Luty",
        "Marzec",
        "Kwiecień",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpień",
        "Wrzesień",
        "Październik",
        "Listopadf",
        "Grudzień"
    ];

    useEffect(() => {
        shops.map(m => {
            fetch(process.env.DB_HOST + "shops/" + m.id + "/vouchers", {
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i <= data.length; i++) {
                        if (data[i] !== undefined) {
                            setAllVouchers(prev => [...prev, data[i]])
                        }
                    }
                })
                .catch(error => console.log(error));
        });
    }, [shops]);

    return shops.length && allVouchers.length ? (
        <div className="content">
            <div className="content--container">
                <Router>
                    <Switch>
                        <Route exact path="/" component={() => (
                            <Main shops={shops} allVouchers={allVouchers} dateNow={dateNow} />
                        )} />
                        <Route path="/top" component={() => (
                            <Top allVouchers={allVouchers} dateNow={dateNow} />
                        )} />
                        <Route path="/sklepy" component={() => (
                            <Shops letters={letters} shops={shops} />
                        )} />
                        <Route path="/kody-promocyjne/:shop" component={() => (
                            <Shop token={token} shops={shops} allVouchers={allVouchers} monthNames={monthNames} dateNow={dateNow} />
                        )} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
        : <Loading />;
}

export default Content;