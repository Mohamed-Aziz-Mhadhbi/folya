
const Devis = () => {
    return (
        <section id="booking" className="ptb">
        <div className="container">
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
    );
}

export default Devis;
