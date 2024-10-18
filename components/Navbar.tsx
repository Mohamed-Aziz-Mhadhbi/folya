import { prefix } from '@/prefix';
import Link from 'next/link';

const Navbar = () => {
    return (
        <header>
            <div className="wrapper-bottom-header">
                <div className="bottom-header container flex-row">
                    <a id="logo" href="#offer">
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
                                <a href="#services">FONCTIONALITÉS</a>
                            </li>
                            <li>
                                <a href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <a className="appointment">
                            Vous êtes professionnel paramédical ?
                        </a>
                        <a className="btn appointment" href="https://www.folya.co/login">
                            Connexion
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