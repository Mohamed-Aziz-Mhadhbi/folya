import { prefix } from '@/prefix';

const Tarif = () => {
    return (
        <section id="pricing" className="ptb">
            <div className="wrapper-title container align-center">
                <span className="suptitle">Tarifs</span>
                <h2>Nous Offrons Les <span className="selection">Meilleurs Tarifs</span></h2>
            </div>

            <div className="wrapper-pricing container flex-row">
                <div className="single-pricing align-center">
                    <div className="pricing-title">
                        <img src={`${prefix}/image/improve.png`} alt="" />
                        <h3>Blanchiment Dentaire</h3>
                    </div>

                    <div className="pricing-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab perferendis, voluptatum magni
                            natus sunt dolorem quibusdam esse eaque repellendus?</p>
                    </div>

                    <div className="single-price">
                        <p>130€</p>
                        <span>Par Mois</span>
                    </div>
                </div>

                <div className="single-pricing align-center">
                    <div className="pricing-title">
                        <img src={`${prefix}/image/improve.png`} alt="" />
                        <h3>Soins Esthétiques</h3>
                    </div>

                    <div className="pricing-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab perferendis, voluptatum magni
                            natus sunt dolorem quibusdam esse eaque repellendus?</p>
                    </div>

                    <div className="single-price">
                        <p>240€</p>
                        <span>Par Mois</span>
                    </div>
                </div>

                <div className="single-pricing align-center">
                    <div className="pricing-title">
                        <img src={`${prefix}/image/improve.png`} alt="" />
                        <h3>Essentiels Dentaires</h3>
                    </div>

                    <div className="pricing-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab perferendis, voluptatum magni
                            natus sunt dolorem quibusdam esse eaque repellendus?</p>
                    </div>

                    <div className="single-price">
                        <p>420€</p>
                        <span>Par Mois</span>
                    </div>
                </div>

                <div className="single-pricing align-center">
                    <div className="pricing-title">
                        <img src={`${prefix}/image/improve.png`} alt="" />
                        <h3>Soins Esthétiques</h3>
                    </div>

                    <div className="pricing-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab perferendis, voluptatum magni
                            natus sunt dolorem quibusdam esse eaque repellendus?</p>
                    </div>

                    <div className="single-price">
                        <p>380€</p>
                        <span>Par Mois</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tarif;