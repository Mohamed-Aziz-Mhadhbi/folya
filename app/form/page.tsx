"use client"
import { useState } from "react";
import styles from '../styles/Home.module.css';

export default function Form() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };
    return (
        <>
            <div id="page" className={styles.site} data-select2-id="select2-data-page">
                <main id="content" className={styles.siteContent} role="main">
                    <div className={styles.section}>
                        <div
                            className={styles.sectionInner + ' ' + styles.paddingNone}
                        >
                            <div className={styles.heroFormBlue}>
                                <div
                                    className={styles.heroFormBlueInner + ' ' + styles.container + ' ' + styles.containerLarge}
                                    data-select2-id="select2-data-16-hemh"
                                >
                                    <div
                                        className={styles.heroFormBlueForm}
                                        data-select2-id="select2-data-15-pnb1"
                                    >
                                        <div className={styles.heroFormBlueFormInside}>
                                            <div className={styles.heroFormBlueFormContent}>
                                                <div className={styles.formWrapper}>
                                                    <h2 className={styles.formWrapperTitle + ' ' + styles.title + ' ' + styles.titleLarge}>
                                                        Échangez avec un conseiller
                                                    </h2>
                                                    <form
                                                        className={styles.formB2B}
                                                    >
                                                        <input
                                                            type="hidden"
                                                            defaultValue="contact_form"
                                                            name="origin_label"
                                                        />
                                                        <div
                                                            className={styles.fieldWrapper}
                                                            data-row={2}
                                                            data-step="false"
                                                        >
                                                            <input
                                                                type="text"
                                                                name="last_name"
                                                                placeholder="Nom *"
                                                                autoComplete="off"
                                                                required
                                                            />
                                                            <label className={styles.labelAndPlaceholder}>Nom *</label>
                                                        </div>
                                                        <div
                                                            className={styles.fieldWrapper}
                                                            data-row={2}
                                                            data-step="false"
                                                        >
                                                            <input
                                                                type="text"
                                                                name="first_name"
                                                                placeholder="Prénom *"
                                                                autoComplete="off"
                                                                required
                                                            />
                                                            <label className={styles.labelAndPlaceholder}>
                                                                Prénom *
                                                            </label>
                                                        </div>
                                                        <div
                                                            className={styles.fieldWrapper}
                                                            data-row={2}
                                                            data-step="false"
                                                        >
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
                                                            <label className={styles.labelAndPlaceholder}>
                                                                Code postal cabinet *
                                                            </label>
                                                        </div>
                                                        <div
                                                            className={styles.fieldWrapper}
                                                            data-row={2}
                                                            data-step="false"
                                                        >
                                                            <input
                                                                type="tel"
                                                                pattern="[0-9]+"
                                                                name="phone_number"
                                                                placeholder="Téléphone portable *"
                                                                autoComplete="off"
                                                                required
                                                            />
                                                            <label className={styles.labelAndPlaceholder}>
                                                                Téléphone portable *
                                                            </label>
                                                        </div>
                                                        <div
                                                            className={styles.fieldWrapper}
                                                            data-row={1}
                                                            data-step="false"
                                                            data-select2-id="select2-data-14-h2et"
                                                        >
                                                            <select
                                                                autoComplete="off"
                                                                className={styles.dropdownMobile + ' ' + styles.select2HiddenAccessible + ' ' + styles.error}
                                                                name="doctolib_speciality_id"
                                                                data-placeholder=""
                                                                required
                                                                data-validatable="true"
                                                                data-select2-id="select2-data-1-y8dl"
                                                                tabIndex={-1}
                                                                aria-hidden="true"
                                                                aria-describedby="doctolib_speciality_id-error"
                                                                aria-invalid="true"
                                                            >
                                                                <option
                                                                    value=""
                                                                    disabled
                                                                    selected
                                                                    data-select2-id="select2-data-3-ouph"
                                                                >
                                                                    Spécialité *
                                                                </option>
                                                                <option
                                                                    value={12}
                                                                    data-select2-id="select2-data-87-qu8u"
                                                                >
                                                                    Orthophoniste{" "}
                                                                </option>
                                                            </select>
                                                            <div
                                                                id="doctolib_speciality_id-error"
                                                                className={styles.error}
                                                            >
                                                                Veuillez saisir votre spécialité
                                                            </div>
                                                            <span
                                                                className={styles.select2 + ' ' + styles.select2Container + ' ' + styles.select2ContainerDefault + ' ' + styles.select2ContainerBelow}
                                                                dir="ltr"
                                                                data-select2-id="select2-data-2-q420"
                                                                style={{ width: "100%" }}
                                                            >
                                                                <span className={styles.selection}>
                                                                    <span
                                                                        className={styles.select2Selection + ' ' + styles.select2SelectionSingle + ' ' + styles.noArrow + ' ' + styles.customArrowBehaviour}
                                                                        role="combobox"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                        tabIndex={0}
                                                                        aria-disabled="false"
                                                                        aria-labelledby="select2-doctolib_speciality_id-vn-container"
                                                                        aria-controls="select2-doctolib_speciality_id-vn-container"
                                                                    >
                                                                        <span
                                                                            className={styles.select2SelectionRendered}
                                                                            id="select2-doctolib_speciality_id-vn-container"
                                                                            role="textbox"
                                                                            aria-readonly="true"
                                                                            title=""
                                                                        >
                                                                            <span className={styles.select2SelectionPlaceholder} />
                                                                        </span>
                                                                        <span
                                                                            className={styles.select2SelectionArrow}
                                                                            role="presentation"
                                                                        >
                                                                            <b role="presentation" />
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span
                                                                    className={styles.dropdownWrapper}
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                            <label className={styles.labelAndPlaceholder}>
                                                                Spécialité *
                                                            </label>
                                                        </div>
                                                        <div
                                                            className={styles.fieldWrapper}
                                                            data-row={1}
                                                            data-step="true"
                                                        >
                                                            <input
                                                                type="email"
                                                                className={styles.email + ' ' + styles.jsAutocompleteEmail}
                                                                name="email"
                                                                placeholder="Adresse email *"
                                                                autoComplete="off"
                                                                required
                                                            />
                                                            <label className={styles.labelAndPlaceholder}>
                                                                Adresse email *
                                                            </label>
                                                            <div className={styles.blockAutocomplete}>
                                                                <ul
                                                                    className={styles.autoList}
                                                                    style={{ display: "none" }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={styles.fieldWrapper}
                                                            data-row={1}
                                                            data-step="true"
                                                        >
                                                            <div className="dropdown-container">
                                                                <select
                                                                    autoComplete="off"
                                                                    className={`${styles.dropdownMobile} ${styles.jsAddCustomSelect} ${styles.select2HiddenAccessible}`}
                                                                    data-placeholder=""
                                                                    name="comment"
                                                                    required
                                                                    data-validatable="true"
                                                                    data-select2-id="select2-data-4-uwf5"
                                                                    tabIndex={-1}
                                                                    aria-hidden="true"
                                                                    value={selectedOption}
                                                                    onChange={handleSelectChange}
                                                                >
                                                                    <option
                                                                        value=""
                                                                        disabled
                                                                        data-select2-id="select2-data-6-6j5e"
                                                                    >
                                                                        Objet de votre demande *
                                                                    </option>
                                                                    <option value="I want more information">
                                                                        Je ne suis pas professionnels de santé et je suis curieux de savoir plus sur Folya
                                                                    </option>
                                                                    <option value="I am a patient">
                                                                        Je suis professionnel de santé et je veux savoir plus sur Folya
                                                                    </option>
                                                                </select>

                                                                {/* Display selected option as confirmation */}
                                                                {selectedOption && (
                                                                    <div className="dropdown-selected">
                                                                        {selectedOption === "I want more information"
                                                                            ? "Je suis professionnel de santé et souhaite..."
                                                                            : "Je suis un patient et souhaite..."}
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <span
                                                                className={styles.select2 + ' ' + styles.select2Container + ' ' + styles.select2ContainerDefault}
                                                                dir="ltr"
                                                                data-select2-id="select2-data-5-noar"
                                                                style={{ width: "100%" }}
                                                            >
                                                                <span className={styles.selection}>
                                                                    <span
                                                                        className={styles.select2Selection + ' ' + styles.select2SelectionSingle + ' ' + styles.customArrowBehaviour}
                                                                        role="combobox"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                        tabIndex={0}
                                                                        aria-disabled="false"
                                                                        aria-labelledby="select2-comment-vr-container"
                                                                        aria-controls="select2-comment-vr-container"
                                                                    >
                                                                        <span
                                                                            className={styles.select2SelectionRendered}
                                                                            id="select2-comment-vr-container"
                                                                            role="textbox"
                                                                            aria-readonly="true"
                                                                            title=""
                                                                        >
                                                                            <span className={styles.select2SelectionPlaceholder} />
                                                                        </span>
                                                                        <span
                                                                            className={styles.select2SelectionArrow}
                                                                            role="presentation"
                                                                        >
                                                                            <b role="presentation" />
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span
                                                                    className={styles.dropdownWrapper}
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                            <label className={styles.labelAndPlaceholder}>
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
                                                        <input
                                                            type="hidden"
                                                            name="post_id"
                                                            defaultValue={8826}
                                                        />
                                                        <input
                                                            type="hidden"
                                                            name="catalog_id"
                                                            defaultValue="3_8826"
                                                        />
                                                        <p className={styles.requiredNote}>* Champs obligatoires</p>
                                                        <div className={styles.powerFormInput}>
                                                            <button
                                                                className={styles.step1Submit + ' ' + styles.button + ' ' + styles.buttonPrimary + ' ' + styles.buttonFill}
                                                                data-url="test_step1"
                                                            >
                                                                Continuer{" "}
                                                            </button>
                                                            <input
                                                                type="submit"
                                                                defaultValue="Valider votre demande"
                                                                className={styles.button + ' ' + styles.buttonPrimary + ' ' + styles.buttonFill}
                                                            />
                                                        </div>
                                                        <div className={styles.legalNotice}>
                                                            <div className={styles.tooltipAction + ' ' + styles.paragraph + ' ' + styles.paragraphXsmall}>
                                                                <button
                                                                    type="button"
                                                                    aria-describedby="tp-container-341"
                                                                    className={styles.tooltipAction + ' ' + styles.knowMore}
                                                                >
                                                                    En savoir plus sur la collecte de vos données
                                                                    personnelles{" "}
                                                                </button>
                                                                <div
                                                                    id="tp-container-341"
                                                                    className={styles.tooltipWrapper}
                                                                    role="tooltip"
                                                                >
                                                                    <div className={styles.tooltip}>
                                                                        <div className={styles.closeTooltip} />
                                                                        <p />
                                                                        <p>
                                                                            Je recevrai également des communications
                                                                            marketing et commerciales de la part de
                                                                            Doctolib relatives à ses produits et services,
                                                                            promotions, offres spéciales, événements,
                                                                            ebook, enquêtes marketing ainsi que ses
                                                                            actualités par email ou SMS. Je comprends et
                                                                            j’accepte que cela implique le traitement des
                                                                            données renseignées dans le formulaire. Vous
                                                                            pouvez révoquer votre consentement à tout
                                                                            moment, en cliquant sur le lien de
                                                                            désinscription dans chaque email ou en
                                                                            envoyant STOP au numéro indiqué dans le SMS.
                                                                            Pour en savoir plus, consultez notre{" "}
                                                                            <a
                                                                                className={styles.ProsemirrorEditorLink}
                                                                                href="https://doctolib.legal/Privacy-policy-B2B"
                                                                            >
                                                                                politique de confidentialité
                                                                            </a>
                                                                            . Si vous sélectionnez «&nbsp;Je suis un
                                                                            patient et souhaite prendre RDV chez un
                                                                            médecin&nbsp;», vos données ne seront ni
                                                                            collectées ni traitées, vous serez juste
                                                                            redirigé vers notre site web patients pour
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
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}