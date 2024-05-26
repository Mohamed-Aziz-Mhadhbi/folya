"use client";
import Hero from "@/components/Hero";
import { prefix } from "@/prefix";
import { useDynamicStyle } from "./useDynamicStyles";
import "./styles/responsive.css";
import AboutUs from "@/components/AboutUs";
import Service from "@/components/Service";
import Offers from "@/components/Offers";

export default function Home() {
    useDynamicStyle("/styles/responsive.css");

    return (
        <>
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
                            <AboutUs/>
                            <Service/>
                            <Offers/>
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
    );
}
