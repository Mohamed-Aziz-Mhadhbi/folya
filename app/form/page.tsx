"use client"

export default function Form() {
    return (
        <>
            <div className="modalForm">
                <div className="modalForm__content">
                    <h2>
                        Échangez avec un conseiller
                    </h2>
                    <div className="modalForm__content-left">
                        <div className="form-wrapper">
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
                                <div className="field-wrapper" data-row={2} data-step="false">
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Nom *"
                                        autoComplete="off"
                                        required
                                    />
                                    <label className="label-and-placeholder">Nom *</label>
                                </div>
                                <div className="field-wrapper" data-row={2} data-step="false">
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="Prénom *"
                                        autoComplete="off"
                                        required
                                    />
                                    <label className="label-and-placeholder">Prénom *</label>
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
                                    />
                                    <label className="label-and-placeholder">
                                        Code postal cabinet *
                                    </label>
                                </div>
                                <div className="field-wrapper" data-row={2} data-step="false">
                                    <input
                                        type="tel"
                                        pattern="[0-9]+"
                                        name="phone_number"
                                        placeholder="Téléphone portable *"
                                        autoComplete="off"
                                        required
                                    />
                                    <label className="label-and-placeholder">
                                        Téléphone portable *
                                    </label>
                                </div>
                                <div className="field-wrapper" data-row={1} data-step="false">
                                    <select
                                        autoComplete="off"
                                        className="dropdown-mobile"
                                        name="doctolib_speciality_id"
                                        data-placeholder=""
                                        required
                                    >
                                        <option value="" disabled selected>
                                            Spécialité *
                                        </option>
                                        <option value={271}>Allergologue </option>
                                        <option value={497}>Anatomo-cyto-pathologiste </option>
                                        <option value={57}>Andrologue </option>
                                        <option value={15}>Anesth ésiste-r éanimateur </option>
                                        <option value={49}>Angiologue </option>
                                        <option value={925}>Audioproth ésiste </option>
                                        <option value={26}>Canc érologue </option>
                                        <option value={184}>Canc érologue m édical </option>
                                        <option value={185}>Canc érologue radioth érapeute </option>
                                        <option value={16}>Cardiologue </option>
                                        <option value={191}>Chiropracteur </option>
                                        <option value={17}>Chirurgien </option>
                                        <option value={180}>Chirurgien canc érologue </option>
                                        <option value={1367}>
                                            Chirurgien de la face et du cou{" "}
                                        </option>
                                        <option value={205}>Chirurgien de la main </option>
                                        <option value={285}>Chirurgien infantile </option>
                                        <option value={47}>Chirurgien maxillo-facial </option>
                                        <option value={175}>
                                            Chirurgien maxillo-facial et stomatologue{" "}
                                        </option>
                                        <option value={388}>Chirurgien oral </option>
                                        <option value={19}>Chirurgien orthop édiste </option>
                                        <option value={12100}>
                                            Chirurgien orthop édiste et traumatologique{" "}
                                        </option>
                                        <option value={18}>
                                            Chirurgien plasticien et esth étique{" "}
                                        </option>
                                        <option value={176}>
                                            Chirurgien thoracique et cardio-vasculaire{" "}
                                        </option>
                                        <option value={177}>Chirurgien urologue </option>
                                        <option value={178}>Chirurgien vasculaire </option>
                                        <option value={179}>
                                            Chirurgien visc éral et digestif{" "}
                                        </option>
                                        <option value={1}>Chirurgien-dentiste </option>
                                        <option value={6}>Dermatologue </option>
                                        <option value={414}>Di ét éticien </option>
                                        <option value={36}>Endocrinologue </option>
                                        <option value={398}>Ergoth érapeute </option>
                                        <option value={21}>
                                            Gastro-ent érologue et h épatologue{" "}
                                        </option>
                                        <option value={35}>G én éticien </option>
                                        <option value={55}>G ériatre </option>
                                        <option value={100}>Gyn écologue m édical </option>
                                        <option value={5}>
                                            Gyn écologue m édical et obst étrique{" "}
                                        </option>
                                        <option value={102}>Gyn écologue obst étricien </option>
                                        <option value={28}>H ématologue </option>
                                        <option value={378}>Infectiologue </option>
                                        <option value={30}>Infirmier </option>
                                        <option value={9}>Masseur-kin ésith érapeute </option>
                                        <option value={194}>M édecin acupuncteur </option>
                                        <option value={396}>M édecin addictologue </option>
                                        <option value={282}>M édecin biologiste </option>
                                        <option value={889}>M édecin bucco-dentaire </option>
                                        <option value={232}>M édecin du sport </option>
                                        <option value={37}>M édecin du travail </option>
                                        <option value={2}>M édecin g én éraliste </option>
                                        <option value={228}>M édecin hom éopathe </option>
                                        <option value={434}>
                                            M édecin morphologue et anti-âge{" "}
                                        </option>
                                        <option value={32}>M édecin nucl éaire </option>
                                        <option value={190}>M édecin nutritionniste </option>
                                        <option value={288}>M édecin r éanimateur </option>
                                        <option value={289}>
                                            M édecin sp écialiste de sant épublique{" "}
                                        </option>
                                        <option value={12446}>
                                            M édecin sp écialiste en m édecine g én érale{" "}
                                        </option>
                                        <option value={1096}>M édecin urgentiste </option>
                                        <option value={27}>N éphrologue </option>
                                        <option value={20}>Neurochirurgien </option>
                                        <option value={22}>Neurologue </option>
                                        <option value={1642}>Oculariste </option>
                                        <option value={4}>Ophtalmologue </option>
                                        <option value={6493}>Opticien-lunetier </option>
                                        <option value={7}>ORL </option>
                                        <option value={421}>
                                            ORL - Chirurgien de la face et du cou{" "}
                                        </option>
                                        <option value={270}>Orthodontiste </option>
                                        <option value={1643}>Orthop édiste-orth ésiste </option>
                                        <option value={12}>Orthophoniste </option>
                                        <option value={724}>Orthoproth ésiste </option>
                                        <option value={29}>Orthoptiste </option>
                                        <option value={10}>Ost éopathe </option>
                                        <option value={3}>P édiatre </option>
                                        <option value={8}>P édicure-podologue </option>
                                        <option value={3097}>Pharmacien </option>
                                        <option value={226}>Phl ébologue </option>
                                        <option value={23}>Pneumologue </option>
                                        <option value={575}>Podo-orth ésiste </option>
                                        <option value={13}>Psychiatre </option>
                                        <option value={578}>
                                            Psychiatre de l 'enfant et de l 'adolescent{" "}
                                        </option>
                                        <option value={14}>Psychologue </option>
                                        <option value={577}>Psychomotricien </option>
                                        <option value={169}>Psychoth érapeute </option>
                                        <option value={11}>Radiologue </option>
                                        <option value={33}>Radioth érapeute </option>
                                        <option value={24}>Rhumatologue </option>
                                        <option value={34}>Sage-femme </option>
                                        <option value={18}>
                                            Sp écialiste en chirurgie plastique reconstructrice et
                                            esth étique{" "}
                                        </option>
                                        <option value={59}>
                                            Sp écialiste en h émobiologie-transfusion{" "}
                                        </option>
                                        <option value={31}>
                                            Sp écialiste en m édecine interne{" "}
                                        </option>
                                        <option value={61}>
                                            Sp écialiste en m édecine l égale et expertises m édicales{" "}
                                        </option>
                                        <option value={284}>
                                            Sp écialiste en m édecine physique et de r éadaptation{" "}
                                        </option>
                                        <option value={25}>Stomatologue </option>
                                    </select>
                                    <label className="label-and-placeholder">Spécialité *</label>
                                </div>
                                <div className="field-wrapper" data-row={1} data-step="true">
                                    <input
                                        type="email"
                                        className="email js-autocomplete-email"
                                        name="email"
                                        placeholder="Adresse email *"
                                        autoComplete="off"
                                        required
                                    />
                                    <label className="label-and-placeholder">
                                        Adresse email *
                                    </label>
                                    <div className="block-autocomplete">
                                        <ul className="auto-list" />
                                    </div>
                                </div>
                                <div className="field-wrapper" data-row={1} data-step="true">
                                    <select
                                        autoComplete="off"
                                        className="dropdown-mobile js-add-custom-select"
                                        data-placeholder=""
                                        name="comment"
                                        required
                                    >
                                        <option value="" disabled selected>
                                            Objet de votre demande *
                                        </option>
                                        <option value="I want more information">
                                            Je suis professionnel de santé et souhaite en savoir plus
                                            sur le logiciel Doctolib
                                        </option>
                                        <option value="I am a patient">
                                            Je suis un patient et souhaite prendre RDV chez un médecin
                                        </option>
                                    </select>
                                    <label className="label-and-placeholder">
                                        Objet de votre demande *
                                    </label>
                                </div>
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
                                <input
                                    type="hidden"
                                    name="meta-title"
                                    defaultValue="Doctolib Pro I Agenda et logiciel de gestion pour les praticiens"
                                />
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
                                                <p></p>
                                                <p>
                                                    Je recevrai également des communications marketing et
                                                    commerciales de la part de Doctolib relatives à ses
                                                    produits et services, promotions, offres spéciales,
                                                    événements, ebook, enquêtes marketing ainsi que ses
                                                    actualités par email ou SMS. Je comprends et j’accepte
                                                    que cela implique le traitement des données
                                                    renseignées dans le formulaire. Vous pouvez révoquer
                                                    votre consentement à tout moment, en cliquant sur le
                                                    lien de désinscription dans chaque email ou en
                                                    envoyant STOP au numéro indiqué dans le SMS. Pour en
                                                    savoir plus, consultez notre{" "}
                                                    <a
                                                        className="ProsemirrorEditor-link"
                                                        href="https://doctolib.legal/Privacy-policy-B2B"
                                                    >
                                                        politique de confidentialité
                                                    </a>
                                                    . Si vous sélectionnez «&nbsp;Je suis un patient et
                                                    souhaite prendre RDV chez un médecin&nbsp;», vos
                                                    données ne seront ni collectées ni traitées, vous
                                                    serez juste redirigé vers notre site web patients pour
                                                    pouvoir prendre un RDV.
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
        </>

    );
}