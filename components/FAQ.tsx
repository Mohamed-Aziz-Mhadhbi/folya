import { prefix } from '@/prefix';

const FAQ = () => {
    return (
        <section id="faq">
            <div className="wrapper-faq flex-row container">
                <div className="faq-content">
                    <span className="suptitle">Questions fréquentes</span>
                    <h2>Questions fréquentes</h2>
                    <div className="wrapper-accordion">
                        <h3>
                            <i/>
                            &gt; Qu'est-ce que Folya ?
                        </h3>
                        <div className="content-accordion">
                            <p>
                                Folya est une application de gestion de cabinet paramédical complète conçue pour simplifier et optimiser votre pratique quotidienne. Elle vous permet de centraliser toutes vos tâches administratives et cliniques en un seul endroit, vous offrant ainsi une solution efficace pour améliorer votre productivité et la qualité des soins prodigués à vos patients.
                            </p>
                        </div>
                        <h3>
                            <i className="fa-solid fa-chevron-down" />
                            `&gt;` Comment puis-je commencer à utiliser Folya ?
                        </h3>
                        <div
                            className="content-accordion"
                            style={{ display: "none" }}
                        >
                            <p>
                                Folya est simple et rapide. Vous pouvez vous connecter à votre application sur notre site web et suivre les instructions fournies pour créer votre compte. Notre équipe d'assistance est également disponible pour vous guider et répondre à toutes vos questions.
                            </p>
                        </div>
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
                    </div>
                </div>
                <div className="faq-img">
                    <img src={`${prefix}/image/faq.png`} alt="" />
                </div>
            </div>
            {/*/.wrapper-faq */}
        </section>
    );
}

export default FAQ;
