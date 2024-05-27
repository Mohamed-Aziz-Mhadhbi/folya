import { prefix } from '@/prefix';

const AboutUs = () => {
    return (
        <section id="aboutus" className="ptb flex-row">
            <div className="wrapper-aboutus container flex-row separate">
                <div className="aboutus-img">
                    <img src={`${prefix}/aboutus.png`} alt="" />
                </div>
                <div className="aboutus-content">
                    <br></br>
                    <span className="suptitle">En Savoir Plus</span>
                    <h2>Au cœur de notre mission <span className="selection">se trouvent votre bien-être et celui de vos patients</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ex voluptatem quis est. Iusto sequi perspiciatis non cumque velit quo. Tempore, debitis molestias officia animi obcaecati voluptatem deleniti.</p>
                    <div className="wrapper-aboutus-progress">
                        <div className="single-progress flex-row">
                            <div className="progress-img">
                                <img src={`${prefix}/progress-1.png`} alt="" />
                            </div>
                            <div className="progress-content">
                                <h3>Service 20 Years</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quaerat.</p>
                            </div>
                        </div>
                        <div className="single-progress flex-row">
                            <div className="progress-img">
                                <img src={`${prefix}/progress-2.png`} alt="" />
                            </div>
                            <div className="progress-content">
                                <h3>Reliable Contractors</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quaerat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper-singnature flex-row">
                        <img src={`${prefix}/img-signature.png`} alt="" />
                        <div className="signature-content">
                            <h3>Jeremy White</h3>
                            <img src={`${prefix}/signature.png`} alt="" />
                        </div>
                    </div>
                </div>
            </div>      
        </section>
    );
}

export default AboutUs;
