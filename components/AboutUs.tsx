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
                                <p>-30% d'erreurs de saisie grâce à la gestion optimisée des dossiers.</p>
                                <h3>Réduction des erreurs administratives</h3>
                            </div>
                        </div>
                        <div className="single-progress flex-row">
                            <div className="progress-content">
                                <p>-30% d'erreurs administratives.</p>
                                <h3>Accès rapide aux informations</h3>
                            </div>
                        </div>
                    </div>
                    <div className="single-progress-wrapper flex-column">
                        <div className="single-progress flex-row">
                            <div className="progress-content">
                                <p>80 % des utilisateurs constatent une meilleure organisation dès la première semaine.</p>
                                <h3>Amélioration de l'efficacité</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;