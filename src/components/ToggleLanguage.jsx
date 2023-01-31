import { useLanguageContext } from "../hooks";

const ToggleLanguage = () => {
    const { handleLanguage } = useLanguageContext();

    return (
        <label className="toggle-language" htmlFor="toggle">
            <input id="toggle" type="checkbox" onChange={handleLanguage} />
            <span className="slider"></span>
        </label>
    )
}

export default ToggleLanguage;
