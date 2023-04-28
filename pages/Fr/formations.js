import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Home() {
    return (
        <Layout formations>
            <section className={utilStyles.headingMd}>
                <div className={utilStyles.cardContainer}>
                    <p className={utilStyles.card}>
                        BAC+3 - Responsable de projet informatique
                    </p>
                    <p className={utilStyles.more}>
                        En cours
                    </p>
                    <p className={utilStyles.more2}>
                        Lille, France
                    </p>
                    <p className={utilStyles.description}>
                        Première année chez ENIGMA
                    </p>
                </div>

                <div className={utilStyles.cardContainer}>
                    <p className={utilStyles.card}>
                        Première année de médecine
                    </p>
                    <p className={utilStyles.more}>
                        2021-2022,
                    </p>
                    <p className={utilStyles.more2}>
                        Amiens, France
                    </p>
                    <p className={utilStyles.description}>
                        Université de Picardie Jules Vernes
                    </p>
                </div>

                <div className={utilStyles.cardContainer}>
                    <p className={utilStyles.card}>
                        BAC Spécialités Physique-Chimie et SVT
                    </p>
                    <p className={utilStyles.more}>
                        2020-2021,
                    </p>
                    <p className={utilStyles.more2}>
                        Lycée Alfred Chanzy, Charleville-Mézières, France
                    </p>
                    <p className={utilStyles.description}>
                        Mention Assez-Bien<br />
                        Option Mathématiques
                    </p>
                </div>
            </section>
        </Layout>
    )
}