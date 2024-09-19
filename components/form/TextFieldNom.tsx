import { useState } from 'react';

export default function TextFieldNom() {
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(''); 

    const handleInputChange = (event:any) => {
        setLastName(event.target.value);
    };

    const handleBlur = () => {
        if (!lastName) {
            setError('Nom is required'); 
        } else {
            setError(''); 
        }
    };

    return (
        <div className="field-wrapper" data-row={2} data-step="false">
            <input
                type="text"
                name="last_name"
                placeholder="Nom *"
                autoComplete="off"
                required
                value={lastName}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={error ? 'error' : 'valid'}
            />
            <label className="label-and-placeholder">Nom *</label>
            {error && <div className="error">{error}</div>}
        </div>
    );
}