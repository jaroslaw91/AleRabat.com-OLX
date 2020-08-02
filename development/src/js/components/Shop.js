import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    HashRouter as Router,
    NavLink
} from "react-router-dom";

const Shop = ({ token, shops }) => {
    const { shop } = useParams();
    const [vouchers, setVouchers] = useState([]);

    const shopName = shops.filter(e => e.name === shop);
    // if (!shopName[0]) {
    //     return null;
    // }
    const shopId = shopName[0].id;
    const dateNow = new Date();
    const monthNames = [
        "Styczeń",
        "Luty",
        "Marzec",
        "Kwiecień",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpień",
        "Wrzesień",
        "Październik",
        "Listopadf",
        "Grudzień"
    ];

    const imgURL = `./../../assets/img/shops/${shopId}.webp`;

    useEffect(() => {
        if (token) {
            fetch(process.env.DB_HOST + "shops/" + shopId + "/vouchers", {
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => setVouchers(data))
                .catch(error => console.log(error));
        }
    }, []);

    console.log(vouchers);

    return (
        <div className="shop">
            <div className="shop--container">
                <h2>Kod rabatowy {shop} &#9702; {monthNames[dateNow.getMonth()]} {dateNow.getFullYear()}</h2>
                <div className="shop--container__shop">
                    <div className="shop--container__shop-info">
                        <div className="shop-logo">
                            <img src={imgURL} alt={shop} />
                        </div>
                        <h3>{shop}</h3>
                        <h3>Zobacz także kupony rabatowe i promocje w podobnych sklepach</h3>
                        <ul>
                            <Router>
                                {shops?.map(m => (
                                    <NavLink key={m.id} exact to={"/kody-promocyjne/" + m.name}>
                                        <li>{m.name}</li>
                                    </NavLink>
                                ))}
                            </Router>

                        </ul>
                    </div>

                    <div className="shop--container__shop-vouchers">
                        {vouchers.length
                            ? vouchers?.map(m => (
                                <article key={m.id} className="voucher">
                                    <div className="voucher-logo">
                                        <img src={imgURL} alt={shop} />
                                    </div>
                                    <div className="voucher-time">
                                        <>
                                            {m.offerTypeName === "offer" ? <p>Promocja</p> : m.offerTypeName === "discount code" ? <p>Kod rabatowy</p> : <p>Darmowa wysyłka</p>}

                                            {m.finishDate ?
                                                <p>
                                                    <i className="fas fa-clock" /> 2 dni
                                                </p>
                                                : <p>
                                                    <i className="fas fa-clock" /> Do odwołania
                                                </p>}
                                        </>
                                    </div>
                                    <div className="voucher-info">
                                        <h3>{m.title}</h3>
                                        <p>{m.description}</p>
                                    </div>
                                    <div className="voucher-btn">
                                        {m.code ? <a href={m.directLink}>Pokaż kod</a> : <a href={m.directLink} target="blank">Przejdź do promocji</a>}
                                        <span><i className="fas fa-heart"></i></span>
                                    </div>
                                </article>
                            ))
                            : <p>Brak kuponów</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;