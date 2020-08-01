import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

    return (
        <>
            <div className="shop">
                <div className="shop--container">
                    <h2>Kod rabatowy {shop} &#9702; {monthNames[dateNow.getMonth()]} {dateNow.getFullYear()}</h2>
                    <div className="shop--container__shop">
                        <div className="shop--container__shop-info">
                            <div>
                                <img src={imgURL} alt={shop} />
                            </div>
                            <h3>{shop}</h3>
                        </div>

                        <div className="shop--container__shop-vouchers">
                            {vouchers?.map(m => (
                                <div key={m.id}>
                                    <img src={imgURL} alt={shop} />
                                    {m.shopName}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;