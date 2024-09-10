import { prefix } from '@/prefix';

const Feature = () => {
    return (
        <section id="avantage" className="ptb-feature">
            <div className="wrapper-title container align-center">
                <span className="suptitle">Avantages</span>
                <h2>Avantages</h2>
            </div>

            <div className="wrapper-features container grid-layout">
                <div className="feature-card">
                    <div className="icon">
                        <img src={`${prefix}/image/espace.png`} alt="Digitalisation de votre travail" />
                    </div>
                    <h3>Digitalisation de votre travail et gain d’espace dans votre cabinet</h3>
                    <p>
                        Folya vous permet de numériser tous vos dossiers papiers, de libérer de l’espace dans votre cabinet et d’automatiser l'accès à vos fiches.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="icon">
                        <img src={`${prefix}/image/gestionDonnees.png`} alt="Amélioration de la gestion des données" />
                    </div>
                    <h3>Amélioration de la gestion des données patient</h3>
                    <p>
                        Saisissez des informations importantes en temps réel, améliorez la coordination des données des patients et réduisez les risques d'erreurs médicales.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="icon">
                        <img src={`${prefix}/image/suivi.png`} alt="Facturation automatisée" />
                    </div>
                    <h3>Facturation automatisée et suivi des finances</h3>
                    <p>
                        Dites adieu aux factures manuelles et aux erreurs de saisie ! Folya automatise la facturation et le suivi des paiements, tout en optimisant votre trésorerie.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="icon">
                        <img src={`${prefix}/image/analyses.png`} alt="Rapports et analyses" />
                    </div>
                    <h3>Rapports et analyses précieuses</h3>
                    <p>
                        Obtenez des informations clés sur votre pratique et l’activité de votre cabinet grâce à des rapports et analyses personnalisés. Anticipez vos périodes de congé et prenez des décisions éclairées pour améliorer votre efficacité.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Feature;
