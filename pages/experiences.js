import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
    return (
        <Layout experiences>
            <section className={utilStyles.headingMd}>
                <div className={utilStyles.cardContainer}>
                    <p className={utilStyles.card}>
                        Stage d'observation dans un cabinet dentaire
                    </p>
                    <p className={utilStyles.more}>
                        Cabinet dentaire du Dr Guiffant Laurence
                    </p>
                    <p className={utilStyles.more2}>
                        12/2017, Bruay-la-Buissière, France
                    </p>
                    <p className={utilStyles.description}>
                        J'ai pu utilisé les logiciels de fiche patient,
                        voir la stérilisation du matériel et les soins sur patient
                    </p>
                </div>
            </section>
        </Layout>
    )
}