import { useEffect, useState } from 'react';
import { Cover, About, MyProjects, Contact, Footer, Navbar } from '../components';
import { LanguageProvider } from '../context/LanguageContext';
import PacmanLoader from "react-spinners/PacmanLoader";

function Portfolio() {
    const [scrollHeight, setScrollHeight] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [scrollHeight]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, [])

    return (
        <LanguageProvider>
            {isLoading
                ?
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <PacmanLoader color="white" />
                </div>
                :
                <>
                    <Navbar isScrolling={scrollHeight} />
                    <Cover />
                    <About />
                    <MyProjects />
                    <Contact />
                    <Footer />
                </>
            }
        </LanguageProvider>
    );
}

export default Portfolio;
