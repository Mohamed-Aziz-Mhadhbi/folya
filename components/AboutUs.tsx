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
                        Vous êtes kinésithérapeute, orthophoniste, ergothérapeute, psychologue ou psychomotricien ? Nous comprenons les défis spécifiques de votre profession et l'impact que les tâches administratives peuvent avoir sur votre pratique.
                    </p>
                    <p>Folya est votre allié, conçu par des professionnels paramédicaux pour vous simplifier la vie et vous permettre de relever les défis quotidiens liés à la gestion des patients. </p>
                    <p>Folya vous permet de centraliser et de gérer facilement tous les aspects de votre cabinet, où que vous soyez et quand vous le désirez. Dossiers patients, planification de rendez-vous, intégration des comptes rendus et suivi des finances... </p>
                    <p>Nous vous offrons une solution, clés en main, complète pour une organisation optimale.</p>
                    <p>Découvrez la différence et voyez comment Folya peut vous aider à atteindre vos objectifs professionnels en toute sérénité.</p>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
