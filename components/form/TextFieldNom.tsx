export default function TextFieldNom() {
    return (
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
    )
};