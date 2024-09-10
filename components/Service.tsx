import { prefix } from '@/prefix';

const Service = () => {
    return (
        <section id="services" className="ptb">
            <div className="wrapper-title container align-center">
                <span className="suptitle">Nos Fonctionnalités</span>
                <h2>Fonctionnalités clés <span className="selection">de Folya</span></h2>
            </div>

            <div className="wrapper-service container flex-row">
                <article className="align-center">
                    <img src={`${prefix}/image/dossiersPatients.png`} alt="" />
                    <h3>Dossier patients paramédical standardisé et complet</h3>
                    <p>
                        Enregistrez et consultez les fiches administratives et médicales, effectuez des évaluations spécifiques à votre profession et conservez les ordonnances de prise en charge.
                    </p>
                </article>
                <article className="align-center">
                    <img src={`${prefix}/image/service-4.png`} alt="" />
                    <h3>Configuration des bilans et tests d’évaluation</h3>
                    <p>
                        Stockez et accédez à tous vos tests d’évaluation spécifiques à votre métier. Avec Folya, plus besoin d’imprimer vos grilles ou de noter vos observations sur papier. Profitez d’un annuaire de bilans personnalisé et accessible partout
                    </p>
                </article>
                <article className="align-center">
                    <img src={`${prefix}/image/suivi.png`} alt="" />
                    <h3>Suivi des patients</h3>
                    <p>
                        Gardez un œil sur l'évolution de l'état de vos patients et conservez un historique de votre prise en charge, depuis l'évaluation initiale jusqu'au compte rendu final, en incluant vos objectifs thérapeutiques.
                    </p>
                </article>
                <article className="align-center">
                    <img src={`${prefix}/image/rendez-vous.png`} alt="" />
                    <h3>Gestion des rendez-vous</h3>
                    <p>
                        Planifiez, modifiez et annulez vos rendez-vous en quelques clics en consultant votre calendrier.
                    </p>
                </article>
                <article className="align-center">
                    <img src={`${prefix}/image/facturation.png`} alt="" />
                    <h3>Facturation des actes</h3>
                    <p>
                        Automatisez la création, la consultation et l'envoi des factures, suivez les paiements en temps réel et obtenez des rapports détaillés sur vos revenus.
                    </p>
                </article>
                <article className="align-center">
                    <img src={`${prefix}/image/analyses.png`} alt="" />
                    <h3>Rapports et analyses</h3>
                    <p>
                        Accédez à des informations clés sur votre pratique grâce à des rapports personnalisés.  Identifiez les tendances et optimisez vos processus, votre trésorerie, vos dépenses et votre comptabilité.
                    </p>
                </article>



            </div>
        </section>
    );
}

export default Service;
