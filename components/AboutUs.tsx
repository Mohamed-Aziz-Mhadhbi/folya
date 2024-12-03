import { prefix } from '@/prefix';

const AboutUs = () => {
    return (
        <section id="aboutus" className="ptb flex-row">
            <div className="wrapper-aboutus container flex-row">
                <div className="aboutus-img">
                    <img src={`${prefix}/image/aboutus2.png`} alt="" />
                </div>
                <div className="aboutus-content">
                    <br />
                    <span className="suptitle">En Savoir Plus</span>
                    <h2>Au cœur de notre mission <span className="selection">se trouvent votre bien-être et celui de vos patients</span></h2>
                    <p>Vous êtes kinésithérapeute, orthophoniste, ergothérapeute, psychologue ou psychomotricien ? </p>
                    <p>Nous comprenons les défis spécifiques de votre profession et l'impact que les tâches administratives peuvent avoir sur votre pratique.</p>
                    <p id='colorsp'>Folya est bien plus qu’une simple plateforme : c'est votre allié.</p>
                    <p>Conçu par des professionnels paramédicaux pour vous simplifier la vie et vous permettre de relever les défis quotidiens liés à la gestion des patients et de votre cabinet, où que vous soyez et quand vous le désirez.</p>
                </div>
                <div className="wrapper-aboutus-progress flex-row">
                    <div className="single-progress-wrapper flex-column">
                        <div className="single-progress flex-row">
                            <div className="progress-content">
                                <h3>-25% d'erreurs de saisie </h3>
                                <p>grâce à la gestion optimisée des dossiers.</p>
                            </div>
                        </div>
                        <div className="single-progress flex-row">
                            <div className="progress-content">
                                <h3>30 secondes</h3>
                                <p>Suffisent pour accéder aux dossiers patients</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-progress-wrapper flex-column">
                        <div className="single-progress flex-row">
                            <div className="progress-content">
                                <h3>80 % des utilisateurs </h3>
                                <p>constatent une meilleure organisation dès la première semaine.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;