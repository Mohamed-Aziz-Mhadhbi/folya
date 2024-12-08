import { useState } from 'react';

export default function TextFieldTelephonePortable() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event: any) => {
        setPhoneNumber(event.target.value);
    };

    const handleBlur = () => {
        if (!phoneNumber || phoneNumber.length < 10) {
            setError('Veuillez saisir un numéro de téléphone valide');
        } else {
            setError('');
        }
    };

    return (
        <div className='fields'>
            <input
                type="tel"
                pattern="[0-9]+"
                name="phone_number"
                placeholder="Téléphone portable *"
                autoComplete="off"
                required
                value={phoneNumber}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={error ? 'error' : 'valid'}
            />
            {error && <label className="error error--none">{error}</label>}
        </div>
    );
}