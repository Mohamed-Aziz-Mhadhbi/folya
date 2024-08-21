import { prefix } from '@/prefix';

const Feature = () => {
    return (
        <section id="avantage" className="ptb-feature">
            <div className="wrapper-title container align-center">
                <span className="suptitle">Avantages</span>
                <h2>Avantages</h2>
            </div>
            <div className="wrapper-pricing container flex-row">
                <div className="single-pricing align-center">
                    <div className="pricing-title">
                    <img src={`${prefix}/image/espace.png`} alt="Digitalisation de votre travail" />
                        <h3>Digitalisation de votre travail et gain d’espace dans votre cabinet</h3>
                    </div>
                    <div className="pricing-content">
                    <p>Folya vous permet de numériser tous vos dossiers papiers, de libérer de l’espace dans votre cabinet et d’automatiser l'accès à vos fiches.</p>
                    </div>
                </div>
                <div className="single-pricing align-center">
                    <div className="pricing-title">
                        <img src={`${prefix}/image/espace.png`} alt="Digitalisation de votre travail" />
                        <h3>Cosmetic  Treatments</h3>
                    </div>
                    <div className="pricing-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab perferendis, voluptatum magni
                            natus sunt dolorem quibusdam esse eaque repellendus?</p>
                    </div>
                    <div className="single-price">
                        <p>$240</p>
                        <span>Per Monthly</span>
                    </div>
                </div>
                <div className="single-pricing align-center">
                    <div className="pricing-title">
                        <img src={`${prefix}/image/espace.png`} alt="Digitalisation de votre travail" />
                        <h3>Dental Essentials</h3>
                    </div>
                    <div className="pricing-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab perferendis, voluptatum magni
                            natus sunt dolorem quibusdam esse eaque repellendus?</p>
                    </div>
                    <div className="single-price">
                        <p>$420</p>
                        <span>Per Monthly</span>
                    </div>
                </div>
                <div className="single-pricing align-center">
                    <div className="pricing-title">
                        <img src={`${prefix}/image/espace.png`} alt="Digitalisation de votre travail" />
                        <h3>Cosmetic Treatments</h3>
                    </div>
                    <div className="pricing-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab perferendis, voluptatum magni
                            natus sunt dolorem quibusdam esse eaque repellendus?</p>
                    </div>
                    <div className="single-price">
                        <p>$380</p>
                        <span>Per Monthly</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
