import Hero from "@/components/Hero";
import React from "react";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="wrap">
                <section className="content">
                    {/* Preloader */}
                    <div id="preload" style={{ display: "none" }}>
                        <img src="assets/images/preload.png" alt="Preloader" />
                    </div>
                    {/* Main Wrapper */}
                    <div className="wrapper" id="home">
                        <main>
                            {/* About Us Section */}
                            <section id="aboutus" className="ptb flex-row">
                                <div className="container flex-row wrapper-feature">
                                    <div className="single-feature align-center">
                                        <img src="/feature-1.png" alt="Digitalisation" />
                                        <h3>Digitalisation de votre travail et gain d’espace dans votre cabinet</h3>
                                        <p>Folya vous permet de numériser tous vos dossiers papiers, de libérer de l’espace dans votre cabinet et d’automatiser l'accès à vos fiches.</p>
                                    </div>
                                    <div className="single-feature align-center">
                                        <img src="/feature-2.png" alt="Optimisation" />
                                        <h3>Organisation optimisée et gain du temps</h3>
                                        <p>Gérez tous les aspects de votre pratique à partir d'une seule plateforme, accessible d'un simple clic, où que vous soyez et à tout moment.</p>
                                    </div>
                                    <div className="single-feature align-center">
                                        <img src="/feature-3.png" alt="Data Management" />
                                        <h3>Amélioration de la gestion des données patient</h3>
                                        <p>Saisissez des informations importantes en temps réel, améliorez la coordination des données des patients et réduisez les risques d'erreurs médicales.</p>
                                    </div>
                                    <div className="single-feature align-center">
                                        <img src="/feature-4.png" alt="Centralized Records" />
                                        <h3>Dossiers patients centralisés et sécurisés</h3>
                                        <p>Accédez aux dossiers patients, suivez l'évolution de l'état de vos patients, prenez des notes cliniques et stockez des informations en toute sécurité.</p>
                                    </div>
                                    <div className="single-feature align-center">
                                        <img src="/feature-4.png" alt="Automated Billing" />
                                        <h3>Facturation automatisée et suivi des finances</h3>
                                        <p>Dites adieu aux factures manuelles et aux erreurs de saisie ! Folya automatise la facturation et le suivi des paiements, tout en optimisant votre trésorerie.</p>
                                    </div>
                                    <div className="single-feature align-center">
                                        <img src="/feature-4.png" alt="Reports" />
                                        <h3>Rapports et analyses précieuses</h3>
                                        <p>Obtenez des informations clés sur votre pratique et l’activité de votre cabinet grâce à des rapports et analyses personnalisés. Anticipez vos périodes de congé et prenez des décisions éclairées pour améliorer votre efficacité.</p>
                                    </div>
                                </div>
                                <div className="container flex-row wrapper-aboutus">
                                    <div className="aboutus-img">
                                        <img src="/aboutus.png" alt="About Us" />
                                    </div>
                                    <div className="aboutus-content">
                                        <span className="suptitle">En Savoir Plus</span>
                                        <h2>Au cœur de notre mission <span className="highlight">se trouvent votre bien-être et celui de vos patients</span></h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ex voluptatem quis est. Iusto sequi perspiciatis non cumque velit quo. Tempore, debitis molestias officia animi obcaecati voluptatem deleniti.</p>
                                        <div className="wrapper-aboutus-progress">
                                            <div className="single-progress flex-row">
                                                <div className="progress-img">
                                                    <img src="/progress-1.png" alt="Service 20 Years" />
                                                </div>
                                                <div className="progress-content">
                                                    <h3>Service 20 Years</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quaerat.</p>
                                                </div>
                                            </div>
                                            <div className="single-progress flex-row">
                                                <div className="progress-img">
                                                    <img src="/progress-2.png" alt="Reliable Contractors" />
                                                </div>
                                                <div className="progress-content">
                                                    <h3>Reliable Contractors</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quaerat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wrapper-signature flex-row">
                                            <img src="/img-signature.png" alt="Signature" />
                                            <div className="signature-content">
                                                <h3>Jeremy White</h3>
                                                <img src="/signature.png" alt="Signature" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Services Section */}
                            <section id="services" className="ptb">
                                <div className="container align-center wrapper-title">
                                    <span className="suptitle">Nos Fonctionnalités</span>
                                    <h2>Fonctionnalités clés <span className="highlight">de Folya</span></h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel tempora, eius sint pariatur quas nemo cum. Ratione incidunt, praesentium doloribus quaerat animi ipsam id perspiciatis deserunt similique iste itaque nulla!</p>
                                </div>
                                <div className="container flex-row wrapper-service">
                                    <article className="align-center">
                                        <img src="/service-1.png" alt="Gestion des rendez-vous" />
                                        <h3>Gestion des rendez-vous</h3>
                                        <p>Planifiez, modifiez et annulez vos rendez-vous en quelques clics en consultant votre calendrier.</p>
                                    </article>
                                    <article className="align-center">
                                        <img src="/service-2.png" alt="Dossier patients paramédical" />
                                        <h3>Dossier patients paramédical standardisé et complet</h3>
                                        <p>Enregistrez et consultez les fiches administratives et médicales, effectuez des évaluations spécifiques à votre profession et conservez les ordonnances de prise en charge.</p>
                                    </article>
                                    <article className="align-center">
                                        <img src="/service-3.png" alt="Suivi des patients" />
                                        <h3>Suivi des patients</h3>
                                        <p>Gardez un œil sur l'évolution de l'état de vos patients et conservez un historique de votre prise en charge, depuis l'évaluation initiale jusqu'au compte rendu final, en incluant vos objectifs thérapeutiques.</p>
                                    </article>
                                    <article className="align-center">
                                        <img src="/service-4.png" alt="Configuration des bilans" />
                                        <h3>Configuration des bilans et tests d’évaluation</h3>
                                        <p>Stockez et accédez à tous vos tests d’évaluation spécifiques à votre métier. Avec Folya, plus besoin d’imprimer vos grilles ou de noter vos observations sur papier. Profitez d’un annuaire de bilans personnalisé et accessible partout.</p>
                                    </article>
                                    <article className="align-center">
                                        <img src="/service-5.png" alt="Facturation des actes" />
                                        <h3>Facturation des actes</h3>
                                        <p>Automatisez la création, la consultation et l'envoi des factures, suivez les paiements en temps réel et obtenez des rapports détaillés sur vos revenus.</p>
                                    </article>
                                    <article className="align-center">
                                        <img src="/service-6.png" alt="Rapports et analyses" />
                                        <h3>Rapports et analyses</h3>
                                        <p>Accédez à des informations clés sur votre pratique grâce à des rapports personnalisés. Identifiez les tendances et optimisez vos processus, votre trésorerie, vos dépenses et votre comptabilité.</p>
                                    </article>
                                </div>
                            </section>
                            {/* Offer Section */}
                            <section id="offer" className="ptb">
                                <div className="container flex-row wrapper-offer">
                                    <div className="offer-content">
                                        <h2>Optimisez votre flux de travail et</h2>
                                        <p>Gagnez du temps, augmentez votre productivité et réduisez votre stress avec Folya. Notre solution vous permet de gérer efficacement votre portefeuille patient, du planning des rendez-vous à la facturation en passant par la gestion de vos bilans. Découvrez comment notre application peut transformer votre pratique quotidienne et améliorer votre vie professionnelle.</p>
                                        <a className="btn appointment" href="#booking">Réservez votre démo</a>
                                    </div>
                                    <div className="offer-img">
                                        <img src="/offer-img.png" alt="Special Offer" />
                                    </div>
                                </div>
                            </section>
                        </main>
                    </div>
                </section>
            </div>
        </>
    );
}
