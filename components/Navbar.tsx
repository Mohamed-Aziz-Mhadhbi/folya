import { prefix } from '@/prefix';

const Navbar = () => {
    return (
        <header>
            <div className="wrapper-bottom-header fixedmenu">
                <div className="bottom-header container flex-row">
                    <a id="logo" href="#home">
                        <img src={`${prefix}/image/logo.png`} alt="Logo" className="logo" />
                    </a>
                    <nav id="nav">
                        <a id="closemenu" className="btn" href="#">
                            <i className="fa-solid fa-xmark" />
                        </a>
                        <ul className="menu flex-row">
                            <li>
                                <a href="#Acceuil">ACCEUIL</a>
                            </li>
                            <li>
                                <a href="#A-propos">A PROPOS</a>
                            </li>
                            <li>
                                <a href="#Fonctionalites">FONCTIONALITES</a>
                            </li>
                            <li>
                                <a href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </nav>
                    <a className="btn appointment" href="#booking">
                        Devis
                    </a>
                    <a id="openmenu" className="btn" href="#">
                        <i className="fa-solid fa-bars" />
                    </a>
                </div>
            </div>

        </header>
    );
}

export default Navbar;
