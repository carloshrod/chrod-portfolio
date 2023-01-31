import coverVideo from '../assets/media/cover-video.mp4';
import { useLanguageContext } from '../hooks';

const Cover = () => {
    const { texts } = useLanguageContext()

    return (
        <div className="cover-container" id="hero">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1 className="mt-5">Carlos Hernández R.</h1>
            <p>{texts.coverSubtitle}</p>
        </div>
    )
}

export default Cover;
