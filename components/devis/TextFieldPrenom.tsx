import { useState } from 'react';

export default function TextFieldPrenom() {
    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event: any) => {
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
        <>
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
            {error && <label className="error error--none">{error}</label>}
        </>
    );
}