export default function TextFieldEmailAdresse() {
    return (
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
    )
};