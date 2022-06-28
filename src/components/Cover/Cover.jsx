import './Cover.css'
import coverVideo from '../../media/cover-video.mp4'

const Cover = () => {
    return (
        <div className="cover-container" id="hero">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1 className="mt-5">Carlos Hernández R.</h1>
            <p>Web Developer</p>
        </div>
    )
}

export default Cover