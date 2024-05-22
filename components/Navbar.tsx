import Image from "@/node_modules/next/image";

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
                    <ul className="social-link flex-row">
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
                </div>
            </div>
            <div className="wrapper-bottom-header fixedmenu">
                <div className="bottom-header container flex-row">
                    <a id="logo" href="#home">
                        <img src="/folya/logo.png" alt="Logo" className="logo" />
                    </a>
                    <nav id="nav">
                        <a id="closemenu" className="btn" href="#">
                            <i className="fa-solid fa-xmark" />
                        </a>
                        <ul className="menu flex-row">
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
                    <a className="btn appointment lg:flexCenter hidden" href="#booking">
                        Devis
                    </a>
                    <a id="openmenu" className="btn" href="#">
                        <i className="fa-solid fa-bars" />
                    </a>
                </div>
            </div>
            <Image 
        src="/folya/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        />
        </header>
    );
}

export default Navbar;
