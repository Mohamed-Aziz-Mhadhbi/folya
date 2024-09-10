"use client";
import { prefix } from '@/prefix';

const Navbar = () => {
    return (
        <header>
            <div className="wrapper-bottom-header">
                <div className="bottom-header container flex-row">
                    <a id="logo" href="#home">
                        <img src={`${prefix}/image/logo.png`} alt="" className="logo" />
                    </a>
                    <nav id="nav">
                        <a id="closemenu" className="btn" href="#">
                            <i className="fa-solid fa-xmark" />
                        </a>
                        <ul className="menu">
                            <li>
                                <a href="#offer">ACCEUIL</a>
                            </li>
                            <li>
                                <a href="#aboutus">A PROPOS</a>
                            </li>
                            <li>
                                <a href="#avantage">AVANTAGES</a>
                            </li>
                            <li>
                                <a href="#services">FONCTIONALITES</a>
                            </li>
                            <li>
                                <a href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <a className="btn appointment" href="#contacts">
                            Contact
                        </a>
                        <a className="btn appointment" href="https://www.folya.co/login">
                            Connexion
                        </a>
                        <a className="btn appointment" href="#booking">
                            Démo
                        </a>
                    </nav>
                    <a id="openmenu" className="btn" href="#">
                        <i className="" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
