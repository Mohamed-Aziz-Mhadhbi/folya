import { useState } from 'react';

export default function TextFieldSpeciale() {
    const [selectedValue, setSelectedValue] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event: any) => {
        setSelectedValue(event.target.value);
    };

    const handleBlur = () => {
        if (!selectedValue) {
            setError('Veuillez saisir votre spécialité');
        } else {
            setError('');
        }
    };

    return (
        <div className='fields'>
            <select
                autoComplete="off"
                data-placeholder=""
                required
                value={selectedValue}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={error ? 'error' : 'valid'}
            >
                <option value="" disabled selected>
                    Spécialité *
                </option>
                <option value={271}>Kinésithérapeute </option>
                <option value={497}>Orthophoniste </option>
                <option value={57}>Ergothérapeute </option>
                <option value={15}>Psychologue </option>
                <option value={49}>Psychomotricien </option>
                <option value={925}>Orthoptiste </option>
            </select>
            {error && <label className="error error--none">{error}</label>}
        </div>
    );
}