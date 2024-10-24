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
                    <h3>Digitalisation de votre activité</h3>
                    <p>
                        Folya vous offre la possibilité de numériser l'intégralité de vos dossiers papiers, vous permettant ainsi de désencombrer votre cabinet et de consulter vos fiches à tout moment, où que vous soyez.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="icon">
                        <img src={`${prefix}/image/gestionDonnees.png`} alt="Dossier patient centralisé et sécurisé" />
                    </div>
                    <h3>Dossier-patient centralisé et sécurisé</h3>
                    <p>
                    Folya vous donnez la accédez aux dossiers-patients, suivez l'évolution de l'état de vos patients, prenez des notes cliniques et stockez des informations en toute sécurité .</p>
                </div>
                <div className="feature-card">
                    <div className="icon">
                        <img src={`${prefix}/image/suivi.png`} alt="Facturation automatisée et suivi des finances" />
                    </div>
                    <h3>Facturation automatisée et suivi des finances</h3>
                    <p>
                        Dites adieu aux factures manuelles et aux erreurs de saisie ! Folya automatise la facturation et le suivi des paiements, tout en optimisant votre trésorerie.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="icon">
                        <img src={`${prefix}/image/analyses.png`} alt="Rapports précieux de l'activité du cabinet" />
                    </div>
                    <h3>Rapports précieux de l'activité du cabinet</h3>
                    <p>
                        Obtenez des informations clés sur votre pratique et l’activité de votre cabinet grâce à des analyses personnalisées. Anticipez vos périodes de congé et prenez des décisions plus efficaces.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Feature;
