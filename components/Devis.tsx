"use client"
import TextFieldNom from './devis/TextFieldNom';
import TextFieldPrenom from './devis/TextFieldPrenom';
import TextFieldTelephonePortable from './devis/TextFieldTelephonePortable';
import TextFieldEmailAdresse from './devis/TextFieldEmailAdresse';
import TextFieldCodePostal from './devis/TextFieldCodePostal';
import TextFieldSpeciale from './devis/TextFieldSpecialte';
import TextFieldMessage from './devis/TextFieldMessage';

const Devis = () => {
    return (
        <section id="booking" className="ptb">
            <div className="container">
                <span className="suptitle">Devis</span>
                <h2>Devis</h2>
            </div>
            <div className="container wrapper-booking flex-row">
                <div className="bookong-form">
                    <form method="POST">
                        <div className=" flex-row">
                            <TextFieldNom />
                            <TextFieldPrenom />
                        </div>
                        {/* <div className="wrapper-input flex-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Prénom*"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            {touched.name && validationErrors.name && (
                                <p className="error">{validationErrors.name}</p>
                            )}
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Nom*"
                                value={values.lastname}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            {touched.lastname && validationErrors.lastname && (
                                <p className="error">{validationErrors.lastname}</p>
                            )}
                        </div> */}
                        <div className=" flex-row">
                            <TextFieldTelephonePortable />
                            <TextFieldEmailAdresse />
                        </div>
                        {/* <div className="wrapper-input flex-row">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Numéro de téléphone*"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            {touched.phone && validationErrors.phone && (
                                <p className="error">{validationErrors.phone}</p>
                            )}
                            <input
                                type="text"
                                name="email"
                                placeholder="Adresse email*"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            {touched.email && validationErrors.email && (
                                <p className="error">{validationErrors.email}</p>
                            )}
                        </div> */}
                        <div className="wrapper-input flex-row">
                            <TextFieldCodePostal />
                            <TextFieldSpeciale />
                        </div>
                        {/* <div className="wrapper-input flex-row">
                            <input
                                type="text"
                                name="ville"
                                placeholder="Ville d'exercice*"
                                value={values.ville}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            {touched.ville && validationErrors.ville && (
                                <p className="error">{validationErrors.ville}</p>
                            )}
                            <input
                                type="text"
                                name="sp"
                                placeholder="Votre spécialité paramédicale*"
                                value={values.sp}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            {touched.sp && validationErrors.sp && (
                                <p className="error">{validationErrors.sp}</p>
                            )}
                        </div> */}
                        <TextFieldMessage />
                        <button className="btn" id="sendbook" type="submit" >
                            Obtenez votre devis
                        </button>
                        <p className="res-booking" >
                            <span className="send">Thanks. We will contact you shortly.</span>
                        </p>
                    </form>
                </div>
                <div className="booking-working-hours">
                    <h3>Nous sommes heureux de vous proposer un devis pour nos services.</h3>
                    <p>
                        Afin de mieux répondre à vos besoins, veuillez remplir le formulaire ci-dessous. Plus vous nous fournirez
                        d'informations, plus nous serons en mesure de vous proposer un devis précis et adapté à vos besoins.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Devis;
