import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from 'next/image';

const phone = '+33622920240'
const mail = 'pierrecaudreliez@gmail.com'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <ul>
                Me contacter :
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
                    <Link target="_blank" href="/CV Caudreliez Pierre mis a jour.pdf">Imprimer mon CV</Link>
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