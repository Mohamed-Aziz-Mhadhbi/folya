import { useState } from 'react';

export default function TextFieldEmailAdresse() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(''); 

    const handleInputChange = (event:any) => {
        setEmail(event.target.value);
    };

    const handleBlur = () => {
        if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setError('Veuillez saisir une adresse email valide'); 
        } else {
            setError(''); 
        }
    };

    return (
        <div className="field-wrapper" data-row={1} data-step="true">
            <input
                type="email"
                name="email"
                placeholder="Adresse email *"
                autoComplete="off"
                required
                value={email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={error ? 'error' : 'valid'}
            />
            <label className="label-and-placeholder">
                Adresse email *
            </label>
            {error && <div className="error error--none">{error}</div>}
            <div className="block-autocomplete">
                <ul className="auto-list" />
            </div>
        </div>
    );
}