import { useEffect } from 'react';
import resume from '../assets/docs/chrod-resume-en.pdf'

const ResumeEn = () => {
    useEffect(() => {
        if (typeof window.orientation !== 'undefined') {
            document.getElementById('downloadPdf').click()
            window.close();
        }
    })

    return (
        <div className="position-absolute w-100 h-100">
            <object
                data={resume}
                type="application/pdf"
                height="100%"
                width="100%"
            >
                <a
                    className="text-decoration-none text-dark p-5"
                    href={resume}
                    id="downloadPdf"
                    download="chrod-resume.pdf"
                >
                    <h1>Descargando PDF!!!</h1>
                </a>
            </object>
        </div>
    )
}

export default ResumeEn;
