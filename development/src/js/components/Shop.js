import React from "react";
import {
    HashRouter as Router,
    NavLink,
    useParams
} from "react-router-dom";

const Shop = ({ shops, allVouchers, monthNames, dateNow }) => {

    const { shop } = useParams();

    return (
        <>
            <h2>Kod rabatowy {shop} &#9702; {monthNames[dateNow.getMonth()]} {dateNow.getFullYear()}</h2>
            <div className="shop">
                <div className="shop--info">
                    <div className="shop--info__logo">
                        <img src={"./../../assets/img/shops/" + shop + ".webp"} alt={shop} />
                    </div>
                    <h3>{shop}</h3>
                    <h3>Zobacz także kupony rabatowe i promocje w najpopularniejszych sklepach</h3>
                    <div className="shop--info__logo-list" >
                        <ul>
                            <Router>
                                {shops?.map(m => (
                                    <NavLink key={m.id} exact to={"/kody-promocyjne/" + m.name}>
                                        <li key={m.id}>
                                            <img src={"./../../assets/img/shops/" + m.name + ".webp"} alt={m.name} />
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
                    {allVouchers?.filter(f => f.shopName === shop)
                        .map(m => (
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


                {/* <div className="vouchers" >
                    {vouchers.length ?
                        vouchers?.map(m => (
                            <article key={m.id} className="vouchers--coupon">
                                <div className="vouchers--coupon__logo">
                                    <img src={imgURL} alt={shop} />
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
                                    {m.code ? <a href={m.directLink}>Pokaż kod</a> : <a href={m.directLink} target="blank">Przejdź do promocji</a>}
                                    <span><i className="fas fa-heart"></i></span>
                                </div>
                            </article>
                        ))
                        : <p className="no-coupons">W tej chwili brak kuponów dla tego sklepu :(</p>
                    }
                </div> */}
            </div>
        </>
    );
}

export default Shop;