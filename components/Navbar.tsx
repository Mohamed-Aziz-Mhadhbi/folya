
const Navbar = () => {
    return (
        <header>
            <div className="wrapper-top-header">
                <div className="header-top container flex-row">
                    <div className="header-contact flex-row">
                        <p>
                            <i className="fas fa-map-marker-alt" />
                            Cité El Wafa - Nabeul 8062
                        </p>
                        <a href="#">
                            <i className="fas fa-phone" />
                            +216 27 405 988
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
            <div className="wrapper-bottom-header fixedmenu">
                <div className="bottom-header container flex-row">
                    <a id="logo" href="#home">
                        <img src="/logo.png" alt="" style={{ width: '90px', height: '30px' }} />
                    </a>
                    <nav id="nav" style={{ left: "-320px" }}>
                        <a id="closemenu" className="btn" href="#">
                            <i className="fa-solid fa-xmark" />
                        </a>
                        <ul className="menu">
                            <li>
                                <a href="#Acceuil">Acceuil</a>
                            </li>
                            <li>
                                <a href="#Fonctionalites">Fonctionalites</a>
                            </li>
                            <li>
                                <a href="#A-propos">A propos</a>
                            </li>
                            <li>
                                <a href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </nav>
                    {/*#nav*/}
                    <a className="btn appointment" href="#booking">
                        Devis
                    </a>
                    <a id="openmenu" className="btn" href="#">
                        <i className="fa-solid fa-bars" />
                    </a>
                </div>
                {/*/.bottom-header*/}
            </div>
            {/*/.wrapper-bottom-header*/}
        </header>
    );
}

export default Navbar;
