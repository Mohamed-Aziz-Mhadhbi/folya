"use client"
import { useState } from 'react';
import { prefix } from '@/prefix';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="wrapper-top-header">
                <div className="header-top container flex-row">
                    <div className="header-contact flex-row">
                        <p>
                            <i className="fas fa-map-marker-alt" />
                            2900 Lapeer Rd, Port Hurons, MI 49070
                        </p>
                        <a href="#">
                            <i className="fas fa-phone" />
                            +1 (800) 478-42-51
                        </a>
                    </div>
                    {/*/.header-contact*/}
                    <ul className="social-link">
                        <li>
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-youtube" />
                            </a>
                        </li>
                    </ul>
                    {/*/.social-link*/}
                </div>
                {/*/.header-top*/}
            </div>
            {/*/.wrapper-top-header*/}
            <div className="wrapper-bottom-header">
                <div className="bottom-header container flex-row">
                    <a id="logo" href="#home">
                        <img src="images/logo.png" alt="" />
                    </a>
                    <nav id="nav">
                        <a id="closemenu" className="btn" href="#">
                            <i className="fa-solid fa-xmark" />
                        </a>
                        <ul className="menu">
                            <li>
                                <a href="#home">ACCEUIL</a>
                            </li>
                            <li>
                                <a href="#aboutus">A PROPOS</a>
                            </li>
                            <li>
                                <a href="#services">AVANTAGES</a>
                            </li>
                            <li>
                                <a href="#services">FONCTIONALITES</a>
                            </li>
                            <li>
                                <a href="#faq">FAQ</a>
                            </li>
                            <li>
                                <a href="#contacts">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    {/*#nav*/}
                    <a className="btn appointment" href="#booking">
                        Appointment
                    </a>
                    <a id="openmenu" className="btn" href="#">
                        <i className="fa-solid fa-bars" />
                    </a>
                </div>
                {/*/.bottom-header*/}
            </div>
            {/*/.wrapper-bottom-header*/}
        </header>

        // <header>
        //     <div className="wrapper-bottom-header fixedmenu">
        //         <div className="bottom-header container">
        //             <a id="logo" href="#home">
        //                 <img src={`${prefix}/image/logo.png`} alt="Logo" className="logo" />
        //             </a>
        //             <nav id="nav" className={menuOpen ? 'open' : ''}>
        //                 <a id="closemenu" className="btn close-btn" href="#" onClick={toggleMenu}>
        //                     <i className="fa-solid fa-xmark" />
        //                 </a>
        //                 <ul className="menu">
        //                     <li>
        //                         <a href="#acceuil" onClick={toggleMenu}>
        //                             ACCEUIL
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="#a-propos" onClick={toggleMenu}>
        //                             A PROPOS
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a href="#avantages" onClick={toggleMenu}>
        //                             AVANTAGES
        //                         </a>
        //                     </li>
        //                     <li >
        //                         <a href="#fonctionalites" onClick={toggleMenu}>
        //                             FONCTIONALITES
        //                         </a>
        //                     </li>
        //                     <li >
        //                         <a href="#faq" onClick={toggleMenu}>
        //                             FAQ
        //                         </a>
        //                     </li>
        //                     <li>
        //                     <div className="menu-buttons">
        //                         <a className="btn" href="#booking">Contact</a>
        //                         <a className="btn" href="#">Connexion</a>
        //                         <a className="btn" href="#">Devis</a>
        //                     </div>
        //                     </li>
        //                 </ul>
        //             </nav>
        //             <a className="btn menu-toggle-btn" href="#" onClick={toggleMenu}>
        //                 <i className="fa-solid fa-bars" />
        //             </a>
        //         </div>
        //     </div>
        // </header>
    );
}

export default Navbar;
