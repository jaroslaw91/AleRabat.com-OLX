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
import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";

const DB_URL = `http://localhost:3005/`;

const App = () => {
    const [state, setState] = useState({
        token: null,
        letters: [],
        shops: [],
    });
    const [vouchers, setVouchers] = useState([]);

    useEffect(() => {
        fetchToken();
    }, []);

    const fetchToken = () => {
        return fetch(process.env.DB_HOST + "login_check", {
            method: "POST",
            body: "_username=" + process.env.DB_USER + "&_password=" + process.env.DB_PASSWORD,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(res => res.json())
            .then(data => data.token)
            .then(token => {
                fetchShopsLetters(token)
            });
    }

    const fetchShopsLetters = token => {
        return fetch(DB_URL + "letters")
            .then(res => res.json())
            .then(letters => {
                fetchShopsList(token, letters)
            })
            .catch(error => console.log(error));
    }

    const fetchShopsList = (token, letters) => {
        return fetch(process.env.DB_HOST + "shops", {
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(shops => {
                setState({
                    token,
                    letters,
                    shops: shops.filter(f => (
                        f.id === 1982 || f.id === 1991 || f.id === 1992
                        || f.id === 2002 || f.id === 5902 || f.id === 3096
                        || f.id === 2046 || f.id === 2052 || f.id === 3412
                        || f.id === 3486 || f.id === 2124 || f.id === 2342
                        || f.id === 2346 || f.id === 2370 || f.id === 2379
                        || f.id === 2473 || f.id === 2740 || f.id === 2951
                        || f.id === 2782 || f.id === 5562 || f.id === 2985
                    ))
                });
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <Headers />
            <Heading shops={state.shops} />
            <Search shops={state.shops} />
            <Nav DB_URL={DB_URL} />
            <Content token={state.token} shops={state.shops} letters={state.letters} />
            <Footer DB_URL={DB_URL} />
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);