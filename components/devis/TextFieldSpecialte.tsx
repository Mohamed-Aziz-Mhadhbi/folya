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
                <option value={271}>kinésithérapeute </option>
                <option value={497}>orthophoniste </option>
                <option value={57}>ergothérapeute </option>
                <option value={15}>psychologue </option>
                <option value={49}>psychomotricien </option>
                <option value={925}>autre précisez </option>
            </select>
            {error && <label className="error error--none">{error}</label>}
        </div>
    );
}