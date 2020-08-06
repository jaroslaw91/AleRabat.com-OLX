import React, { useState, useEffect } from "react";

const Footer = ({ DB_URL }) => {

    const [footerLinks, setFooterLinks] = useState([]);

    useEffect(() => {
        fetch(DB_URL + "footer")
            .then(res => res.json())
            .then(data => setFooterLinks(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <footer className="footer">
            <div className="footer--container">
                <div className="footer--container__box">
                    <ul>
                        {footerLinks.part1?.map(m => (
                            <li key={m.id}>
                                <a href={m.url}>{m.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer--container__box">
                    <ul>
                        {footerLinks.part2?.map(m => (
                            <li key={m.id}>
                                <a href={m.url}>{m.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer--container__box">
                    <p>Śledź nas na</p>
                    <ul>
                        {footerLinks.social?.map(m => (
                            <li key={m.id}>
                                <a href={m.url} target="_blank">
                                    <i className={m.class} />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p>Pobierz aplikację mobilną</p>
                    <ul>
                        {footerLinks.mobileapp?.map(m => (
                            <li key={m.id}>
                                <a href={m.url} target="_blank">
                                    <img src={m.img} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;