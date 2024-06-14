import { prefix } from '@/prefix';

const Feature = () => {
    return (
        <section id="aboutus" className="ptb">
            <div className="wrapper-title container align-center">
                <span className="suptitle">Avantages</span>
                <h2>Avantages</h2>
            </div>
            <div className="wrapper-feature container grid-layout">
                <div className="single-feature">
                    <img src={`${prefix}/image/feature-1.png`} alt="Digitalisation de votre travail" />
                    <h3>Digitalisation de votre travail et gain d’espace dans votre cabinet</h3>
                    <p>Folya vous permet de numériser tous vos dossiers papiers, de libérer de l’espace dans votre cabinet et d’automatiser l'accès à vos fiches.</p>
                </div>
                <div className="single-feature">
                    <img src={`${prefix}/image/feature-2.png`} alt="Organisation optimisée" />
                    <h3>Organisation optimisée et gain du temps</h3>
                    <p>Gérez tous les aspects de votre pratique à partir d'une seule plateforme, accessible d'un simple clic, où que vous soyez et à tout moment.</p>
                </div>
                <div className="single-feature">
                    <img src={`${prefix}/image/feature-3.png`} alt="Amélioration de la gestion des données" />
                    <h3>Amélioration de la gestion des données patient</h3>
                    <p>Saisissez des informations importantes en temps réel, améliorez la coordination des données des patients et réduisez les risques d'erreurs médicales.</p>
                </div>
                <div className="single-feature">
                    <img src={`${prefix}/image/feature-4.png`} alt="Dossiers patients centralisés" />
                    <h3>Dossiers patients centralisés et sécurisés</h3>
                    <p>Accédez aux dossiers patients, suivez l'évolution de l'état de vos patients, prenez des notes cliniques et stockez des informations en toute sécurité.</p>
                </div>
                <div className="single-feature">
                    <img src={`${prefix}/image/feature-4.png`} alt="Facturation automatisée" />
                    <h3>Facturation automatisée et suivi des finances</h3>
                    <p>Dites adieu aux factures manuelles et aux erreurs de saisie ! Folya automatise la facturation et le suivi des paiements, tout en optimisant votre trésorerie.</p>
                </div>
                <div className="single-feature">
                    <img src={`${prefix}/image/feature-3.png`} alt="Rapports et analyses" />
                    <h3>Rapports et analyses précieuses</h3>
                    <p>Obtenez des informations clés sur votre pratique et l’activité de votre cabinet grâce à des rapports et analyses personnalisés. Anticipez vos périodes de congé et prenez des décisions éclairées pour améliorer votre efficacité.</p>
                </div>
            </div>
            <style jsx>{`
                .ptb {
                    padding: 60px 0;
                }
                .wrapper-title {
                    text-align: center;
                    margin-bottom: 40px;
                }
                .wrapper-feature {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }
                .single-feature {
                    background: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                .single-feature img {
                    max-width: 60px;
                    margin-bottom: 20px;
                }
                .single-feature h3 {
                    font-size: 18px;
                    margin-bottom: 15px;
                }
                .single-feature p {
                    font-size: 14px;
                    color: #555;
                }
                @media (max-width: 768px) {
                    .wrapper-feature {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
}

export default Feature;

