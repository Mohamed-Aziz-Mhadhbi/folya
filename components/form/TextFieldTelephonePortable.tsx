export default function TextFieldTelephonePortable() {
    return (
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
    )
};