import React, { useState } from 'react';
import { prefix } from '@/prefix';

const Feature = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAccordionClick = (index:any) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    const features = [
        {
            img: `${prefix}/image/espace.png`,
            alt: "Digitalisation de votre travail",
            title: "Digitalisation de votre travail et gain d’espace dans votre cabinet",
            description: "Folya vous permet de numériser tous vos dossiers papiers, de libérer de l’espace dans votre cabinet et d’automatiser l'accès à vos fiches."
        },
        {
            img: `${prefix}/image/temps.png`,
            alt: "Organisation optimisée",
            title: "Organisation optimisée et gain du temps",
            description: "Gérez tous les aspects de votre pratique à partir d'une seule plateforme, accessible d'un simple clic, où que vous soyez et à tout moment."
        },
        {
            img: `${prefix}/image/gestionDonnees.png`,
            alt: "Amélioration de la gestion des données",
            title: "Amélioration de la gestion des données patient",
            description: "Saisissez des informations importantes en temps réel, améliorez la coordination des données des patients et réduisez les risques d'erreurs médicales."
        },
        {
            img: `${prefix}/image/dossiersPatients.png`,
            alt: "Dossiers patients centralisés",
            title: "Dossiers patients centralisés et sécurisés",
            description: "Accédez aux dossiers patients, suivez l'évolution de l'état de vos patients, prenez des notes cliniques et stockez des informations en toute sécurité."
        },
        {
            img: `${prefix}/image/suivi.png`,
            alt: "Facturation automatisée",
            title: "Facturation automatisée et suivi des finances",
            description: "Dites adieu aux factures manuelles et aux erreurs de saisie ! Folya automatise la facturation et le suivi des paiements, tout en optimisant votre trésorerie."
        },
        {
            img: `${prefix}/image/analyses.png`,
            alt: "Rapports et analyses",
            title: "Rapports et analyses précieuses",
            description: "Obtenez des informations clés sur votre pratique et l’activité de votre cabinet grâce à des rapports et analyses personnalisés. Anticipez vos périodes de congé et prenez des décisions éclairées pour améliorer votre efficacité."
        }
    ];

    return (
        <section id="aboutus" className="ptb">
            <div className="wrapper-feature container flex-row">
            <span className="suptitle">Avantages</span>
                <h2>Avantages</h2>
            </div>
                {features.map((feature, index) => (
                    <div key={index} className="single-feature align-center">
                        <img src={feature.img} alt={feature.alt} />
                        <h3 onClick={() => handleAccordionClick(index)}>
                            {feature.title}
                            <span className={`fa-solid ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                        </h3>
                        {activeIndex === index && <p>{feature.description}</p>}
                    </div>
                ))}
        </section>
    );
}

export default Feature;
