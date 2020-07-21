import React from "react";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header--container">
                    <a href="/">
                        <img src="./../../assets/img/olx_logo.png" alt="Logo OLX" title="Ogłoszenia - Sprzedam, kupię na OLX.pl" />
                    </a>
                    <div className="header--container__wrapper">
                        <ul>
                            <li>
                                <a href="/" title="Obserwowane">
                                    <i className="far fa-heart"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="far fa-user"></i>
                                    <span>Moje konto</span>
                                </a>
                            </li>
                        </ul>
                        <a className="btn--add" href="/">
                            <span>Dodaj ogłoszenie</span>
                            <i className="fas fa-plus"></i>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;