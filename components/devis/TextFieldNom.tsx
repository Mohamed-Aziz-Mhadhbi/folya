import { useState } from 'react';

export default function TextFieldNom() {
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event: any) => {
        setLastName(event.target.value);
    };

    const handleBlur = () => {
        if (!lastName) {
            setError('Veuillez saisir votre nom');
        } else {
            setError('');
        }
    };

    return (
        <div>
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
                aria-invalid="true"
            />
            {error && <div className="error error--none">{error}</div>}
        </div>
    );
}