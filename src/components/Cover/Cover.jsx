import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import './Cover.css';
import coverVideo from '../../media/cover-video.mp4';

const Cover = () => {
    const { texts } = useContext(LanguageContext)

    return (
        <div className="cover-container" id="hero">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1 className="mt-5">Carlos Hernández R.</h1>
            <p>{texts.coverSubtitle}</p>
        </div>
    )
}

export default Cover;
