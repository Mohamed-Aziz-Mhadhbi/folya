import Hero from "@/components/Hero";
import { prefix } from "@/prefix";

export default function Home() {
    return (<>
        <Hero />
        <div className="wrap">
            <section className="content">
                {/* ====== Preloader ====== */}
                <div id="preload" style={{ display: "none" }}>
                    <img src={`${prefix}/preload.png`} alt="" />
                </div>
                {/* ======End Preloader ====== */}
                <div className="wrapper" id="home">
                    <main>
                        {/* ====== About Us ====== */}
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

                        {/* ====== End About Us ====== */}
                        {/* ====== Services ====== */}
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
                        {/* ====== End Services ====== */}
                        {/* ====== Offer ====== */}
                        <section id="offer" className="ptb">
                            <div className="wrapper-offer container flex-row">
                                <div className="offer-content">
                                    <span className="suptitle"></span>
                                    <h2>Optimisez votre flux de travail et</h2>
                                    <p>
                                        Gagnez du temps, augmentez votre productivité et réduisez votre stress avec Folya.
                                        Notre solution vous permet de gérer efficacement votre portefeuille patient, du planning des rendez-vous à la facturation en passant par la gestion de vos bilans.
                                        Découvrez comment notre application peut transformer votre pratique quotidienne et améliorer votre vie professionnelle.
                                    </p>
                                    <a className="btn appointment" href="#booking">
                                        Réservez votre démo
                                    </a>
                                </div>
                                {/*/.offer-content*/}
                                <div className="offer-img">
                                    <img src={`${prefix}/img-header.png`} alt="" />
                                </div>
                                {/*/.offer-img*/}
                            </div>
                            {/*/.wrapper-offer*/}
                        </section>
                        {/* ====== End Offer ====== */}

                        {/* ====== FAQ ====== */}
                        <section id="faq">
                            <div className="wrapper-faq flex-row container">
                                <div className="faq-content">
                                    <span className="suptitle">Faq</span>
                                    <h2>FAQ</h2>
                                    <div className="wrapper-accordion">
                                        <h3>
                                            <i className="fa-solid fa-chevron-down" />
                                            Qu'est-ce que Folya ?
                                        </h3>
                                        <div
                                            className="content-accordion"
                                            style={{ display: "none" }}
                                        >
                                            <p>
                                                Folya est une application de gestion de cabinet paramédical complète conçue pour simplifier et optimiser votre pratique quotidienne. Elle vous permet de centraliser toutes vos tâches administratives et cliniques en un seul endroit, vous offrant ainsi une solution efficace pour améliorer votre productivité et la qualité des soins prodigués à vos patients.
                                            </p>
                                        </div>
                                        {/*/.content-accordion*/}
                                        <h3>
                                            <i className="fa-solid fa-chevron-down" />
                                            Comment puis-je commencer à utiliser Folya ?
                                        </h3>
                                        <div
                                            className="content-accordion"
                                            style={{ display: "none" }}
                                        >
                                            <p>
                                                Folya est simple et rapide. Vous pouvez vous connecter à votre application sur notre site web et suivre les instructions fournies pour créer votre compte. Notre équipe d'assistance est également disponible pour vous guider et répondre à toutes vos questions.
                                            </p>
                                        </div>
                                        {/*/.content-accordion*/}
                                        <h3>
                                            <i className="fa-solid fa-chevron-down" />
                                            Folya est-elle compatible avec mon appareil ?
                                        </h3>
                                        <div
                                            className="content-accordion"
                                            style={{ display: "none" }}
                                        >
                                            <p>
                                                Folya est accessible sur une variété d'appareils : les ordinateurs, tablettes et smartphones, sans nécessiter d'investissement supplémentaire en matériel ou serveurs.
                                                La compatibilité de Folya vous assure une accessibilité flexible et sans contraintes, quel que soit l’appareil utilisé pour votre connexion.
                                            </p>
                                        </div>
                                        {/*/.content-accordion*/}
                                        <h3>
                                            <i className="fa-solid fa-chevron-down" />
                                            Folya est-elle sécurisée ?
                                        </h3>
                                        <div
                                            className="content-accordion"
                                            style={{ display: "none" }}
                                        >
                                            <p>
                                                La protection de vos données est notre principale préoccupation. Folya intègre des technologies de sécurité avancées pour stocker vos informations sensibles. Nous nous engageons à respecter les normes les plus strictes en matière de confidentialité et de sécurité des données de santé, en collaborant avec des hébergeurs de santé certifiés.
                                            </p>
                                        </div>
                                        {/*/.content-accordion*/}
                                        <h3>
                                            <i className="fa-solid fa-chevron-down" />
                                            Puis-je essayer Folya gratuitement ?
                                        </h3>
                                        <div
                                            className="content-accordion"
                                            style={{ display: "none" }}
                                        >
                                            <p>
                                                Oui, vous pouvez profiter d'un essai gratuit de 30 jours pour découvrir toutes les fonctionnalités de Folya et voir comment elle peut vous aider à améliorer votre pratique. Inscrivez-vous dès aujourd'hui pour commencer votre essai gratuit ! </p>
                                        </div>
                                        {/*/.content-accordion*/}
                                        <h3>
                                            <i className="fa-solid fa-chevron-down" />
                                            Comment puis-je obtenir de l'aide avec Folya ?
                                        </h3>
                                        <div
                                            className="content-accordion"
                                            style={{ display: "none" }}
                                        >
                                            <p>
                                                Notre équipe d'assistance est disponible pour vous aider à tirer le meilleur parti de Folya. Vous pouvez nous contacter par e-mail, téléphone ou chat en direct. Nous sommes toujours heureux de répondre à vos questions et de vous fournir le support dont vous avez besoin. </p>
                                        </div>
                                        {/*/.content-accordion*/}
                                    </div>
                                    {/*wrapper-accordion*/}
                                </div>
                                <div className="faq-img">
                                    <img src={`${prefix}/faq.png`} alt="" />
                                </div>
                            </div>
                            {/*/.wrapper-faq */}
                        </section>
                        {/* ====== End FAQ ====== */}
                        {/* ====== Booking ====== */}
                        <section id="booking" className="ptb">
                            <div className="container">
                                {/* <span className="suptitle">Booking</span> */}
                                <h2>Devis</h2>
                            </div>
                            <div className="container wrapper-booking flex-row">
                                <div className="bookong-form">
                                    <form method="POST">
                                        <div className="wrapper-input flex-row">
                                            <input type="text" name="name" placeholder="Prénom" />
                                            <input
                                                type="text"
                                                name="lastname"
                                                placeholder="Nom"
                                            />
                                        </div>
                                        {/*/.wrapper-input*/}
                                        <div className="wrapper-input flex-row">
                                            <input type="text" name="phone" placeholder="Numéro de téléphone" />
                                            <input type="text" name="email" placeholder="Adresse email" />
                                        </div>
                                        {/*/.wrapper-input*/}
                                        <div className="wrapper-input flex-row">
                                            <input type="text" name="date" placeholder="Ville d'exercice" />
                                            <input type="text" name="time" placeholder="Votre spécialité paramédicale" />
                                        </div>
                                        {/*/.wrapper-input*/}
                                        <div className="wrapper-input flex-row">
                                            <input type="text" name="date" placeholder="Message" className="large-input" />
                                        </div>
                                        <button className="btn" id="sendbook" type="submit">
                                            Obtenez  un devis gratuitement
                                        </button>
                                        <p className="res-booking" />
                                    </form>
                                </div>
                                {/*/.bookong-form*/}
                                <div className="booking-working-hours">
                                    <h3>Nous sommes heureux de vous proposer un devis gratuit pour nos services.</h3>
                                    <p>
                                        Afin de mieux répondre à vos besoins, veuillez remplir le formulaire ci-dessous. Plus vous nous fournirez d'informations, plus nous serons en mesure de vous proposer un devis précis et adapté à vos besoins

                                    </p>

                                </div>
                                {/*/.booking-working-hours*/}
                            </div>
                            {/*/.wrapper-booking*/}
                        </section>
                        {/* ====== End Booking ====== */}
                    </main>
                </div>
                {/*/.wrapper*/}
                {/* ====== Scroll Top ====== */}
                <a id="scroll-top" className="btn" href="#" style={{}}>
                    <i className="fa-solid fa-arrow-up-long" />
                </a>
                {/* ====== Carousel ====== */}
                {/* ====== Custom js ======  */}
            </section>
        </div>
    </>
    )
}
