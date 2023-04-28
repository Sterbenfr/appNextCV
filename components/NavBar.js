import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const Navbar = () => {
    const router = useRouter();

    const getInitialLanguage = () => {
        if (typeof window !== 'undefined' && localStorage) {
            const lang = localStorage.getItem('lang');
            return lang ? lang === 'en' : false;
        } else {
            return false;
        }
    };

    const [english, setEnglish] = useState(getInitialLanguage);

    const handleLanguageSwitch = () => {
        const currentPath = router.pathname;
        const currentUrl = router.asPath;
        const newPath = english ? '/En/Home' : '/';
        const newUrl = currentUrl.replace(currentPath, newPath);
        router.replace(newPath, newUrl, { locale: english ? 'en' : 'fr' });
        setEnglish(!english);
    };

    const activating = (link) => {
        if (
            router.pathname === link ||
            (english && router.pathname === link.replace('/Fr', '/En')) ||
            (!english && router.pathname === link.replace('/En', '/Fr'))
        ) {
            return styles.active;
        } else {
            return '';
        }
    };

    useEffect(() => {
        localStorage.setItem('lang', english ? 'en' : 'fr');
        const pathname = router.pathname;
        if (english && pathname === '/') {
            router.push('/En/Home');
        } else if (!english && pathname === '/En/Home') {
            router.push('/');
        }
    }, [english]);

    return (
        <div className={styles.navbar}>
            <ul>
                <button className={styles.language} onClick={handleLanguageSwitch}>
                    {english ? 'En > Fr' : 'Fr > En'}
                </button>
                <li>
                    <Link href={english ? '/En/Home' : '/'} className={activating(english ? '/En/Home' : '/')}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={english ? '/En/Skills' : '/Fr/competences'} className={activating(english ? '/En/Skills' : '/Fr/competences')}>
                        {english ? 'Skills' : 'Compétences'}
                    </Link>
                </li>
                <li>
                    <Link href={english ? '/En/Projects' : '/Fr/projets'} className={activating(english ? '/En/Projects' : '/Fr/projets')}>
                        {english ? 'Projects' : 'Réalisation Perso'}
                    </Link>
                </li>
                <li>
                    <Link href={english ? '/En/Educations' : '/Fr/formations'} className={activating(english ? '/En/Educations' : '/Fr/formations')}>
                        {english ? 'Education' : 'Formations'}
                    </Link>
                </li>
                <li>
                    <Link href={english ? '/En/Experiences' : '/Fr/experiences'} className={activating(english ? '/En/Experiences' : '/Fr/experiences')}>
                        {english ? 'Professional Experience' : 'Expérience Pro'}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;