import { useState } from 'react';

export default function TextFieldMessage() {
    const [Message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event: any) => {
        setMessage(event.target.value);
    };

    const handleBlur = () => {
        if (!Message) {
            setError('Veuillez entrer le Message');
        } else {
            setError('');
        }
    };

    return (
        <>
            <input
                type="text"
                name="message"
                placeholder="Message"
                autoComplete="off"
                value={Message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={error ? 'error' : 'valid'}
                aria-invalid="true"
            />
            {error && <label className="error error--none">{error}</label>}
        </>
    );
}