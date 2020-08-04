import React, { useState } from "react";
import {
    HashRouter as Router,
    NavLink
} from "react-router-dom";

const Main = ({ shops }) => {
    const [slider, setSlider] = useState({
        prev: 0,
        next: 0
    })

    const onPrev = () => {
        slider.next === 0 ?
            setSlider({
                next: slider.next,
            })
            : setSlider({
                next: slider.next + 158
            })
    }

    const onNext = () => {
        slider.next === -948 ?
            setSlider({
                next: slider.next,
            })
            : setSlider({
                next: slider.next - 158
            })
    }

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
                <div className="shops-list--container" style={{ left: slider.next }}>
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