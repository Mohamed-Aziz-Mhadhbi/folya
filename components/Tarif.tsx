import { prefix } from '@/prefix';

const Tarif = () => {
    return (
        <section id="pricing" className="ptb">
            <div className="wrapper-title container align-center">
                <span className="suptitle">Pricing</span>
                <h2>We Are Offering The <span className="selection">Best Pricing</span></h2>
            </div>

            <div className="wrapper-pricing container flex-row">
                <div className="single-pricing align-center">
                    <div className="pricing-title">
                        <img src={`${prefix}/image/improve.png`} alt="" />
                        <h3>Teeth Whitening</h3>
                    </div>

                    <div className="pricing-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab perferendis, voluptatum magni
                            natus sunt dolorem quibusdam esse eaque repellendus?</p>
                    </div>

                    <div className="single-price">
                        <p>$130</p>
                        <span>Per Monthly</span>
                    </div>

                </div>

                <div className="single-pricing align-center">
                    <div className="pricing-title">
                        <img src={`${prefix}/image/improve.png`} alt="" />
                        <h3>Cosmetic Treatments</h3>
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
                        <img src={`${prefix}/image/improve.png`} alt="" />
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
                        <img src={`${prefix}/image/improve.png`} alt="" />
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
}

export default Tarif;

