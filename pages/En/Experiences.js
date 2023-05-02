import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Home() {
    return (
        <Layout experiences>
            <section className={utilStyles.headingMd}>
                <div className={utilStyles.cardContainer}>
                    <p className={utilStyles.card}>
                        Observation internship in a dental office
                    </p>
                    <p className={utilStyles.more}>
                        Dr. Guiffant Laurence's dental office
                    </p>
                    <p className={utilStyles.more2}>
                        12/2017, Bruay-la-Buissière, France
                    </p>
                    <p className={utilStyles.description}>
                        I was able to use the patient charting software,
                        see the sterilization of equipment and method of patient care.
                    </p>
                </div>
            </section>
        </Layout>
    )
}