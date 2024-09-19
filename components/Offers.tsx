const Offers = () => {
    return (
        <section id="offer" className="ptb">
            <div className="wrapper-offer container">
                {/* Background video */}
                <div className="background-video">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/9_nyG2TUDcQ?autoplay=1&mute=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                {/* Heading section */}
                <div className="heading-section">
                    <h2 className="offer-heading">
                        <span className="selection">Folya,</span>
                        votre solution de gestion du cabinet paramédical.
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
                </div>
            </div>
        </section>
    );
};

export default Offers;