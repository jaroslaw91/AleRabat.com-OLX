import React, { useState, useEffect, Fragment } from "react";
import {
    HashRouter as Router,
    NavLink
} from "react-router-dom";
import Clipboard from 'react-clipboard.js';

const Top = ({ allVouchers, dateNow }) => {

    const [top, setTop] = useState([]);
    const [code, setCode] = useState(false);
    const [id, setId] = useState();

    useEffect(() => {
        for (let i = 0; i <= allVouchers.length; i++) {
            if (i <= 20) {
                const random = Math.floor(Math.random() * allVouchers.length);
                setTop(prev => [...prev, allVouchers[random]]);
            }
        }
    }, [allVouchers]);

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
            <h2>Top 20 - najlepsze kody, kupony i promocje</h2>
            <div className="vouchers">
                {top.length == 21 ?
                    top?.map(m => (
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
                    ))
                    : null}
            </div>
        </>
    );
}

export default Top;