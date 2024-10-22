export default function LagalNote() {
    return (
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
    )
};