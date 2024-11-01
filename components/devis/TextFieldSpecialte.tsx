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
        <div>
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
                <option value={271}>Allergologue </option>
                <option value={497}>Anatomo-cyto-pathologiste </option>
                <option value={57}>Andrologue </option>
                <option value={15}>Anesthésiste-réanimateur </option>
                <option value={49}>Angiologue </option>
                <option value={925}>Audioprothésiste </option>
                <option value={26}>Cancérologue </option>
                <option value={184}>Cancérologue médical </option>
                <option value={185}>Cancérologue radiothérapeute </option>
                <option value={16}>Cardiologue </option>
                <option value={191}>Chiropracteur </option>
                <option value={17}>Chirurgien </option>
                <option value={180}>Chirurgien cancérologue </option>
                <option value={1367}>
                    Chirurgien de la face et du cou{" "}
                </option>
                <option value={205}>Chirurgien de la main </option>
                <option value={285}>Chirurgien infantile </option>
                <option value={47}>Chirurgien maxillo-facial </option>
                <option value={175}>
                    Chirurgien maxillo-facial et stomatologue{" "}
                </option>
                <option value={388}>Chirurgien oral </option>
                <option value={19}>Chirurgien orthopédiste </option>
                <option value={12100}>
                    Chirurgien orthopédiste et traumatologique{" "}
                </option>
                <option value={18}>
                    Chirurgien plasticien et esthétique{" "}
                </option>
                <option value={176}>
                    Chirurgien thoracique et cardio-vasculaire{" "}
                </option>
                <option value={177}>Chirurgien urologue </option>
                <option value={178}>Chirurgien vasculaire </option>
                <option value={179}>
                    Chirurgien viscéral et digestif{" "}
                </option>
                <option value={1}>Chirurgien-dentiste </option>
                <option value={6}>Dermatologue </option>
                <option value={414}>Diététicien </option>
                <option value={36}>Endocrinologue </option>
                <option value={398}>Ergothérapeute </option>
                <option value={21}>
                    Gastro-entérologue et hépatologue{" "}
                </option>
                <option value={35}>Généticien </option>
                <option value={55}>Gériatre </option>
                <option value={100}>Gynécologue médical </option>
                <option value={5}>
                    Gynécologue médical et obstétrique{" "}
                </option>
                <option value={102}>Gynécologue obstétricien </option>
                <option value={28}>Hématologue </option>
                <option value={378}>Infectiologue </option>
                <option value={30}>Infirmier </option>
                <option value={9}>Masseur-kinésithérapeute </option>
                <option value={194}>Médecin acupuncteur </option>
                <option value={396}>Médecin addictologue </option>
                <option value={282}>Médecin biologiste </option>
                <option value={889}>Médecin bucco-dentaire </option>
                <option value={232}>Médecin du sport </option>
                <option value={37}>Médecin du travail </option>
                <option value={2}>Médecin généraliste </option>
                <option value={228}>Médecin homéopathe </option>
                <option value={434}>
                    Médecin morphologue et anti-âge{" "}
                </option>
                <option value={32}>Médecin nucléaire </option>
                <option value={190}>Médecin nutritionniste </option>
                <option value={288}>Médecin réanimateur </option>
                <option value={289}>
                    Médecin spécialiste de santé publique{" "}
                </option>
                <option value={12446}>
                    Médecin spécialiste en médecine générale{" "}
                </option>
                <option value={1096}>Médecin urgentiste </option>
                <option value={27}>Néphrologue </option>
                <option value={20}>Neurochirurgien </option>
                <option value={22}>Neurologue </option>
                <option value={1642}>Oculariste </option>
                <option value={4}>Ophtalmologue </option>
                <option value={6493}>Opticien-lunetier </option>
                <option value={7}>ORL </option>
                <option value={421}>
                    ORL - Chirurgien de la face et du cou{" "}
                </option>
                <option value={270}>Orthodontiste </option>
                <option value={1643}>Orthopédiste-orthésiste </option>
                <option value={12}>Orthophoniste </option>
                <option value={724}>Orthoprothésiste </option>
                <option value={29}>Orthoptiste </option>
                <option value={10}>Ostéopathe </option>
                <option value={3}>Pédiatre </option>
                <option value={8}>Pédicure-podologue </option>
                <option value={3097}>Pharmacien </option>
                <option value={226}>Phlégologue </option>
                <option value={23}>Pneumologue </option>
                <option value={575}>Podo-orthésiste </option>
                <option value={13}>Psychiatre </option>
                <option value={578}>
                    Psychiatre de l'enfant et de l'adolescent{" "}
                </option>
                <option value={14}>Psychologue </option>
                <option value={577}>Psychomotricien </option>
                <option value={169}>Psychothérapeute </option>
                <option value={11}>Radiologue </option>
                <option value={33}>Radiothérapeute </option>
                <option value={24}>Rhumatologue </option>
                <option value={34}>Sage-femme </option>
                <option value={18}>
                    Spécialiste en chirurgie plastique reconstructrice et esthétique{" "}
                </option>
                <option value={59}>
                    Spécialiste en hématologie-transfusion{" "}
                </option>
                <option value={31}>
                    Spécialiste en médecine interne{" "}
                </option>
                <option value={61}>
                    Spécialiste en médecine légale et expertises médicales{" "}
                </option>
                <option value={284}>
                    Spécialiste en médecine physique et de réadaptation{" "}
                </option>
                <option value={25}>Stomatologue </option>
            </select>
            {error && <label className="error error--none">{error}</label>}
        </div>
    );
}