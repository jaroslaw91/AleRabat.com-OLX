import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import "./../scss/main.scss";
import Headers from "./components/Header";
import Heading from "./components/Heading";
import Search from "./components/Search";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Top from "./components/Top";
import Shops from "./components/Shops";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

const DB_URL = `http://localhost:3005/`;

const App = () => {
    const [token, setToken] = useState();

    useEffect(() => {
        fetch(process.env.DB_HOST + "login_check", {
            method: "POST",
            body: "_username=" + process.env.DB_USER + "&_password=" + process.env.DB_PASSWORD,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(res => res.json())
            .then(data => data.token)
            .then(token => setToken(token))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <Headers />
            <Heading />
            <Search />
            <Navigation DB_URL={DB_URL} />
            <Router>
                <>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/top" component={Top} />
                        <Route path="/sklepy" component={() => <Shops token={token} DB_URL={DB_URL} />} />
                        <Route path="/kody-promocyjne/:shop" component={() => <Shop token={token} />} />
                    </Switch>
                </>
            </Router>
            <Footer DB_URL={DB_URL} />
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);