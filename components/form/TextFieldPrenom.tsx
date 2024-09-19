export default function TextFieldPrenom() {
    return (
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
    )
};