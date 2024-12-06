"use client"
import TextFieldNom from './devis/TextFieldNom';
import TextFieldPrenom from './devis/TextFieldPrenom';
import TextFieldTelephonePortable from './devis/TextFieldTelephonePortable';
import TextFieldEmailAdresse from './devis/TextFieldEmailAdresse';
import TextFieldCodePostal from './devis/TextFieldCodePostal';
import TextFieldSpeciale from './devis/TextFieldSpecialte';
import TextFieldMessage from './devis/TextFieldMessage';

const Centre = () => {
    return (
        <section className="ptb">
            <div className="container wrapper-booking flex-row">
                <div className="bookong-form">
                    <form method="POST">
                        <div className="wrapper-input">
                            <TextFieldNom />
                            <TextFieldPrenom />
                        </div>
                        <div className="wrapper-input ">
                            <TextFieldTelephonePortable />
                            <TextFieldEmailAdresse />
                        </div>
                        <div className="wrapper-input">
                            <TextFieldCodePostal />
                            <TextFieldSpeciale />
                        </div>
                        <div className="wrapper-input">
                            <TextFieldMessage />
                        </div>
                        <button className="btn" id="sendbook" type="submit" >
                            Valider votre demande
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Centre;
