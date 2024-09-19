export default function TextFieldCodePostal() {
    return (
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
    )
};