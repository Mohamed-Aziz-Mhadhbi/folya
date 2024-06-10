import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { sendContactForm } from "../lib/api";

const initValues = { name: "", lastname: "", phone: "", email: "", ville: "", sp: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };

const Devis = () => {
    const toast = useToast();

    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});

    const { values, isLoading, error } = state;

    const onBlur = (e:any) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [name]: value,
            },
        }));
    };

    const onSubmit = async (e:any) => {
        e.preventDefault();
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            await sendContactForm(values);
            setTouched({});
            setState(initState);
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top",
            });
        } catch (error:any) {
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
                <h2>Devis</h2>
            </div>
            <div className="container wrapper-booking flex-row">
                <div className="booking-form">
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
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Nom"
                                value={values.lastname}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
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
                            <input
                                type="text"
                                name="email"
                                placeholder="Adresse email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
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
                            <input
                                type="text"
                                name="sp"
                                placeholder="Votre spécialité paramédicale"
                                value={values.sp}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
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
                        </div>
                        <button className="btn" id="sendbook" type="submit" disabled={isLoading}>
                            Obtenez un devis gratuitement
                        </button>
                        {error && <p className="res-booking">{error}</p>}
                    </form>
                </div>
                <div className="booking-working-hours">
                    <h3>Nous sommes heureux de vous proposer un devis gratuit pour nos services.</h3>
                    <p>
                        Afin de mieux répondre à vos besoins, veuillez remplir le formulaire ci-dessous. Plus vous nous fournirez d'informations, plus nous serons en mesure de vous proposer un devis précis et adapté à vos besoins.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Devis;



// import { useState } from "react";
// import {
//     useToast,
// } from "@chakra-ui/react";
// import { sendContactForm } from "../lib/api";

// const initValues = { name: "", lastname: "", phone: "", email: "", ville: "", sp: "", message: "" };
// const initState = { isLoading: false, error: "", values: initValues };


// const Devis = () => {
//     const toast = useToast();

//     const [state, setState] = useState(initState);
//     const [touched, setTouched] = useState({});

//     const { values, isLoading, error } = state;

//     const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
//         const { name } = e.target;
//         setTouched((prev) => ({ ...prev, [name]: true }));
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setState((prev) => ({
//             ...prev,
//             values: {
//                 ...prev.values,
//                 [name]: value,
//             },
//         }));
//     };

//     const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setState((prev) => ({
//             ...prev,
//             isLoading: true,
//         }));
//         try {
//             await sendContactForm(values);
//             setTouched({});
//             setState(initState);
//             toast({
//                 title: "Message sent.",
//                 status: "success",
//                 duration: 2000,
//                 position: "top",
//             });
//         } catch (error: any) {
//             setState((prev) => ({
//                 ...prev,
//                 isLoading: false,
//                 error: error.message,
//             }));
//         }
//     };

//     return (
//         <section id="booking" className="ptb">
//             <div className="container">
//                 <h2>Devis</h2>
//             </div>
//             <div className="container wrapper-booking flex-row">
//                 <div className="bookong-form">
//                     <form method="POST">
//                         <div className="wrapper-input flex-row">
//                             <input type="text" name="name" placeholder="Prénom" />
//                             <input type="text" name="lastname" placeholder="Nom" />
//                         </div>
//                         {/*/.wrapper-input*/}
//                         <div className="wrapper-input flex-row">
//                             <input type="text" name="phone" placeholder="Numéro de téléphone" />
//                             <input type="text" name="email" placeholder="Adresse email" />
//                         </div>
//                         {/*/.wrapper-input*/}
//                         <div className="wrapper-input flex-row">
//                             <input type="text" name="ville" placeholder="Ville d'exercice" />
//                             <input type="text" name="sp" placeholder="Votre spécialité paramédicale" />
//                         </div>
//                         {/*/.wrapper-input*/}
//                         <div className="wrapper-input flex-row">
//                             <input type="text" name="message" placeholder="Message" className="large-input" />
//                         </div>
//                         <button className="btn" id="sendbook" type="submit">
//                             Obtenez  un devis gratuitement
//                         </button>
//                         <p className="res-booking" />
//                     </form>
//                 </div>
//                 {/*/.bookong-form*/}
//                 <div className="booking-working-hours">
//                     <h3>Nous sommes heureux de vous proposer un devis gratuit pour nos services.</h3>
//                     <p>
//                         Afin de mieux répondre à vos besoins, veuillez remplir le formulaire ci-dessous. Plus vous nous fournirez d'informations, plus nous serons en mesure de vous proposer un devis précis et adapté à vos besoins

//                     </p>

//                 </div>
//                 {/*/.booking-working-hours*/}
//             </div>
//             {/*/.wrapper-booking*/}
//         </section>
//     );
// }

// export default Devis;


