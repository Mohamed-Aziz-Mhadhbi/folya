import { prefix } from "@/prefix";

const Offers = () => {
    return (
    <>
        <section id="offer" className="ptb">
            <div className="wrapper-offer container flex-row">
                <div className="offer-content">
                    <span className="suptitle">Free Consultation</span>
                    <h2>Special Discounts of 50% on All Dental Procedures!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis dolorem quas esse reprehenderit possimus alias numquam, odit iure commodi.</p>
                    <a className="btn appointment" href="#booking">Appointment</a>
                </div>
                <div className="offer-img">
                <img src={`${prefix}/img-header.png`} alt="" />
                </div>
            </div>
        </section>


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
                    <div className="offer-img">
                        <img src={`${prefix}/img-header.png`} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default Offers;
