import Centre from './Centre';

const Tarif = () => {
    return (
        <section id="tarif" className="ptb">
            <div className="wrapper-title container align-center">
                <span className="suptitle">Tarifs</span>
                <h2>
                    Notre offre <span className="selection">budgétaire</span>
                </h2>
            </div>
            <div className="wrapper-pricing container flex-row">
                <div className="single-pricing align-center">
                    <div className="pricing-title">
                        <h2>Cabinet</h2>
                    </div>
                    <div className='flex-row pricing-options'>
                        <div className="align-center pricing-option">
                            <div className="pricing-title">
                                <h3>Mensuel</h3>
                            </div>
                            <div className="pricing-content">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab perferendis, voluptatum magni
                                    natus sunt dolorem quibusdam esse eaque repellendus?
                                </p>
                            </div>
                            <div className="single-price">
                                <p>80dt</p>
                                <span>Par Mois</span>
                            </div>
                        </div>
                        <div className="align-center pricing-option">
                            <div className="pricing-title">
                                <h3>Annuel</h3>
                            </div>
                            <div className="pricing-content">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab perferendis, voluptatum magni
                                    natus sunt dolorem quibusdam esse eaque repellendus?
                                </p>
                            </div>
                            <div className="single-price">
                                <p>70dt</p>
                                <span>Par Mois</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-pricing align-center">
                    <div className="pricing-title">
                        <h2>Centre</h2>
                    </div>
                    <Centre />
                </div>
            </div>
        </section>
    );  
}

export default Tarif;