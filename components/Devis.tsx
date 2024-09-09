import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { sendContactForm } from '../lib/api';

// Define a type for the form values
interface FormValues {
    name: string;
    lastname: string;
    phone: string;
    email: string;
    ville: string;
    sp: string;
    message: string;
}

interface State {
    isLoading: boolean;
    error: string;
    values: FormValues;
    validationErrors: Partial<FormValues>;
}

const initValues: FormValues = { name: '', lastname: '', phone: '', email: '', ville: '', sp: '', message: '' };
const initState: State = { isLoading: false, error: '', values: initValues, validationErrors: {} };

const Devis = () => {
    const toast = useToast();

    const [state, setState] = useState<State>(initState);
    const [touched, setTouched] = useState<Partial<FormValues>>({});

    const { values, isLoading, error, validationErrors } = state;

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [name]: value,
            },
        }));
    };

    const validate = () => {
        const errors: Partial<FormValues> = {};
        if (!values.name) errors.name = 'Prénom est requis';
        if (!values.lastname) errors.lastname = 'Nom est requis';
        if (!values.phone) errors.phone = 'Numéro de téléphone est requis';
        if (!values.email) {
            errors.email = 'Adresse email est requise';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Adresse email invalide';
        }
        if (!values.ville) errors.ville = "Ville d'exercice est requise";
        if (!values.sp) errors.sp = 'Spécialité paramédicale est requise';
        if (!values.message) errors.message = 'Message est requis';
        return errors;
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setState((prev) => ({
                ...prev,
                validationErrors: errors,
            }));
            return;
        }
        setState((prev) => ({
            ...prev,
            isLoading: true,
            validationErrors: {},
        }));
        try {
            await sendContactForm(values);
            setTouched({});
            setState(initState);
            toast({
                title: 'Message envoyé.',
                status: 'success',
                duration: 2000,
                position: 'top',
            });
        } catch (error: any) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
    };

    return (
        <section id="booking" className="ptb">
            <div className="container">
                <span className="suptitle">Devis</span>
                <h2>Devis</h2>
            </div>
            <div className="container wrapper-booking flex-row">
                <div className="bookong-form">
                    <form method="POST" onSubmit={onSubmit}>
                        <div className="wrapper-input flex-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Prénom"
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
                                placeholder="Nom"
                                value={values.lastname}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            {touched.lastname && validationErrors.lastname && (
                                <p className="error">{validationErrors.lastname}</p>
                            )}
                        </div>
                        <div className="wrapper-input flex-row">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Numéro de téléphone"
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
                                placeholder="Adresse email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            {touched.email && validationErrors.email && (
                                <p className="error">{validationErrors.email}</p>
                            )}
                        </div>
                        <div className="wrapper-input flex-row">
                            <input
                                type="text"
                                name="ville"
                                placeholder="Ville d'exercice"
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
                                placeholder="Votre spécialité paramédicale"
                                value={values.sp}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            {touched.sp && validationErrors.sp && (
                                <p className="error">{validationErrors.sp}</p>
                            )}
                        </div>
                        <div className="wrapper-input flex-row">
                            <input
                                type="text"
                                name="message"
                                placeholder="Message"
                                className="large-input"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            {touched.message && validationErrors.message && (
                                <p className="error">{validationErrors.message}</p>
                            )}
                        </div>
                        <button className="btn" id="sendbook" type="submit" disabled={isLoading}>
                            Obtenez un devis gratuitement
                        </button>
                        {error && <p className="res-booking">{error}</p>}
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
