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
                        <a id="closemenu" className="btn close-btn" href="#" onClick={toggleMenu}>
                            <i className="fa-solid fa-xmark" />
                        </a>
                        <ul className="menu">
                            <li>
                                <a href="#acceuil" onClick={toggleMenu}>
                                    ACCEUIL
                                </a>
                            </li>
                            <li>
                                <a href="#a-propos" onClick={toggleMenu}>
                                    A PROPOS
                                </a>
                            </li>
                            <li>
                                <a href="#avantages" onClick={toggleMenu}>
                                    AVANTAGES
                                </a>
                            </li>
                            <li className="menu-item-hidden">
                                <a href="#fonctionalites" onClick={toggleMenu}>
                                    FONCTIONALITES
                                </a>
                            </li>
                            <li className="menu-item-hidden">
                                <a href="#faq" onClick={toggleMenu}>
                                    FAQ
                                </a>
                            </li>
                            <div className="menu-buttons">
                                <a className="btn" href="#booking">Contact</a>
                                <a className="btn" href="#">Connexion</a>
                                <a className="btn" href="#">Devis</a>
                            </div>
                        </ul>
                    </nav>
                    <a className="btn menu-toggle-btn" href="#" onClick={toggleMenu}>
                        <i className="fa-solid fa-bars" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
