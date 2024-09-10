const Offers = () => {
    return (
        <section id="offer" className="ptb">
            <div className="wrapper-offer container flex-row">
                <div className="offer-content">
                    <h2>
                    <span className="selection">  FOLYA,</span>
                        votre solution de gestion de cabinet paramédical tout en un, clé en main.
                    </h2>
                    <p>
                    Transformez la gestion de votre cabinet avec FOLYA, conçue par des experts du paramédical ! Centralisez vos dossiers patients en un clic, gagnez un temps précieux et concentrez-vous sur l'essentiel : vos patients. Adoptez FOLYA dès aujourd'hui et boostez votre efficacité !   
                    </p>
                    <div className="hero-btn">
                        <ul>
                            <li>
                                <a className="btn appointment animated-btn" href="#booking">
                                    Réservez votre démo
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
        </section>
    );
};

export default Offers;
