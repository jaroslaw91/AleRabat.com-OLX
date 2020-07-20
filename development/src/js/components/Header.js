import React from "react";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header--container">
                    <img src="./../../assets/img/olx_logo.png" alt="Logo OLX" title="Ogłoszenia - Sprzedam, kupię na OLX.pl" />
                    <div className="header--container__wrapper">
                        <ul>
                            <li>
                                <a href="/">
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