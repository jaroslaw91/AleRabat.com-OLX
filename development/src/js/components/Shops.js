import React, { useState, useEffect } from "react";

const Shops = ({ token }) => {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        if (token) {
            fetch(process.env.DB_HOST + "shops", {
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => setShops(data))
                .catch(error => console.log(error));
        }
    }, []);

    return (
        <>
            <div className="shops">
                <div className="shops--container">
                    <h2>Wszystkie sklepy</h2>
                    <div className="shops--container__sort">
                        <span>0-9</span>
                        <span>A</span>
                        <span>B</span>
                        <span>C</span>
                        <span>D</span>
                        <span>E</span>
                        <span>F</span>
                        <span>G</span>
                        <span>H</span>
                        <span>I</span>
                        <span>J</span>
                        <span>K</span>
                        <span>L</span>
                        <span>M</span>
                        <span>N</span>
                        <span>O</span>
                        <span>P</span>
                        <span>Q</span>
                        <span>R</span>
                        <span>S</span>
                        <span>T</span>
                        <span>V</span>
                        <span>W</span>
                        <span>X</span>
                        <span>Y</span>
                        <span>Z</span>
                    </div>
                    <div className="shops--container__box">
                        <h3>0-9</h3>
                        <ul>
                            {shops
                                ?.filter(e => Number(e.name.charAt(0)))
                                .map(e => (
                                    <li key={e.id}>{e.name}</li>
                                ))}
                        </ul>
                    </div>
                    <div className="shops--container__box">
                        <h3>A</h3>
                        <ul>
                            {shops
                                ?.filter(e => e.name.charAt(0) === "a" || e.name.charAt(0) === "A")
                                .map(e => (
                                    <li key={e.id}>{e.name}</li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shops;