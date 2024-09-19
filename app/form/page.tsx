"use client"
import LagalNote from '@/components/form/LegalNote';
import TextFieldCodePostal from '@/components/form/TextFieldCodePostal';
import TextFieldEmailAdresse from '@/components/form/TextFieldEmailAdresse';
import TextFieldNom from '@/components/form/TextFieldNom';
import TextFieldPrenom from '@/components/form/TextFieldPrenom';
import TextFieldTelephonePortable from '@/components/form/TextFieldTelephonePortable';
import SimpleDropdown from '../../components/form/DropDown';
import Speciale from '../../components/form/TextFieldSpecialte';

export default function Form() {
    return (
        <>
            <link
                rel="stylesheet"
                id="main-style-css"
                href="https://info.doctolib.fr/wp-content/themes/common/dist/app_b2b.cca0824d5919c5666c1f.min.css?ver=1725885819"
                type="text/css"
                media="all"
            />
            <div
                className="hero-form-blue__inner container container--large"
                data-select2-id="select2-data-15-bh5f"
            >
                <div className="hero-form-blue__content">
                    <div className="hero-form-blue__title">
                        <h1 className="title title--xxxlarge title--doodle-sky-400">
                            La{" "}
                            <strong>
                                <em>nouvelle</em>
                            </strong>{" "}
                            génération de solutions pour les praticiens
                        </h1>
                    </div>
                    <div className="hero-form-blue__subtitle-and-slider">
                        <div className="hero-form-blue__slider-wrapper">
                            <ul className="hero-form-blue__slider hero-form-blue__slider--3">
                                <li className="hero-form-blue__slider-item">
                                    <p className="title title--xlarge hero-form-blue__slider-item-title">
                                        Gagnez du temps au quotidien
                                    </p>
                                </li>
                                <li className="hero-form-blue__slider-item">
                                    <p className="title title--xlarge hero-form-blue__slider-item-title">
                                        Gagnez en confort de travail
                                    </p>
                                </li>
                                <li className="hero-form-blue__slider-item">
                                    <p className="title title--xlarge hero-form-blue__slider-item-title">
                                        Renforcez la communication patient
                                    </p>
                                </li>
                                <li className="hero-form-blue__slider-item" aria-hidden="true">
                                    <p className="title title--xlarge hero-form-blue__slider-item-title">
                                        Gagnez du temps au quotidien
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="hero-form-blue__list">
                        <li className="icon-text">
                            <svg
                                className="icon-text__icon"
                                fill="none"
                                height={16}
                                viewBox="0 0 32 16"
                                width={32}
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <g clipPath="url(#a)" fill="#ffcd4c">
                                    <path d="m20.9684 8.43105c-4.9628 2.05265-10.286 3.29335-15.67372 3.35405-1.63908.0114-3.27816-.0986-4.886884-.4174-.3945932-.0796-.660185-.4477-.626037-.8499l.04553-.53493c.034147-.39459.356651-.70951.755039-.72848 3.354042-.15936 6.658762-.06071 9.997672-.40598 3.1036-.29215 6.2148-.82334 9.2046-1.73014l.6488-.17833.0379-.01138c.9676-.26939 1.4305 1.13825.4933 1.4987z" />
                                    <path d="m16.5138.271664c.2467-.155562.6602.053118.9182.094854l.8803.223857c4.0483 1.028225 8.6393 2.200625 12.7977 3.300935.6754.17833.8992 1.02063.406 1.51767-3.5058 3.521-7.0117 7.07992-10.8969 10.17602-.368.2921-.8992.2504-1.2255-.0873l-.3149-.3301c-.2846-.2959-.296-.6488-.0911-.884 2.5194-2.914 5.3346-5.53953 8.1689-8.14613.3225-.29595.2049-.83472-.2125-.96752l-.4781-.15177c-2.4851-.81954-6.1389-2.02988-8.6165-2.84943l-.8613-.28456c-.019-.00759-.0379-.01518-.0569-.02277-.4515-.15556-.6905-.6488-.5578-1.107895z" />
                                </g>
                            </svg>
                            <p className="paragraph icon-text__text paragraph--bold">
                                Des solutions tout-en-un innovantes, conçues avec vous
                            </p>
                        </li>
                        <li className="icon-text">
                            <svg
                                className="icon-text__icon"
                                fill="none"
                                height={16}
                                viewBox="0 0 32 16"
                                width={32}
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <clipPath id="a">
                                    <path d="m0 0h32v16h-32z" />
                                </clipPath>
                                <g clipPath="url(#a)" fill="#ffcd4c">
                                    <path d="m20.9684 8.43105c-4.9628 2.05265-10.286 3.29335-15.67372 3.35405-1.63908.0114-3.27816-.0986-4.886884-.4174-.3945932-.0796-.660185-.4477-.626037-.8499l.04553-.53493c.034147-.39459.356651-.70951.755039-.72848 3.354042-.15936 6.658762-.06071 9.997672-.40598 3.1036-.29215 6.2148-.82334 9.2046-1.73014l.6488-.17833.0379-.01138c.9676-.26939 1.4305 1.13825.4933 1.4987z" />
                                    <path d="m16.5138.271664c.2467-.155562.6602.053118.9182.094854l.8803.223857c4.0483 1.028225 8.6393 2.200625 12.7977 3.300935.6754.17833.8992 1.02063.406 1.51767-3.5058 3.521-7.0117 7.07992-10.8969 10.17602-.368.2921-.8992.2504-1.2255-.0873l-.3149-.3301c-.2846-.2959-.296-.6488-.0911-.884 2.5194-2.914 5.3346-5.53953 8.1689-8.14613.3225-.29595.2049-.83472-.2125-.96752l-.4781-.15177c-2.4851-.81954-6.1389-2.02988-8.6165-2.84943l-.8613-.28456c-.019-.00759-.0379-.01518-.0569-.02277-.4515-.15556-.6905-.6488-.5578-1.107895z" />
                                </g>
                            </svg>
                            <p className="paragraph icon-text__text paragraph--bold">
                                Le plus haut niveau de protection des données de santé
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="hero-form-blue__form" data-select2-id="select2-data-14-e77w">
                    <div
                        className="hero-form-blue__form-inside"
                        data-select2-id="select2-data-125-w8x9"
                    >
                        <div
                            className="hero-form-blue__form-content"
                            data-select2-id="select2-data-124-mlwh"
                        >
                            <div className="form-wrapper" data-select2-id="select2-data-123-m85b">
                                <h2 className="form-wrapper__title title title--large">
                                    Échangez avec un conseiller
                                </h2>
                                <form
                                    className="form-b2b"
                                    data-form-id={341}
                                    data-user-validation="true"
                                    data-enhancer="true"
                                    data-form-type="Modal"
                                    data-two-step="false"
                                >
                                    <input
                                        type="hidden"
                                        defaultValue="contact_form"
                                        name="origin_label"
                                    />
                                    <TextFieldNom/>
                                    <TextFieldPrenom/>
                                    <TextFieldCodePostal/>
                                    <TextFieldTelephonePortable/>
                                    <Speciale />
                                    <TextFieldEmailAdresse/>
                                    <SimpleDropdown />
                                    <input
                                        type="hidden"
                                        name="organization_kind"
                                        defaultValue="SELF_EMPLOYED"
                                    />
                                    <input
                                        type="hidden"
                                        name="product_interest"
                                        defaultValue="BMS"
                                    />
                                    <input type="hidden" name="site_id" defaultValue={3} />
                                    <input type="hidden" name="post_id" defaultValue={8826} />
                                    <input type="hidden" name="catalog_id" defaultValue="3_8826" />
                                    <div className="field-wrapper field-wrapper--hidden">
                                        <input
                                            type="hidden"
                                            name="marketing_campaign_id"
                                            defaultValue="36ca6df5-23d9-43b0-b64e-970b5041f9c4"
                                        />
                                    </div>
                                    <div className="field-wrapper field-wrapper--hidden">
                                        <input type="hidden" name="kind" defaultValue="sales" />
                                    </div>
                                    <p className="required-note">* Champs obligatoires</p>
                                    <div className="power_form_input">
                                        <button
                                            className="step1-submit button button--primary button--fill"
                                            data-url="test_step1"
                                        >
                                            Continuer{" "}
                                        </button>
                                        <input
                                            type="submit"
                                            defaultValue="Valider votre demande"
                                            className="btn"
                                        />
                                    </div>
                                    <LagalNote/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section id="offer" className="ptb">
                <div className="wrapper-aboutus container flex-row">
                    <div className="modalForm">
                        <div className="modalForm__content">
                            <div className="modalForm__content-left">
                                <h2>
                                    Échangez avec un conseiller
                                </h2>
                                <div className="form-wrapper">
                                    <form
                                        className="form-b2b
						"
                                        data-form-id={341}
                                        data-user-validation="true"
                                        data-enhancer="true"
                                        data-form-type="Standard"
                                        data-redirect="https://info.doctolib.fr/thank-you"
                                        data-two-step="true"
                                        noValidate
                                        data-select2-id="select2-data-122-1ziv"
                                    >
                                        <input
                                            type="hidden"
                                            defaultValue="contact_form"
                                            name="origin_label"
                                        />
                                        <div className="field-wrapper" data-row={2} data-step="false">
                                            <input
                                                type="text"
                                                name="last_name"
                                                placeholder="Nom *"
                                                autoComplete="off"
                                                required
                                                className="error"
                                                aria-describedby="last_name-error"
                                                aria-invalid="true"
                                            />
                                            <div id="last_name-error" className="error">
                                                Veuillez saisir votre nom
                                            </div>
                                            <label className="label-and-placeholder">Nom *</label>
                                            <div className="error error--none" />
                                        </div>
                                        <div className="field-wrapper" data-row={2} data-step="false">
                                            <input
                                                type="text"
                                                name="first_name"
                                                placeholder="Prénom *"
                                                autoComplete="off"
                                                required
                                                className="valid"
                                                aria-describedby="first_name-error"
                                                aria-invalid="false"
                                            />
                                            <div id="first_name-error" className="error" />
                                            <label className="label-and-placeholder">Prénom *</label>
                                            <div className="error error--none" />
                                        </div>
                                        <div className="field-wrapper" data-row={2} data-step="false">
                                            <input
                                                name="zipcode"
                                                type="text"
                                                pattern="[0-9]*"
                                                minLength={5}
                                                maxLength={5}
                                                placeholder="Code postal cabinet *"
                                                autoComplete="off"
                                                required
                                                className="valid"
                                                aria-describedby="zipcode-error"
                                                aria-invalid="false"
                                            />
                                            <div id="zipcode-error" className="error" />
                                            <label className="label-and-placeholder">
                                                Code postal cabinet *
                                            </label>
                                            <div className="error error--none" />
                                        </div>
                                        <div className="field-wrapper" data-row={2} data-step="false">
                                            <input
                                                type="tel"
                                                pattern="[0-9]+"
                                                name="phone_number"
                                                placeholder="Téléphone portable *"
                                                autoComplete="off"
                                                required
                                                className="valid"
                                                aria-describedby="phone_number-error"
                                                aria-invalid="false"
                                            />
                                            <div id="phone_number-error" className="error" />
                                            <label className="label-and-placeholder">
                                                Téléphone portable *
                                            </label>
                                            <div className="error error--none" />
                                        </div>
                                        <div className="field-wrapper" data-row={1} data-step="false">
                                            <select
                                                autoComplete="off"
                                                className="dropdown-mobile select2-hidden-accessible valid"
                                                name="doctolib_speciality_id"
                                                data-placeholder=""
                                                required
                                                data-validatable="true"
                                                data-select2-id="select2-data-1-t1nd"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                aria-describedby="doctolib_speciality_id-error"
                                                aria-invalid="false"
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                    selected
                                                    data-select2-id="select2-data-3-e30o"
                                                >
                                                    Spécialité *
                                                </option>
                                                <option value={271} data-select2-id="select2-data-20-gfy9">
                                                    Allergologue{" "}
                                                </option>
                                                <option value={497} data-select2-id="select2-data-21-ytb8">
                                                    Anatomo-cyto-pathologiste{" "}
                                                </option>
                                                <option value={57} data-select2-id="select2-data-22-e03u">
                                                    Andrologue{" "}
                                                </option>
                                                <option value={15} data-select2-id="select2-data-23-2wi8">
                                                    Anesthésiste-réanimateur{" "}
                                                </option>
                                                <option value={49} data-select2-id="select2-data-24-oi0g">
                                                    Angiologue{" "}
                                                </option>
                                                <option value={925} data-select2-id="select2-data-25-vuz3">
                                                    Audioprothésiste{" "}
                                                </option>
                                                <option value={26} data-select2-id="select2-data-26-cr3x">
                                                    Cancérologue{" "}
                                                </option>
                                                <option value={184} data-select2-id="select2-data-27-wkic">
                                                    Cancérologue médical{" "}
                                                </option>
                                                <option value={185} data-select2-id="select2-data-28-zwtw">
                                                    Cancérologue radiothérapeute{" "}
                                                </option>
                                                <option value={16} data-select2-id="select2-data-29-0gp8">
                                                    Cardiologue{" "}
                                                </option>
                                                <option value={191} data-select2-id="select2-data-30-1rxz">
                                                    Chiropracteur{" "}
                                                </option>
                                                <option value={17} data-select2-id="select2-data-31-r0fu">
                                                    Chirurgien{" "}
                                                </option>
                                                <option value={180} data-select2-id="select2-data-32-79te">
                                                    Chirurgien cancérologue{" "}
                                                </option>
                                                <option value={1367} data-select2-id="select2-data-33-ijrw">
                                                    Chirurgien de la face et du cou{" "}
                                                </option>
                                                <option value={205} data-select2-id="select2-data-34-jwi1">
                                                    Chirurgien de la main{" "}
                                                </option>
                                                <option value={285} data-select2-id="select2-data-35-w21b">
                                                    Chirurgien infantile{" "}
                                                </option>
                                                <option value={47} data-select2-id="select2-data-36-cibi">
                                                    Chirurgien maxillo-facial{" "}
                                                </option>
                                                <option value={175} data-select2-id="select2-data-37-uv10">
                                                    Chirurgien maxillo-facial et stomatologue{" "}
                                                </option>
                                                <option value={388} data-select2-id="select2-data-38-zbb3">
                                                    Chirurgien oral{" "}
                                                </option>
                                                <option value={19} data-select2-id="select2-data-39-emcm">
                                                    Chirurgien orthopédiste{" "}
                                                </option>
                                                <option value={12100} data-select2-id="select2-data-40-ba6x">
                                                    Chirurgien orthopédiste et traumatologique{" "}
                                                </option>
                                                <option value={18} data-select2-id="select2-data-41-laly">
                                                    Chirurgien plasticien et esthétique{" "}
                                                </option>
                                                <option value={176} data-select2-id="select2-data-42-xwof">
                                                    Chirurgien thoracique et cardio-vasculaire{" "}
                                                </option>
                                                <option value={177} data-select2-id="select2-data-43-06gi">
                                                    Chirurgien urologue{" "}
                                                </option>
                                                <option value={178} data-select2-id="select2-data-44-95i6">
                                                    Chirurgien vasculaire{" "}
                                                </option>
                                                <option value={179} data-select2-id="select2-data-45-90tp">
                                                    Chirurgien viscéral et digestif{" "}
                                                </option>
                                                <option value={1} data-select2-id="select2-data-46-10h2">
                                                    Chirurgien-dentiste{" "}
                                                </option>
                                                <option value={6} data-select2-id="select2-data-47-pcnl">
                                                    Dermatologue{" "}
                                                </option>
                                                <option value={414} data-select2-id="select2-data-48-kxcu">
                                                    Diététicien{" "}
                                                </option>
                                                <option value={36} data-select2-id="select2-data-49-0wkk">
                                                    Endocrinologue{" "}
                                                </option>
                                                <option value={398} data-select2-id="select2-data-50-3cja">
                                                    Ergothérapeute{" "}
                                                </option>
                                                <option value={21} data-select2-id="select2-data-51-e52b">
                                                    Gastro-entérologue et hépatologue{" "}
                                                </option>
                                                <option value={35} data-select2-id="select2-data-52-fajv">
                                                    Généticien{" "}
                                                </option>
                                                <option value={55} data-select2-id="select2-data-53-s6hk">
                                                    Gériatre{" "}
                                                </option>
                                                <option value={100} data-select2-id="select2-data-54-u9st">
                                                    Gynécologue médical{" "}
                                                </option>
                                                <option value={5} data-select2-id="select2-data-55-gztk">
                                                    Gynécologue médical et obstétrique{" "}
                                                </option>
                                                <option value={102} data-select2-id="select2-data-56-z6q9">
                                                    Gynécologue obstétricien{" "}
                                                </option>
                                                <option value={28} data-select2-id="select2-data-57-cxn5">
                                                    Hématologue{" "}
                                                </option>
                                                <option value={378} data-select2-id="select2-data-58-fowe">
                                                    Infectiologue{" "}
                                                </option>
                                                <option value={30} data-select2-id="select2-data-59-fe7i">
                                                    Infirmier{" "}
                                                </option>
                                                <option value={9} data-select2-id="select2-data-60-gcy5">
                                                    Masseur-kinésithérapeute{" "}
                                                </option>
                                                <option value={194} data-select2-id="select2-data-61-ub6l">
                                                    Médecin acupuncteur{" "}
                                                </option>
                                                <option value={396} data-select2-id="select2-data-62-sqdh">
                                                    Médecin addictologue{" "}
                                                </option>
                                                <option value={282} data-select2-id="select2-data-63-a1wq">
                                                    Médecin biologiste{" "}
                                                </option>
                                                <option value={889} data-select2-id="select2-data-64-647h">
                                                    Médecin bucco-dentaire{" "}
                                                </option>
                                                <option value={232} data-select2-id="select2-data-65-iphq">
                                                    Médecin du sport{" "}
                                                </option>
                                                <option value={37} data-select2-id="select2-data-66-t8aj">
                                                    Médecin du travail{" "}
                                                </option>
                                                <option value={2} data-select2-id="select2-data-67-gm21">
                                                    Médecin généraliste{" "}
                                                </option>
                                                <option value={228} data-select2-id="select2-data-68-fino">
                                                    Médecin homéopathe{" "}
                                                </option>
                                                <option value={434} data-select2-id="select2-data-69-w6pz">
                                                    Médecin morphologue et anti-âge{" "}
                                                </option>
                                                <option value={32} data-select2-id="select2-data-70-xl14">
                                                    Médecin nucléaire{" "}
                                                </option>
                                                <option value={190} data-select2-id="select2-data-71-v2ao">
                                                    Médecin nutritionniste{" "}
                                                </option>
                                                <option value={288} data-select2-id="select2-data-72-lpox">
                                                    Médecin réanimateur{" "}
                                                </option>
                                                <option value={289} data-select2-id="select2-data-73-0k8n">
                                                    Médecin spécialiste de santé publique{" "}
                                                </option>
                                                <option value={12446} data-select2-id="select2-data-74-sw60">
                                                    Médecin spécialiste en médecine générale{" "}
                                                </option>
                                                <option value={1096} data-select2-id="select2-data-75-3nwm">
                                                    Médecin urgentiste{" "}
                                                </option>
                                                <option value={27} data-select2-id="select2-data-76-ykko">
                                                    Néphrologue{" "}
                                                </option>
                                                <option value={20} data-select2-id="select2-data-77-anw6">
                                                    Neurochirurgien{" "}
                                                </option>
                                                <option value={22} data-select2-id="select2-data-78-wuxc">
                                                    Neurologue{" "}
                                                </option>
                                                <option value={1642} data-select2-id="select2-data-79-8136">
                                                    Oculariste{" "}
                                                </option>
                                                <option value={4} data-select2-id="select2-data-80-ohzd">
                                                    Ophtalmologue{" "}
                                                </option>
                                                <option value={6493} data-select2-id="select2-data-81-enng">
                                                    Opticien-lunetier{" "}
                                                </option>
                                                <option value={7} data-select2-id="select2-data-82-pru2">
                                                    ORL{" "}
                                                </option>
                                                <option value={421} data-select2-id="select2-data-83-iwy0">
                                                    ORL - Chirurgien de la face et du cou{" "}
                                                </option>
                                                <option value={270} data-select2-id="select2-data-84-t1r1">
                                                    Orthodontiste{" "}
                                                </option>
                                                <option value={1643} data-select2-id="select2-data-85-p9mv">
                                                    Orthopédiste-orthésiste{" "}
                                                </option>
                                                <option value={12} data-select2-id="select2-data-86-ta3t">
                                                    Orthophoniste{" "}
                                                </option>
                                                <option value={724} data-select2-id="select2-data-87-cn7j">
                                                    Orthoprothésiste{" "}
                                                </option>
                                                <option value={29} data-select2-id="select2-data-88-0xu7">
                                                    Orthoptiste{" "}
                                                </option>
                                                <option value={10} data-select2-id="select2-data-89-7bx7">
                                                    Ostéopathe{" "}
                                                </option>
                                                <option value={3} data-select2-id="select2-data-90-d8b0">
                                                    Pédiatre{" "}
                                                </option>
                                                <option value={8} data-select2-id="select2-data-91-jsqf">
                                                    Pédicure-podologue{" "}
                                                </option>
                                                <option value={3097} data-select2-id="select2-data-92-456p">
                                                    Pharmacien{" "}
                                                </option>
                                                <option value={226} data-select2-id="select2-data-93-yj7v">
                                                    Phlébologue{" "}
                                                </option>
                                                <option value={23} data-select2-id="select2-data-94-evqv">
                                                    Pneumologue{" "}
                                                </option>
                                                <option value={575} data-select2-id="select2-data-95-47wa">
                                                    Podo-orthésiste{" "}
                                                </option>
                                                <option value={13} data-select2-id="select2-data-96-gqlv">
                                                    Psychiatre{" "}
                                                </option>
                                                <option value={578} data-select2-id="select2-data-97-afei">
                                                    Psychiatre de l'enfant et de l'adolescent{" "}
                                                </option>
                                                <option value={14} data-select2-id="select2-data-98-i8lv">
                                                    Psychologue{" "}
                                                </option>
                                                <option value={577} data-select2-id="select2-data-99-iisi">
                                                    Psychomotricien{" "}
                                                </option>
                                                <option value={169} data-select2-id="select2-data-100-zfvi">
                                                    Psychothérapeute{" "}
                                                </option>
                                                <option value={11} data-select2-id="select2-data-101-p6n8">
                                                    Radiologue{" "}
                                                </option>
                                                <option value={33} data-select2-id="select2-data-102-tsse">
                                                    Radiothérapeute{" "}
                                                </option>
                                                <option value={24} data-select2-id="select2-data-103-16be">
                                                    Rhumatologue{" "}
                                                </option>
                                                <option value={34} data-select2-id="select2-data-104-we9g">
                                                    Sage-femme{" "}
                                                </option>
                                                <option value={18} data-select2-id="select2-data-105-cdms">
                                                    Spécialiste en chirurgie plastique reconstructrice et
                                                    esthétique{" "}
                                                </option>
                                                <option value={59} data-select2-id="select2-data-106-rlng">
                                                    Spécialiste en hémobiologie-transfusion{" "}
                                                </option>
                                                <option value={31} data-select2-id="select2-data-107-1xjs">
                                                    Spécialiste en médecine interne{" "}
                                                </option>
                                                <option value={61} data-select2-id="select2-data-108-8wrr">
                                                    Spécialiste en médecine légale et expertises médicales{" "}
                                                </option>
                                                <option value={284} data-select2-id="select2-data-109-c2ic">
                                                    Spécialiste en médecine physique et de réadaptation{" "}
                                                </option>
                                                <option value={25} data-select2-id="select2-data-110-j19m">
                                                    Stomatologue{" "}
                                                </option>
                                            </select>
                                            <div id="doctolib_speciality_id-error" className="error" />
                                            <span
                                                className="select2 select2-container select2-container--default select2-container--below select2-has-value"
                                                dir="ltr"
                                                data-select2-id="select2-data-2-kgnn"
                                                style={{ width: "100%" }}
                                            >
                                                <span className="selection">
                                                    <span
                                                        className="select2-selection select2-selection--single no-arrow custom-arrow-behaviour"
                                                        role="combobox"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        tabIndex={0}
                                                        aria-disabled="false"
                                                        aria-labelledby="select2-doctolib_speciality_id-vf-container"
                                                        aria-controls="select2-doctolib_speciality_id-vf-container"
                                                    >
                                                        <span
                                                            className="select2-selection__rendered"
                                                            id="select2-doctolib_speciality_id-vf-container"
                                                            role="textbox"
                                                            aria-readonly="true"
                                                            title="
			Orthophoniste		"
                                                        >
                                                            Orthophoniste{" "}
                                                        </span>
                                                        <span
                                                            className="select2-selection__arrow"
                                                            role="presentation"
                                                        >
                                                            <b role="presentation" />
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className="dropdown-wrapper" aria-hidden="true" />
                                            </span>
                                            <label className="label-and-placeholder">Spécialité *</label>
                                            <div className="error error--none" />
                                        </div>
                                        <div className="field-wrapper" data-row={1} data-step="true">
                                            <input
                                                type="email"
                                                className="email js-autocomplete-email with-autocomplete valid"
                                                name="email"
                                                placeholder="Adresse email *"
                                                autoComplete="off"
                                                required
                                                aria-describedby="email-error"
                                                aria-invalid="false"
                                            />
                                            <div id="email-error" className="error" />
                                            <div
                                                id="email-error"
                                                className="error"
                                                style={{ display: "block" }}
                                            />
                                            <label className="label-and-placeholder">Adresse email *</label>
                                            <div className="block-autocomplete">
                                                <ul className="auto-list" style={{ display: "none" }}>
                                                    <li className="highlighted">fqsd@gmail.com</li>
                                                </ul>
                                            </div>
                                            <div className="error error--none" />
                                        </div>
                                        <div
                                            className="field-wrapper"
                                            data-row={1}
                                            data-step="true"
                                            data-select2-id="select2-data-120-8aq2"
                                        >
                                            <select
                                                autoComplete="off"
                                                className="dropdown-mobile js-add-custom-select select2-hidden-accessible valid"
                                                data-placeholder=""
                                                name="comment"
                                                required
                                                data-validatable="true"
                                                data-select2-id="select2-data-4-qlwo"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                aria-describedby="comment-error"
                                                aria-invalid="false"
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                    selected
                                                    data-select2-id="select2-data-6-rmfs"
                                                >
                                                    Objet de votre demande *
                                                </option>
                                                <option
                                                    value="I want more information"
                                                    data-select2-id="select2-data-117-m72k"
                                                >
                                                    Je suis professionnel de santé et souhaite en savoir plus sur
                                                    le logiciel Doctolib
                                                </option>
                                                <option
                                                    value="I am a patient"
                                                    data-select2-id="select2-data-118-5si4"
                                                >
                                                    Je suis un patient et souhaite prendre RDV chez un médecin
                                                </option>
                                            </select>
                                            <div id="comment-error" className="error" />
                                            <span
                                                className="select2 select2-container select2-container--default select2-container--below select2-has-value"
                                                dir="ltr"
                                                data-select2-id="select2-data-5-7g9o"
                                                style={{ width: "100%" }}
                                            >
                                                <span className="selection">
                                                    <span
                                                        className="select2-selection select2-selection--single custom-arrow-behaviour"
                                                        role="combobox"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        tabIndex={0}
                                                        aria-disabled="false"
                                                        aria-labelledby="select2-comment-8o-container"
                                                        aria-controls="select2-comment-8o-container"
                                                    >
                                                        <span
                                                            className="select2-selection__rendered"
                                                            id="select2-comment-8o-container"
                                                            role="textbox"
                                                            aria-readonly="true"
                                                            title="Je suis professionnel de santé et souhaite en savoir plus sur le logiciel Doctolib"
                                                        >
                                                            Je suis professionnel de santé et souhaite en savoir plus
                                                            sur le logiciel Doctolib
                                                        </span>
                                                        <span
                                                            className="select2-selection__arrow"
                                                            role="presentation"
                                                        >
                                                            <b role="presentation" />
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className="dropdown-wrapper" aria-hidden="true" />
                                            </span>
                                            <label className="label-and-placeholder">
                                                Objet de votre demande *
                                            </label>
                                            <div className="error error--none" />
                                        </div>
                                        <input
                                            type="hidden"
                                            name="organization_kind"
                                            defaultValue="SELF_EMPLOYED"
                                        />
                                        <input type="hidden" name="product_interest" defaultValue="BMS" />
                                        <input type="hidden" name="site_id" defaultValue={3} />
                                        <input type="hidden" name="post_id" defaultValue={8826} />
                                        <input type="hidden" name="catalog_id" defaultValue="3_8826" />
                                        <input
                                            type="hidden"
                                            name="meta-title"
                                            defaultValue="Doctolib Pro I Agenda et logiciel de gestion pour les praticiens"
                                        />
                                        <input
                                            type="hidden"
                                            name="form_url_custom"
                                            defaultValue="https://info.doctolib.fr/?origin=home-header&utm_button=header&utm_content-group=homepage&utm_website=doctolib_patients"
                                        />
                                        <div className="field-wrapper field-wrapper--hidden">
                                            <input
                                                type="hidden"
                                                name="marketing_campaign_id"
                                                defaultValue="36ca6df5-23d9-43b0-b64e-970b5041f9c4"
                                            />
                                        </div>
                                        <div
                                            className="field-wrapper field-wrapper--hidden"
                                            data-step-1-value="32b276e0-a9cf-6953-b054-5056b24c3357"
                                        >
                                            <input type="hidden" name="marketing_canvas_id" defaultValue="" />
                                        </div>
                                        <div className="field-wrapper field-wrapper--hidden">
                                            <input
                                                type="hidden"
                                                name="automation_url"
                                                defaultValue="https://hooks.zapier.com/hooks/catch/6811085/o1wohyi/"
                                            />
                                        </div>
                                        <div
                                            className="field-wrapper field-wrapper--hidden"
                                            data-step-1-value="marketing"
                                        >
                                            <input type="hidden" name="kind" defaultValue="sales" />
                                        </div>
                                        <p className="required-note">* Champs obligatoires</p>
                                        <div className="power_form_input">
                                            <button
                                                className="step1-submit button button--primary button--fill"
                                                data-url="test_step1"
                                            >
                                                Continuer{" "}
                                            </button>
                                            <input
                                                type="submit"
                                                defaultValue="Valider votre demande"
                                                className="button button--primary button--fill"
                                            />
                                            <a
                                                href="https://www.doctolib.fr/"
                                                className="js-patient-redirect button button--primary button--fill hidden"
                                            >
                                                Prendre rendez-vous avec Doctolib
                                            </a>
                                        </div>
                                        <div className="legal-notice">
                                            <div className="tooltip-action paragraph paragraph--xsmall">
                                                <button
                                                    type="button"
                                                    aria-describedby="tp-container-341"
                                                    className="tooltip-action know-more"
                                                >
                                                    En savoir plus sur la collecte de vos données personnelles{" "}
                                                </button>
                                                <div
                                                    id="tp-container-341"
                                                    className="tooltip-wrapper"
                                                    role="tooltip"
                                                >
                                                    <div className="tooltip">
                                                        <div className="close-tooltip" />
                                                        <p />
                                                        <p>
                                                            Je recevrai également des communications marketing et
                                                            commerciales de la part de Doctolib relatives à ses
                                                            produits et services, promotions, offres spéciales,
                                                            événements, ebook, enquêtes marketing ainsi que ses
                                                            actualités par email ou SMS. Je comprends et j’accepte que
                                                            cela implique le traitement des données renseignées dans
                                                            le formulaire. Vous pouvez révoquer votre consentement à
                                                            tout moment, en cliquant sur le lien de désinscription
                                                            dans chaque email ou en envoyant STOP au numéro indiqué
                                                            dans le SMS. Pour en savoir plus, consultez notre{" "}
                                                            <a
                                                                className="ProsemirrorEditor-link"
                                                                href="https://doctolib.legal/Privacy-policy-B2B"
                                                            >
                                                                politique de confidentialité
                                                            </a>
                                                            . Si vous sélectionnez «&nbsp;Je suis un patient et
                                                            souhaite prendre RDV chez un médecin&nbsp;», vos données
                                                            ne seront ni collectées ni traitées, vous serez juste
                                                            redirigé vers notre site web patients pour pouvoir prendre
                                                            un RDV.
                                                        </p>
                                                        <p />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}