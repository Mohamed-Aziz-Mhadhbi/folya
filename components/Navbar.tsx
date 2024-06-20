"use client"
import { useState } from 'react';
import { prefix } from '@/prefix';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="wrapper-bottom-header fixedmenu">
                <div className="bottom-header container">
                    <a id="logo" href="#home">
                        <img src={`${prefix}/image/logo.png`} alt="Logo" className="logo" />
                    </a>
                    <nav id="nav" className={menuOpen ? 'open' : ''}>
                        <a id="closemenu" className="btn" href="#" onClick={toggleMenu}>
                            <i className="fa-solid fa-xmark" />
                        </a>
                        <ul className="menu">
                            <li>
                                <a href="#Acceuil">ACCEUIL</a>
                            </li>
                            <li>
                                <a href="#A-propos">A PROPOS</a>
                            </li>
                            <li>
                                <a href="#Avantages">AVANTAGES</a>
                            </li>
                            <li>
                                <a href="#Fonctionalites">FONCTIONALITES</a>
                            </li>
                            <li>
                                <a href="#faq">FAQ</a>
                            </li>
                            <div className="menu-buttons">
                                <a className="btn" href="#booking">Contact</a>
                                <a className="btn" href="#">Connexion</a>
                            </div>
                        </ul>
                    </nav>
                    <div className="buttons">
                        <a className="btn" href="#">Démo</a>
                        <a id="openmenu" className="btn" href="#" onClick={toggleMenu}>
                            <i className="fa-solid fa-bars" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
