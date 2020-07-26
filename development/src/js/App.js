import React from "react";
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

const App = () => {
    return (
        <>
            <Headers />
            <Heading />
            <Search />
            <Navigation />
            <Router>
                <>
                    <Switch>
                        {/* <Route exact path="/" component={Main} /> */}
                        {/* <Route path="/top" component={Top} /> */}
                        {/* <Route path="/sklepy" component={Shops} /> */}
                    </Switch>
                </>
            </Router>
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);