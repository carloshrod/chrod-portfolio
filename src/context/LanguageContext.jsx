import { createContext, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");
    const [texts, setTexts] = useState(translations[language]);

    const handleLanguage = (e) => {
        if (e.target.checked) {
            setLanguage("es")
            setTexts(translations.es)
        } else {
            setLanguage("en")
            setTexts(translations.en)
        }
    };

    const data = { texts, language, handleLanguage }

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>)
}

export { LanguageProvider };
export default LanguageContext;