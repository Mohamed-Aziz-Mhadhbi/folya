import { prefix } from '@/prefix';

const Service = () => {
    return (
        <section id="services" className="ptb">
            <div className="wrapper-title container align-center">
                <span className="suptitle">Nos Fonctionnalités</span>
                <h2>Fonctionnalités clés <span className="selection">de Folya</span></h2>
            </div>
            <div className="wrapper-service container">
                <div className="service-row">
                    <article className="align-center">
                        <img src={`${prefix}/image/rendez-vous.png`} alt="" />
                        <h3>Gestion des rendez-vous</h3>
                        <p>Planifiez, modifiez et annulez vos rendez-vous en quelques clics en consultant votre calendrier.</p>
                    </article>
                    <article className="align-center">
                        <img src={`${prefix}/image/suivi.png`} alt="" />
                        <h3>Suivi des patients</h3>
                        <p>Gardez un œil sur l'évolution de l'état de vos patients. Préservez un historique de votre prise en charge.</p>
                    </article>
                </div>
                <div className="service-row">
                    <article className="align-center">
                        <img src={`${prefix}/image/service-4.png`} alt="" />
                        <h3>Tests d’évaluation personnalisés</h3>
                        <p>Stockez et accédez aux bilans spécifiques à votre métier. Plus besoin d’imprimer vos grilles ou de noter vos observations sur papier.</p>
                    </article>
                    <article className="align-center">
                        <img src={`${prefix}/image/comp.png`} alt="" />
                        <h3>Compte-rendu standardisé</h3>
                        <p>Générez automatiquement vos comptes rendus en quelques clics. Profitez d'un processus simple, standardisé et professionnel.</p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Service;