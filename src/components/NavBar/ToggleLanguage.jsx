import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

const ToggleLanguage = () => {
    const { handleLanguage } = useContext(LanguageContext);

    return (
        <label className="btnLanguage" htmlFor="toggle">
            <input id="toggle" type="checkbox" onChange={handleLanguage} />
            <span className="slider"></span>
        </label>
    )
}

export default ToggleLanguage;
