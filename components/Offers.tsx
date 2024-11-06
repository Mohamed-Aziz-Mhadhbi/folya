import { prefix } from "@/prefix";

const Offers = () => {
    return (
        <section id="offer" className="ptb">
            <div className="wrapper-offer container">
                {/* Heading section */}
                <div className="heading-section">
                    <h2 className="offer-heading">
                        <span className="selection">Folya,</span>
                        votre solution de gestion du cabinet paramédical.
                    </h2>
                </div>
                <div className="content-section flex-row">
                    <div className="offer-content">
                        <p>
                            Transformez la gestion de votre cabinet avec FOLYA, conçue par des experts du paramédical ! Centralisez vos dossiers patients en un clic, gagnez un temps précieux et concentrez-vous sur l'essentiel : vos patients.
                        </p>
                        <p>
                            Adoptez FOLYA dès aujourd'hui et boostez votre efficacité !
                        </p>
                        <div className="hero-btn">
                            <ul>
                                <li>
                                    <a className="btn appointment animated-btn" href="#booking">
                                        demandez votre devis
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div >
                    {/* <img src={`${prefix}/image/faq.png`} alt="" /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offers;
