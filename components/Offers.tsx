import { prefix } from '@/prefix';

const Offers = () => {
    return (
        <section id="offer" className="ptb">
            <div className="wrapper-offer container flex-row">
                <div className="offer-content">
                    <h2>
                        FOLYA,
                        <span className="selection">votre solution de gestion de cabinet paramédical tout en un, clé en main .</span>
                    </h2>
                    <p>
                    Développée par des experts du secteur paramédical, notre solution vous offre une gestion optimale de votre portefeuille de patients, allant de la planification des rendez-vous à la facturation, tout en intégrant le suivi de vos bilans.
                    </p>
                    <div className="hero-btn">
                        <ul>
                            <li>
                                <a className="btn appointment play-btn" href="#booking">
                                    Réservez votre démo
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/watch?v=9_nyG2TUDcQ" className="play-btn mfp-iframe">
                                    <img className="wave1" src={`${prefix}/image/play-btn.png`} alt="play-btn" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="offer-img">
                    <img src={`${prefix}/image/img-header.png`} alt="Offer Image" />
                </div>
            </div>
        </section>
    );
};

export default Offers;
