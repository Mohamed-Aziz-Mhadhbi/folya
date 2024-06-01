import { prefix } from '@/prefix';
import '../app/styles/Service.module.css';

const Service = () => {
    return (
        <section id="services" className="ptb">
            <div className="wrapper-title container align-center">
                <span className="suptitle">Nos Fonctionnalités</span>
                <h2>
                    Fonctionnalités clés <span className="selection">de Folya</span>
                </h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                    tempora, eius sint pariatur quas nemo cum. Ratione incidunt,
                    praesentium doloribus quaerat animi ipsam id perspiciatis
                    deserunt similique iste itaque nulla!
                </p>
            </div>
            {/*/wrapper-title*/}
            <div className="wrapper-service container flex-row">
                <article className="align-center">
                    <img src={`${prefix}/service-1.png`} alt="" />
                    <h3>Gestion des rendez-vous</h3>
                    <p>
                        Planifiez, modifiez et annulez vos rendez-vous en quelques clics en consultant votre calendrier.
                    </p>
                </article>
                <article className="align-center">
                    <img src={`${prefix}/service-2.png`} alt="" />
                    <h3>Dossier patients paramédical standardisé et complet</h3>
                    <p>
                        Enregistrez et consultez les fiches administratives et médicales, effectuez des évaluations spécifiques à votre profession et conservez les ordonnances de prise en charge.
                    </p>
                </article>
                <article className="align-center">
                    <img src={`${prefix}/service-3.png`} alt="" />
                    <h3>Suivi des patients</h3>
                    <p>
                        Gardez un œil sur l'évolution de l'état de vos patients et conservez un historique de votre prise en charge, depuis l'évaluation initiale jusqu'au compte rendu final, en incluant vos objectifs thérapeutiques.
                    </p>
                </article>
                <article className="align-center">
                    <img src={`${prefix}/service-4.png`} alt="" />
                    <h3>Configuration des bilans et tests d’évaluation</h3>
                    <p>
                        stockez et accédez à tous vos tests d’évaluation spécifiques à votre métier. Avec Folya, plus besoin d’imprimer vos grilles ou de noter vos observations sur papier. Profitez d’un annuaire de bilans personnalisé et accessible partout
                    </p>
                </article>
                <article className="align-center">
                    <img src={`${prefix}/service-5.png`} alt="" />
                    <h3>Facturation des actes</h3>
                    <p>
                        Automatisez la création, la consultation et l'envoi des factures, suivez les paiements en temps réel et obtenez des rapports détaillés sur vos revenus.
                    </p>
                </article>
                <article className="align-center">
                    <img src={`${prefix}/service-6.png`} alt="" />
                    <h3>Rapports et analyses</h3>
                    <p>
                        Accédez à des informations clés sur votre pratique grâce à des rapports personnalisés.  Identifiez les tendances et optimisez vos processus, votre trésorerie, vos dépenses et votre comptabilité.
                    </p>
                </article>
            </div>
            {/*/.wrapper-service*/}
        </section>
    );
}

export default Service;
