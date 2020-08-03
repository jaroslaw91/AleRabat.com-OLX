import React from "react";

const Top = ({ allVouchers }) => {

    const dateNow = new Date();
    const dateEnd = new Date();

    return (
        <>
            <h2>Top 20 - najlepsze kody, kupony i promocje</h2>
            {allVouchers ?
                allVouchers[5]?.map(m => (
                    <article key={m.id} className="vouchers--voucher">
                        <div className="vouchers--voucher__logo">
                            {/* <img src={imgURL} alt={shop} /> */}
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
                                        <i className="fas fa-clock" /> {Math.abs(Math.ceil(dateNow.getTime() - dateEnd.getTime(allVouchers.finishDate) / (60 * 60 * 24 * 1000)) % 365)} dni
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
                : <p className="no-coupons">Sklep nie posiada w tej chwili kuponów rabatowych :(</p>}
        </>
    );
}

export default Top;