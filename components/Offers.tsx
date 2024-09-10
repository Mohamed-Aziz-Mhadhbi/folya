const Offers = () => {
    return (
        <section id="offer" className="ptb">
            <div className="wrapper-offer container">
                {/* Heading section */}
                <div className="heading-section">
                    <h2 className="offer-heading">
                        <span className="selection">Folya,</span>
                        votre solution tout-en-un, clé en main, pour simplifier la gestion de votre cabinet paramédical.
                    </h2>
                </div>
                
                {/* Text and video side by side */}
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
                    <div className="offer-video">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/9_nyG2TUDcQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offers;
