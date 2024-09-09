import { prefix } from '@/prefix';

const Offers = () => {
    return (
        <section id="offer" className="ptb">
            <div className="wrapper-offer container flex-row">
                <div className="offer-content">
                    <h2>
                        FOLYA,
                        <span className="selection">votre solution de gestion de cabinet paramédical clé en main</span>
                    </h2>
                    <p>
                        conçu par des professionnels de santé, notre solution vous permet de gérer efficacement votre portefeuille patient, du planning des rendez-vous à la facturation en passant par la gestion de vos bilans.    </p>
                    <div className="hero-btn">
                        <ul>
                            <li>
                                <a className="btn appointment" href="#booking">
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
