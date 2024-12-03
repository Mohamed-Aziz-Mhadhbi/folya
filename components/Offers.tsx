import { prefix } from "@/prefix";

const Offers = () => {
    return (
        <section id="offer" className="ptb">
            <div className="wrapper-offer container flex-row">
                <div className="offer-content">
                    <h2 className="offer-heading">
                        <span className="selection">Folya,</span>
                        votre solution de gestion du cabinet paramédical.
                    </h2>
                    <p>
                        Transformez la gestion de votre cabinet avec FOLYA, conçue par des experts du paramédical ! Centralisez vos dossiers patients en un clic, gagnez un temps précieux et concentrez-vous sur l'essentiel : vos patients.
                    </p>
                    <p>
                        Adoptez FOLYA dès aujourd'hui et boostez votre efficacité !
                    </p>
                    <a className="btn appointment" href="#booking">Découvrir</a>
                </div>
                <div className="offer-img">
                    <img src={`${prefix}/image/MacBook Air (15 inch).png`} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Offers;
