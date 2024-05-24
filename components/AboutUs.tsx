import { prefix } from '@/prefix';

const AboutUs = () => {
    return (
        <section id="aboutus" className="ptb flex-row">
        <div className="wrapper-feature flex-row container">
            <div className="single-feature align-center">
                <img src={`${prefix}/feature-1.png`} alt="" />
                <h3>Digitalisation de votre travail et gain d’espace dans votre cabinet</h3>
                <p>Folya vous permet de numériser tous vos dossiers papiers, de libérer de l’espace dans votre cabinet et d’automatiser l'accès à vos fiches.</p>
            </div>
            <div className="single-feature align-center">
                <img src={`${prefix}/feature-2.png`} alt="" />
                <h3>Organisation optimisée et gain du temps</h3>
                <p>Gérez tous les aspects de votre pratique à partir d'une seule plateforme, accessible d'un simple clic, où que vous soyez et à tout moment.</p>
            </div>
            <div className="single-feature align-center">
                <img src={`${prefix}/feature-3.png`} alt="" />
                <h3>Amélioration de la gestion des données patient</h3>
                <p>Saisissez des informations importantes en temps réel, améliorez la coordination des données des patients et réduisez les risques d'erreurs médicales.</p>
            </div>
            <div className="single-feature align-center">
                <img src={`${prefix}/feature-4.png`} alt="" />
                <h3>Dossiers patients centralisés et sécurisés</h3>
                <p>Accédez aux dossiers patients, suivez l'évolution de l'état de vos patients, prenez des notes cliniques et stockez des informations en toute sécurité.</p>
            </div>
            <div className="single-feature align-center">
                <img src={`${prefix}/feature-4.png`} alt="" />
                <h3>Facturation automatisée et suivi des finances</h3>
                <p>Dites adieu aux factures manuelles et aux erreurs de saisie ! Folya automatise la facturation et le suivi des paiements, tout en optimisant votre trésorerie.</p>
            </div>
            <div className="single-feature align-center">
                <img src={`${prefix}/feature-3.png`} alt="" />
                <h3>Rapports et analyses précieuses</h3>
                <p>Obtenez des informations clés sur votre pratique et l’activité de votre cabinet grâce à des rapports et analyses personnalisés. Anticipez vos périodes de congé et prenez des décisions éclairées pour améliorer votre efficacité.</p>
            </div>
        </div>
        <br></br>
        <div className="wrapper-aboutus container flex-row separate">
            <div className="aboutus-img">
                <img src={`${prefix}/aboutus.png`} alt="" />
            </div>
            <div className="aboutus-content">
                <br></br>
                <span className="suptitle">En Savoir Plus</span>
                <h2>Au cœur de notre mission <span className="selection">se trouvent votre bien-être et celui de vos patients</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ex voluptatem quis est. Iusto sequi perspiciatis non cumque velit quo. Tempore, debitis molestias officia animi obcaecati voluptatem deleniti.</p>
                <div className="wrapper-aboutus-progress">
                    <div className="single-progress flex-row">
                        <div className="progress-img">
                            <img src={`${prefix}/progress-1.png`} alt="" />
                        </div>
                        <div className="progress-content">
                            <h3>Service 20 Years</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quaerat.</p>
                        </div>
                    </div>
                    <div className="single-progress flex-row">
                        <div className="progress-img">
                            <img src={`${prefix}/progress-2.png`} alt="" />
                        </div>
                        <div className="progress-content">
                            <h3>Reliable Contractors</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quaerat.</p>
                        </div>
                    </div>
                </div>
                <div className="wrapper-singnature flex-row">
                    <img src={`${prefix}/img-signature.png`} alt="" />
                    <div className="signature-content">
                        <h3>Jeremy White</h3>
                        <img src={`${prefix}/signature.png`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default AboutUs;
