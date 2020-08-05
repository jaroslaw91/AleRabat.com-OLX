import React, { useState, useEffect } from "react";
import {
    HashRouter as Router,
    NavLink
} from "react-router-dom";

const Main = ({ shops }) => {
    const [slider, setSlider] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSlider(prev => prev - 158);
            if (slider === -1106) {
                setSlider(790);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [slider]);

    const onPrev = () => {
        slider === 790 ?
            setSlider(slider)
            : setSlider(prev => prev + 158)
    }

    const onNext = () => {
        slider === -1106 ?
            setSlider(slider)
            : setSlider(prev => prev - 158)
    }
    console.log(slider);

    return (
        <>
            <h2>Najpopularniejsze sklepy</h2>
            <div className="shops-list">
                <div className="shops-list--cover">
                    <div />
                    <div>
                        <span className="prev" onClick={onPrev}>
                            <i className="fas fa-chevron-left" />
                        </span>
                        <span className="next" onClick={onNext}>
                            <i className="fas fa-chevron-right" />
                        </span>
                    </div>
                    <div />
                </div>
                <div className="shops-list--container" style={{ left: slider }}>
                    <ul>
                        <Router>
                            {shops?.map(m => (
                                <NavLink key={m.id} exact to={"/kody-promocyjne/" + m.name}>
                                    <li key={m.id}>
                                        <img src={"./../../assets/img/shops/" + m.id + ".webp"} />
                                    </li>
                                </NavLink>
                            ))}
                        </Router>
                    </ul>
                </div>

            </div >
        </>
    );
}

export default Main;