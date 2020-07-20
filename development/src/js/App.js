import React from "react";
import ReactDOM from "react-dom";
import "./../scss/main.scss";
import Headers from "./components/Header";

const App = () => {
    return (
        <>
            <Headers />
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);