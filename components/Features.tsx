import { prefix } from '@/prefix';

const Feature = () => {
    return (
        <section id="avantage" className="ptb-feature">
            <div className="wrapper-title container align-center">
                <span className="suptitle">Avantages</span>
                <h2>Nos points <span className="selection">forts</span></h2>
            </div>
            <div className="wrapper-features container">
                <div className="feature-card">
                    <div className="icon">
                        <img src={`${prefix}/image/espace.png`} alt="Digitalisation de votre travail" />
                    </div>
                    <div className="text-content">
                        <h3>Digitalisation de votre activité</h3>
                        <p>
                            Folya vous offre la possibilité de numériser l'intégralité de vos dossiers papiers, vous permettant ainsi de désencombrer votre cabinet et de consulter vos fiches à tout moment, où que vous soyez.
                        </p>
                    </div>
                </div>
                <div className="feature-card">
                    <div className="text-content">
                        <h3>Dossier-patient centralisé et sécurisé</h3>
                        <p>
                            Folya vous donnez la accédez aux dossiers-patients, suivez l'évolution de l'état de vos patients, prenez des notes cliniques et stockez des informations en toute sécurité.
                        </p>
                    </div>
                    <div className="icon">
                        <img src={`${prefix}/image/dossierpationcentralise.png`} alt="Dossier patient centralisé et sécurisé" />
                    </div>
                </div>
                <div className="feature-card">
                    <div className="icon">
                        <img src={`${prefix}/image/facture.png`} alt="Facturation automatisée et suivi des finances" />
                    </div>
                    <div className="text-content">
                        <h3>Facturation automatisée et suivi des finances</h3>
                        <p>
                            Dites adieu aux factures manuelles et aux erreurs de saisie ! Folya automatise la facturation et le suivi des paiements, tout en optimisant votre trésorerie.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;