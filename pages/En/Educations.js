import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Home() {
    return (
        <Layout formations>
            <section className={utilStyles.headingMd}>
                <div className={utilStyles.cardContainer}>
                    <p className={utilStyles.card}>
                        BAC+3 - IT Project Manager
                    </p>
                    <p className={utilStyles.more}>
                        In progress
                    </p>
                    <p className={utilStyles.more2}>
                        Lille, France
                    </p>
                    <p className={utilStyles.description}>
                        First year at ENIGMA
                    </p>
                </div>

                <div className={utilStyles.cardContainer}>
                    <p className={utilStyles.card}>
                        First year of medical school
                    </p>
                    <p className={utilStyles.more}>
                        2021-2022,
                    </p>
                    <p className={utilStyles.more2}>
                        Amiens, France
                    </p>
                    <p className={utilStyles.description}>
                        University of Picardie Jules Vernes
                    </p>
                </div>

                <div className={utilStyles.cardContainer}>
                    <p className={utilStyles.card}>
                        Bacalauréat with Specialties Physics/ Chemistry and Biology
                    </p>
                    <p className={utilStyles.more}>
                        2020-2021,
                    </p>
                    <p className={utilStyles.more2}>
                        Lycée Alfred Chanzy, Charleville-Mézières, France
                    </p>
                    <p className={utilStyles.description}>
                        Mention Assez-Bien<br />
                        mathematics option.
                    </p>
                </div>
            </section>
        </Layout>
    )
}