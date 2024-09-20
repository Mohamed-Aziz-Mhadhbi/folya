import { prefix } from '@/prefix';
import Link from 'next/link';

const Navbar = () => {
    return (
        <header>
            <div className="wrapper-bottom-header">
                <div className="bottom-header container flex-row">
                    <Link id="logo" href="/">
                        <img src={`${prefix}/image/logo.png`} alt="" className="logo" />
                    </Link>
                    <nav id="nav">
                        <a id="closemenu" className="btn" href="#">
                            <i className="fa-solid fa-xmark" />
                        </a>
                        <ul className="menu">
                            <li>
                                <Link href="/">ACCEUIL</Link>
                            </li>
                            <li>
                                <Link href="/aboutus">A PROPOS</Link>
                            </li>
                            <li>
                                <Link href="/avantage">AVANTAGES</Link>
                            </li>
                            <li>
                                <Link href="/services">FONCTIONALITÉS</Link>
                            </li>
                            <li>
                                <Link href="/faq">FAQ</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <a className="appointment">
                            Vous êtes professionnel paramédical ?
                        </a>
                        <Link href="/form" className="btn appointment">
                            Démo
                        </Link>
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