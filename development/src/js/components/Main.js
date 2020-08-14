import React, { useState, useEffect, Fragment } from "react";
import {
    HashRouter as Router,
    NavLink
} from "react-router-dom";
import Clipboard from 'react-clipboard.js';

const Main = ({ shops, allVouchers, dateNow }) => {

    const [slider, setSlider] = useState(0);
    const [code, setCode] = useState(false);
    const [id, setId] = useState();

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

    const getCode = e => {
        const id = e.target.id
        setId(id);
        setCode(true);
    }

    const getExit = () => {
        setCode(false);
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
                    <Fragment key={m.id}>
                        <article className="vouchers--coupon">
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
                                            <i className="fas fa-clock" /> {(Math.ceil(((new Date(m.finishDate).getTime() / 1000) - (Math.ceil(Date.now() / 1000))) / 60 / 60 / 24) - 1) > 1 ?
                                                Math.ceil(((new Date(m.finishDate).getTime() / 1000) - (Math.ceil(Date.now() / 1000))) / 60 / 60 / 24) - 1 + " dni"
                                                : (Math.ceil(((new Date(m.finishDate).getTime() / 1000) - (Math.ceil(Date.now() / 1000))) / 60 / 60 / 24) - 1) < 1 ?
                                                    " Kończy się dziś"
                                                    : Math.ceil(((new Date(m.finishDate).getTime() / 1000) - (Math.ceil(Date.now() / 1000))) / 60 / 60 / 24) - 1 + " dzień"}
                                        </p>
                                        : <p>
                                            <i className="fas fa-clock" /> Do odwołania
                                                </p>}
                                </>
                            </div>
                            <div className="vouchers--coupon__info">
                                <h3>{m.title}</h3>
                                <p>{m.description}</p>
                            </div>
                            <div className="vouchers--coupon__btn">
                                {m.code ?
                                    <span className="link" onClick={getCode} id={m.id}>Pokaż kod</span>
                                    : <a href={m.directLink} target="blank">Przejdź do promocji</a>}
                                <span>
                                    <i className="fas fa-heart" />
                                </span>
                            </div>
                        </article>
                        {code && id == m.id ?
                            <div key={m.id} className="vouchers--code">
                                <div className="close" onClick={getExit}>
                                    <span />
                                    <span />
                                </div>
                                <div className="vouchers--code__info">
                                    <div className="vouchers--code__info-left">
                                        <div className="left-logo">
                                            <Router>
                                                <NavLink to={"/kody-promocyjne/" + m.shopName}>
                                                    <img src={"./../../assets/img/shops/" + m.shopName + ".webp"} alt={m.shopName} />
                                                </NavLink>
                                            </Router>
                                        </div>
                                        <div className="left-code">
                                            <p>Kod rabatowy</p>
                                        </div>
                                        <div className="left-info">
                                            <h3>{m.title}</h3>
                                            <p>{m.description}</p>
                                        </div>
                                        <div className="left-time">
                                            <h4>Warunki:</h4>
                                            <p>
                                                Ważność kuponu: <span>
                                                    {dateNow.getDate(m.finishDate) > 9 ?
                                                        dateNow.getDate(m.finishDate)
                                                        : "0" + dateNow.getDate(m.finishDate)}
                                                    .{dateNow.getMonth(m.finishDate) > 10 ?
                                                        dateNow.getMonth(m.finishDate) + 1
                                                        : "0" + (dateNow.getMonth(m.finishDate) + 1)}
                                                    .{dateNow.getFullYear(m.finishDate)}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="vouchers--code__info-right">
                                        <Clipboard className="copy-code" data-clipboard-text={m.code.codeValue}>
                                            {m.code.codeValue}
                                        </Clipboard>
                                        <p>Kliknij w kod, aby skopiować</p>
                                        <div className="info-code">
                                            Wklej kod w koszyku zamówienia na stronie <a href={m.directLink} target="blank">{m.shopName}</a>
                                            <div className="info-time">
                                                <i className="fas fa-clock" /> 1 dzień
                                                    </div>
                                        </div>
                                        <span className="info-like">
                                            <i className="fas fa-heart" /> 30
                                                </span>


                                    </div>
                                </div>
                            </div>
                            : null}
                    </Fragment>
                ))}
            </div>
            <div className="info">
                <div className="info--img">
                    <img src="./../../assets/img/olx_info.png" />
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