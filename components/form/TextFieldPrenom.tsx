import { useState } from 'react';

export default function TextFieldPrenom() {
    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState(''); 

    const handleInputChange = (event:any) => {
        setFirstName(event.target.value);
    };

    const handleBlur = () => {
        if (!firstName) {
            setError('Veuillez saisir votre prénom'); 
        } else {
            setError(''); 
        }
    };

    return (
        <div className="field-wrapper" data-row={2} data-step="false">
            <input
                type="text"
                name="first_name"
                placeholder="Prénom *"
                autoComplete="off"
                required
                value={firstName}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={error ? 'error' : 'valid'}
            />
            <label className="label-and-placeholder">Prénom *</label>
            {error && <div className="error">{error}</div>}
        </div>
    );
}