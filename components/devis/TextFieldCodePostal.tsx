import { useState } from 'react';

export default function TextFieldCodePostal() {
    const [zipcode, setZipcode] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event: any) => {
        setZipcode(event.target.value);
    };

    const handleBlur = () => {
        if (!zipcode || zipcode.length < 5) {
            setError('Veuillez saisir un code postal valide');
        } else {
            setError('');
        }
    };

    return (
        <>
            <input
                name="zipcode"
                type="text"
                pattern="[0-9]*"
                minLength={5}
                maxLength={5}
                placeholder="Code postal cabinet *"
                autoComplete="off"
                required
                value={zipcode}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={error ? 'error' : 'valid'}
            />
            {error && <div className="error error--none">{error}</div>}
        </>
    );
}