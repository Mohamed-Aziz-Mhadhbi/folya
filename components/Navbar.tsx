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
                                <Link href="/[slug]" as="/acceuil">
                                    <a>ACCEUIL</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/[slug]" as="/aboutus">
                                    <a>A PROPOS</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/[slug]" as="/avantage">
                                    <a>AVANTAGES</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/[slug]" as="/services">
                                    <a>FONCTIONALITÉS</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/[slug]" as="/faq">
                                    <a>FAQ</a>
                                </Link>
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