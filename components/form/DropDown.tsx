import { useState } from 'react';

export default function SimpleDropdown() {
    const [selectedValue, setSelectedValue] = useState(''); 
    const [error, setError] = useState(''); 

    const handleInputChange = (event:any) => {
        setSelectedValue(event.target.value);
    };

    const handleBlur = () => {
        if (!selectedValue) {
            setError('Veuillez choisir une option'); 
        } else {
            setError(''); 
        }
    };

    return (
        <div className="field-wrapper" data-row={1} data-step="true">
            <select
                autoComplete="off"
                data-placeholder=""
                name="comment"
                required
                value={selectedValue}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={error ? 'error' : 'valid'}
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
            {error && <div className="error error--none">{error}</div>}
        </div>
    );
}