import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const phone = '+33622920240'
const mail = 'pierrecaudreliez@gmail.com'

const getInitialLanguage = () => {
    if (typeof window !== 'undefined') {
        const lang = localStorage.getItem('lang');
        return lang ? lang === 'en' : false;
    } else {
        return false;
    }
};

const Footer = () => {
    const [english, setEnglish] = useState(getInitialLanguage);
    return (
        <div className={styles.footer}>
            <ul>
                {english ? "Contact Me :"
                    : "Me contacter :"
                }

                <li>
                    <a target="_blank" href={`tel: ${phone}`}>{phone}</a>
                </li>
                <li>
                    <a href={`mailto: ${mail}`}>{mail}</a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/pierre-caudreliez">LinkedIn: Pierre Caudreliez</a>
                </li>
                <li>
                    {english ? <Link target="_blank" href="/CV Caudreliez Pierre mis a jour.pdf">Print my CV here</Link>

                        : <Link target="_blank" href="/CV Caudreliez Pierre mis a jour.pdf">Imprimer mon CV</Link>
                    }

                </li>
            </ul>
            <Image
                src="/images/click.png"
                width={50}
                height={50}
                alt='You can click'
            />

        </div>

    )
}



export default Footer;