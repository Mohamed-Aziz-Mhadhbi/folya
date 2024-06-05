import { prefix } from '@/prefix';

const Footer = () => {
    return (
        <footer>
            
            <div id="contacts" className="ptb">
                <div className="container">
                    <div className="row wrapper-contact flex-row">
                        <div className="col-lg-5 col-md-6">
                            <div className="footer-logo">
                                <a href="#">
                                    <img
                                        src={`${prefix}/image/logo-icon.png`}
                                        alt="logo"
                                        style={{ maxHeight: 40, maxWidth: 40 }}
                                    />
                                </a>
                            </div>
                            <p>
                                Folya vous permet de gérer efficacement votre portefeuille patient, du planning des rendez-vous à la facturation en passant par la gestion de vos bilans.
                                Notre application transforme votre pratique quotidienne et améliore votre vie professionnelle.
                            </p>
                            <div className="social-link flex-row">
                                <ul>
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
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-google-plus-g" />
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
                        <div className="col-lg-2 col-md-6">
                            <div className="single-footer-item">
                                <div className="title">
                                    <h3>Links</h3>
                                    <ul>
                                        <li>
                                            <a href="#">Popular Package</a>
                                        </li>
                                        <li>
                                            <a href="#">Services</a>
                                        </li>
                                        <li>
                                            <a href="#">Testimonials</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="single-footer-item">
                                <div className="title">
                                    <h3>FAQ</h3>
                                    <ul>
                                        <li>
                                            <a href="#">Qu'est-ce que Folya?</a>
                                        </li>
                                        <li>
                                            <a href="#">Comment puis-je commencer à utiliser Folya?</a>
                                        </li>
                                        <li>
                                            <a href="#">Folya est-elle compatible avec mon appareil?</a>
                                        </li>
                                        <li>
                                            <a href="#">Folya est-elle sécurisée?</a>
                                        </li>
                                        <li>
                                            <a href="#">Puis-je essayer Folya gratuitement?</a>
                                        </li>
                                        <li>
                                            <a href="#">Comment puis-je obtenir de l'aide avec Folya?</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-item">
                                <div className="title">
                                    <h3>Contact</h3>
                                    <ul>
                                        <li>
                                            <a href="mailto:Contact@Folya.co">
                                                <i className="fas fa-envelope" />
                                                Contact@Folya.co
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+21627405988">
                                                <i className="fas fa-phone-alt" />
                                                +216 27 405 988
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-map-marker-alt" />
                                                Cité El Wafa - Nabeul 8062
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-bottom">
                                <ul>
                                    <li>Copyright © {new Date().getFullYear()} All rights reserved.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
