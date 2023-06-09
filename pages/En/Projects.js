import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Home() {
    return (
        <Layout projets>
            <section className={utilStyles.headingLg}>
                <span> My projects are mostly available on my GitHub : </span>
                <div className={utilStyles.links}>
                    <a target="_blank" href="https://github.com/Sterbenfr">Sterbenfr</a>
                </div>

            </section>
        </Layout>
    )
}