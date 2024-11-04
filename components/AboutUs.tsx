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
                    <p>Vous êtes kinésithérapeute, orthophoniste, ergothérapeute, psychologue ou psychomotricien ? </p>
                    <p>Nous comprenons les défis spécifiques de votre profession et l'impact que les tâches administratives peuvent avoir sur votre pratique.</p>
                    <p id='colorsp'>Folya est bien plus qu’une simple plateforme :  c'est votre allié.</p>
                    <p>Conçu par des professionnels paramédicaux pour vous simplifier la vie et vous permettre de relever les défis quotidiens liés à la gestion des patients et de votre cabinet, où que vous soyez et quand vous le désirez.  </p>
                    <div className="wrapper-aboutus-progress flex-row">
                        <div className="single-progress-wrapper flex-column">
                            <div className="single-progress flex-row">
                                <div className="progress-img">
                                    <img src={`${prefix}/image/reduc.png`} alt="" />
                                </div>
                                <div className="progress-content">
                                    <h3>Réduction des erreurs administratives</h3>
                                    <p>20 à 30 % de diminution des erreurs liées à la gestion des dossiers.</p>
                                </div>
                            </div>
                            <div className="single-progress flex-row">
                                <div className="progress-img">
                                    <img src={`${prefix}/image/rapide.png`} alt="" />
                                </div>
                                <div className="progress-content">
                                    <h3>Accès rapide aux informations</h3>
                                    <p>Moins de 30 secondes pour accéder aux dossiers patients avec Folya.</p>
                                </div>
                            </div>
                        </div>
                        <div className="single-progress-wrapper flex-column">
                            <div className="single-progress flex-row">
                                <div className="progress-img">
                                    <img src={`${prefix}/image/improve.png`} alt="" />
                                </div>
                                <div className="progress-content">
                                    <h3>Amélioration de l'efficacité</h3>
                                    <p>80 % des premiers utilisateurs rapportent une meilleure organisation dès les premières semaines d'utilisation.</p>
                                </div>
                            </div>
                            <div className="single-progress flex-row">
                                <div className="progress-img">
                                    <img src={`${prefix}/image/gestionDonnees.png`} alt="" />
                                </div>
                                <div className="progress-content">
                                    <h3>Réduction des coûts</h3>
                                    <p>Jusqu'à 45 % de baisse de vos dépenses administratives grâce à l'automatisation et l’optimisation de la gestion de votre cabinet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;