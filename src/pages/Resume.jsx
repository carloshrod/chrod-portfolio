import { useEffect } from 'react';

const Resume = () => {

    useEffect(() => {
        if (typeof window.orientation !== 'undefined') {
            document.getElementById('downloadPdf').click()
            window.close();
        }
    })

    return (
        <div className="position-absolute w-100 h-100">
            <object
                data={require('../docs/carlosh-resume.pdf')}
                type="application/pdf"
                height="100%"
                width="100%"
            >
                <a
                    className="text-decoration-none text-dark p-5"
                    href={require('../docs/carlosh-resume.pdf')}
                    id="downloadPdf"
                    download="carlosh-resume.pdf"
                >
                    <h1>Descargando PDF!!!</h1>
                </a>
            </object>
        </div>
    )
}

export default Resume;