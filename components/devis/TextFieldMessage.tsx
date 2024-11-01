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
        <div className='flex-column'>
            <input
                type="text"
                name="message"
                placeholder="Message"
                autoComplete="off"
                value={Message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={error ? 'error' : 'large-input'}
                aria-invalid="true"
            />
            {error && <div className="error error--none">{error}</div>}
        </div>
    );
}