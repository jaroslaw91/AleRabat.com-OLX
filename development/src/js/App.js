import React from "react";
import ReactDOM from "react-dom";
import "./../scss/main.scss";
import Headers from "./components/Header";
import NumbersOfVouchers from "./components/NumbersOfVouchers";

const App = () => {
    return (
        <>
            <Headers />
            <NumbersOfVouchers />
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);