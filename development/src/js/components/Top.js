import React, { useState, useEffect } from "react";
import {
    HashRouter as Router,
    NavLink
} from "react-router-dom";

const Top = ({ allVouchers, dateNow }) => {

    const [top, setTop] = useState([]);

    useEffect(() => {
        for (let i = 0; i <= allVouchers.length; i++) {
            if (i <= 20) {
                const random = Math.floor(Math.random() * allVouchers.length);
                setTop(prev => [...prev, allVouchers[random]]);
            }
        }
    }, [allVouchers]);

    return (
        <>
            <h2>Top 20 - najlepsze kody, kupony i promocje</h2>
            <div className="vouchers">
                {top.length == 21 ?
                    top?.map(m => (
                        <article key={m.index} className="vouchers--coupon">
                            <div className="vouchers--coupon__logo">
                                <Router>
                                    <NavLink to={"/kody-promocyjne/" + m.shopName}>
                                        <img src={"./../../assets/img/shops/" + m.shopName + ".webp"} alt={m.shopName} />
                                    </NavLink>
                                </Router>

                            </div>
                            <div className="vouchers--coupon__time">
                                <>
                                    {m.offerTypeName === "offer" ?
                                        <p>Promocja</p>
                                        : m.offerTypeName === "discount code"
                                            ? <p>Kod rabatowy</p>
                                            : <p>Darmowa wysyłka</p>}

                                    {m.finishDate ?
                                        <p>
                                            <i className="fas fa-clock" /> {Math.abs(Math.ceil(dateNow.getTime(m.finishDate) - dateNow.getTime() / (60 * 60 * 24 * 1000)) % 365)} dni
                                    </p>
                                        : <p><i className="fas fa-clock" /> Do odwołania</p>}
                                </>
                            </div>
                            <div className="vouchers--coupon__info">
                                <h3>{m.title}</h3>
                                <p>{m.description}</p>
                            </div>
                            <div className="vouchers--coupon__btn">
                                {m.code ?
                                    <a href={m.directLink}>Pokaż kod</a>
                                    : <a href={m.directLink} target="blank">Przejdź do promocji</a>}
                                <span>
                                    <i className="fas fa-heart" />
                                </span>
                            </div>
                        </article >
                    ))
                    : null}
            </div>
        </>
    );
}

export default Top;