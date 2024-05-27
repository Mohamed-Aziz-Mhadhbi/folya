import { prefix } from '@/prefix';

const Offers = () => {
    return (
        <section id="offer" className="ptb">
            <div className="wrapper-offer container flex-row">
                <div className="offer-content">
                    <span className="suptitle"></span>
                    <h2>Optimisez votre flux de travail et</h2>
                    <p>
                        Gagnez du temps, augmentez votre productivité et réduisez votre stress avec Folya.
                        Notre solution vous permet de gérer efficacement votre portefeuille patient, du planning des rendez-vous à la facturation en passant par la gestion de vos bilans.
                        Découvrez comment notre application peut transformer votre pratique quotidienne et améliorer votre vie professionnelle.
                    </p>
                    <a className="btn appointment" href="#booking">
                        Réservez votre démo
                    </a>
                </div>
                <div className="offer-img">
                    <img src={`${prefix}/img-header.png`} alt="" />
                </div>
            </div>
        </section>

    );
}

export default Offers;


