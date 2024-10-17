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
                    <p id='colorsp'>Folya est bien plus qu’une simple plateforme :  c'est votre allié.</p>
                    <p>Conçu par des professionnels paramédicaux pour vous simplifier la vie et vous permettre de relever les défis quotidiens liés à la gestion des patients et de votre cabinet, où que vous soyez et quand vous le désirez.  </p>
                    <p>Réduction des erreurs administratives : 20 à 30 % de diminution des erreurs liées à la gestion des dossiers.
                    </p>
                    <p>Amélioration de l'efficacité : 80 % des premiers utilisateurs rapportent une meilleure organisation dès les premières semaines d'utilisation.</p>
                    <p>Accès rapide aux informations : Moins de 30 secondes pour accéder aux dossiers patients avec Folya.</p>
                    <p>Réduction des coûts : Jusqu'à 45 % de baisse de vos dépenses administratives grâce à l'automatisation et l’optimisation de la gestion de votre cabinet .
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
