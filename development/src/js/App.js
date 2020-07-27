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
import Footer from "./components/Footer";

const App = ({ shops }) => {
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
            <Navigation />
            <Router>
                <>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/top" component={Top} />
                        <Route path="/sklepy" component={() => <Shops token={token} />} />
                    </Switch>
                </>
            </Router>
            <Footer />
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);