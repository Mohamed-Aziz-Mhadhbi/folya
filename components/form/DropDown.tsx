export default function SimpleDropdown() {
    return (

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
                    Je ne suis pas professionnels de santé et je suis curieux de savoir plus sur Folya
                </option>
                <option value="I am a patient">
                    Je suis professionnel de santé et je veux savoir plus sur Folya
                </option>
            </select>
            <label className="label-and-placeholder">
                Objet de votre demande *
            </label>
        </div>
    );
}
