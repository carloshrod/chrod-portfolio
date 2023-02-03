import coverVideo from '../assets/media/cover-video.mp4';
import { useLanguageContext } from '../hooks';
import { motion } from "framer-motion";

const Cover = () => {
    const { texts } = useLanguageContext()

    return (
        <div className="cover-container" id="hero">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <motion.h1
                className="mt-5"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 150 }}
            >
                Carlos Hernández R.
            </motion.h1>
            <span>{texts.coverSubtitle}</span>
        </div>
    )
}

export default Cover;
