import { useEffect, useState } from 'react';
import { NavBar, Cover, About, MyProjects, Contact, Footer } from '../components';
import { LanguageProvider } from '../context/LanguageContext';

function Portfolio() {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [scrollHeight]);

    return (
        <LanguageProvider>
            <NavBar isScrolling={scrollHeight} />
            <Cover />
            <About />
            <MyProjects />
            <Contact />
            <Footer />
        </LanguageProvider>
    );
}

export default Portfolio;
