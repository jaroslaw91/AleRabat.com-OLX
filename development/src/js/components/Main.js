import React, { useState, useEffect } from "react";
import {
    HashRouter as Router,
    NavLink
} from "react-router-dom";

const Main = ({ shops, allVouchers, dateNow }) => {

    const [slider, setSlider] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlider(prev => prev - 158);
            if (slider === -948) {
                setSlider(948);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [slider]);

    const onPrev = () => {
        slider === 948 ?
            setSlider(slider)
            : setSlider(prev => prev + 158);
    }

    const onNext = () => {
        slider === -948 ?
            setSlider(slider)
            : setSlider(prev => prev - 158);
    }

    return (
        <>
            <h2>Najpopularniejsze sklepy</h2>
            <div className="slider">
                <div className="slider--cover">
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
                <div className="slider--container" style={{ left: slider }}>
                    <ul>
                        <Router>
                            {shops?.map(m => (
                                <NavLink key={m.id} exact to={"/kody-promocyjne/" + m.name}>
                                    <li key={m.id}>
                                        <img src={"./../../assets/img/shops/" + m.name + ".webp"} />
                                    </li>
                                </NavLink>
                            ))}
                        </Router>
                    </ul>
                </div>
            </div>
            <div className="popular">
                <h2>Najpopularniejsze promocje</h2>
                <Router>
                    <NavLink to="/sklepy">
                        <span>Pokaż wszystkie</span>
                        <i className="fas fa-chevron-right" />
                    </NavLink>
                </Router>
            </div>
            <div className="vouchers">
                {allVouchers?.map(m => (
                    <article key={m.id} className="vouchers--coupon">
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
                ))}
            </div>
            <div className="info">
                <div className="info--img">
                    <img src="./../../../assets/img/olx_info.png" />
                </div>
                <div className="info--text">
                    <h3>Najlepsze okazje w internecie</h3>
                    <p>Na serwisie znajdziesz najciekawsze promocje oraz rabaty, dzięki którym Twoje zakupy będą jeszcze tańsze. Korzystaj z atrakcyjnych okazji do różnych sklepów internetowych i kupuj bez wychodzenia z domu!</p>
                    <h3>Promocje, obniżki, rabaty</h3>
                    <p>Wszystkie najlepsze okazje, wyprzedaże i rabaty w jednym miejscu! Oszczędzaj na swoich zakupach, dzięki aktualnym kuponom rabatowym oraz zniżkom do wielu sklepów. Oferujemy Ci setki rabatów na różne produkty, z których możesz skorzystać w dowolnej chwili!</p>
                    <h3>Aktualna i sprawdzona oferta</h3>
                    <p>Na naszym serwisie publikujemy zawsze aktualne i najlepsze okazje. Wszystkie oferty są regularnie sprawdzane, tak abyś mógł zawsze znaleźć najnowsze rabaty na ulubione produkty i usługi. A co najważniejsze, wszystkie kupony udostępniamy za damo!</p>
                </div>
            </div>
        </>
    );
}

export default Main;