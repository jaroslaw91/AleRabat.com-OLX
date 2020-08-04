import React from "react";

const Main = ({ shops }) => {
    return (
        <>
            <h2>Najpopularniejsze sklepy</h2>
            <div className="shops-list">
                <div className="shops-list--cover">
                    <div />
                    <div />
                    <div />
                </div>
                <div className="shops-list--container">
                    <ul>
                        {shops?.map(m => (
                            <li key={m.id}>
                                <img src={"./../../assets/img/shops/" + m.id + ".webp"} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Main;