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
                    <h3>Dossier-patient standardisé</h3>
                    <p>
                        Enregistrez et consultez les fiches administratives, médicales et les comptes-rendus. Conservez les prescriptions de soins. </p>
                </article>
                <article className="align-center">
                    <img src={`${prefix}/image/service-4.png`} alt="" />
                    <h3>Tests d’évaluation personnalisés</h3>
                    <p>
                        Stockez et accédez aux bilans spécifiques à votre métier. Plus besoin d’imprimer vos grilles ou de noter vos observations sur papier.
                    </p>
                </article>
                <article className="align-center">
                    <img src={`${prefix}/image/suivi.png`} alt="" />
                    <h3>Suivi des patients</h3>
                    <p>
                        Gardez un œil sur l'évolution de l'état de vos patients. Préservez un historique de votre prise en charge.
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
                        Automatisez la création, la consultation et l'impression de vos factures. Suivez vos paiements et vos revenues en temps réel.
                    </p>
                </article>
                <article className="align-center">
                    <img src={`${prefix}/image/analyses.png`} alt="" />
                    <h3>Activité du cabinet optimisée</h3>
                    <p>
                        Bénéficiez de rapports et d'analyses sur mesure adaptés à votre cabinet. Améliorez la gestion de vos dépenses, de votre trésorerie et de votre comptabilité.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default Service;
