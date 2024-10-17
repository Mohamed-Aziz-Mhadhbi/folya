import { prefix } from '@/prefix';

const AboutUs = () => {
    return (
        <section id="aboutus" className="ptb flex-row">
            <div className="wrapper-aboutus container flex-row">
                <div className="aboutus-img">
                    <img src={`${prefix}/image/aboutus.png`} alt="" />
                </div>
                <div className="aboutus-content">
                    <br></br>
                    <span className="suptitle">En Savoir Plus</span>
                    <h2>Au cœur de notre mission <span className="selection">se trouvent votre bien-être et celui de vos patients</span></h2>
                    <p>
                        Vous êtes kinésithérapeute, orthophoniste, ergothérapeute, psychologue ou psychomotricien ? </p>
                        <p>Nous comprenons les défis spécifiques de votre profession et l'impact que les tâches administratives peuvent avoir sur votre pratique.
                    </p>
                    <p>Conçu par des professionnels paramédicaux pour vous simplifier la vie et vous permettre de relever les défis quotidiens liés à la gestion des patients et de votre cabinet, où que vous soyez et quand vous le désirez.  </p>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
