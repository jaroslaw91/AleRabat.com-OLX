import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer--container">
                    <div className="footer--container__box">
                        <ul>
                            <li>
                                <a href="#">Aplikacje mobilne OLX.pl</a>
                            </li>
                            <li>
                                <a href="#">Pomoc</a>
                            </li>
                            <li>
                                <a href="#">Wyróżnione ogłoszenia</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Regulamin</a>
                            </li>
                            <li>
                                <a href="#">Polityka prywatności</a>
                            </li>
                            <li>
                                <a href="#">Reklama</a>
                            </li>
                            <li>
                                <a href="#">Biuro prasowe</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer--container__box">
                        <ul>
                            <li>
                                <a href="#">Jak działa OLX.pl</a>
                            </li>
                            <li>
                                <a href="#">Zasady bezpieczeństwa</a>
                            </li>
                            <li>
                                <a href="#">Mapa kategorii</a>
                            </li>
                            <li>
                                <a href="#">Mapa miejscowości</a>
                            </li>
                            <li>
                                <a href="#">Popularne wyszukiwania</a>
                            </li>
                            <li>
                                <a href="#">Kariera</a>
                            </li>
                            <li>
                                <a href="#">Preferencje reklamowe</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer--container__box">
                        <p>Śledź nas na</p>
                        <ul>
                            <li>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </li>
                        </ul>
                        <p>Pobierz aplikację mobilną</p>
                        <ul>
                            <li>
                                <a href="#"><img src="./../../assets/img/app-store-badge.png"></img></a>
                            </li>
                            <li>
                                <a href="#"><img src="./../../assets/img/google-play-badge.png"></img></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;