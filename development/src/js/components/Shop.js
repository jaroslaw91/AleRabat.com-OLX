import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    HashRouter as Router,
    NavLink
} from "react-router-dom";

const Shop = ({ token, shops }) => {
    const { shop } = useParams();
    const [vouchers, setVouchers] = useState([]);

    const shopName = shops.filter(f => f.name === shop);
    const shopId = shopName[0].id;

    const dateNow = new Date();
    const dateEnd = new Date();
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
                .then(vouchers => setVouchers(vouchers))
                .catch(error => console.log(error));
        }
    }, [shop]);

    return (
        <>
            <h2>Kod rabatowy {shop} &#9702; {monthNames[dateNow.getMonth()]} {dateNow.getFullYear()}</h2>
            <div className="shop">
                <div className="shop--info">
                    <div className="shop--info__logo">
                        <img src={imgURL} alt={shop} />
                    </div>
                    <h3>{shop}</h3>
                    <h3>Zobacz także kupony rabatowe i promocje w najpopularniejszych sklepach</h3>
                    <div className="shop--info__logo-list" >
                        <ul>
                            <Router>
                                {shops?.map(m => (
                                    <NavLink key={m.id} exact to={"/kody-promocyjne/" + m.name}>
                                        <li key={m.id}>
                                            <img src={"./../../assets/img/shops/" + m.id + ".webp"} alt={shop} />
                                        </li>
                                    </NavLink>
                                ))}
                            </Router>

                        </ul>
                    </div>
                    <h3>Zobacz także kupony rabatowe i promocje w podobnych sklepach</h3>
                    <ul>
                        <Router>
                            {shops?.map(m => (
                                <NavLink key={m.id} exact to={"/kody-promocyjne/" + m.name}>
                                    <li className="shop--info__shops-list">{m.name}</li>
                                </NavLink>
                            ))}
                        </Router>

                    </ul>
                </div>

                <div className="vouchers">
                    {vouchers.length ?
                        vouchers?.map(m => (
                            <article key={m.id} className="vouchers--voucher">
                                <div className="vouchers--voucher__logo">
                                    <img src={imgURL} alt={shop} />
                                </div>
                                <div className="vouchers--voucher__time">
                                    <>
                                        {m.offerTypeName === "offer"
                                            ? <p>Promocja</p>
                                            : m.offerTypeName === "discount code"
                                                ? <p>Kod rabatowy</p>
                                                : <p>Darmowa wysyłka</p>}

                                        {m.finishDate ?
                                            <p>
                                                <i className="fas fa-clock" /> {Math.abs(Math.ceil(dateEnd.getTime(vouchers.finishDate) - dateNow.getTime() / (60 * 60 * 24 * 1000)) % 365)} dni
                                           </p>
                                            : <p><i className="fas fa-clock" /> Do odwołania</p>}
                                    </>
                                </div>
                                <div className="vouchers--voucher__info">
                                    <h3>{m.title}</h3>
                                    <p>{m.description}</p>
                                </div>
                                <div className="vouchers--voucher__btn">
                                    {m.code ? <a href={m.directLink}>Pokaż kod</a> : <a href={m.directLink} target="blank">Przejdź do promocji</a>}
                                    <span><i className="fas fa-heart"></i></span>
                                </div>
                            </article>
                        ))
                        : <p className="no-coupons">W tej chwili brak kuponów dla tego sklepu :(</p>
                    }
                </div>
            </div>
        </>
    );
}

export default Shop;