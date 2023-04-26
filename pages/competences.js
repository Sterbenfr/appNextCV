import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
    return (
        <Layout compétences>
            <section className={utilStyles.headingMd}>
                <ul className={utilStyles.list}>
                    <span className={utilStyles.listItem}>Langues :</span>
                    <p>
                        <li>Anglais <span className={utilStyles.rating}>C1</span></li>
                        <li>Allemand <span className={utilStyles.rating}>B1</span></li>

                    </p>
                    <span className={utilStyles.listItem}>Tech :</span>
                    <p>
                        <li>Python                              <span className={utilStyles.rating}>★ ★ ★ ★ ★</span>     </li>
                        <li>C                                   <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>Html/CSS                            <span className={utilStyles.rating}>★ ★ ★ ☆ ☆</span>     </li>
                        <li>Java                                <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>JavaScript                          <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>nodeJS                              <span className={utilStyles.rating}>★ ★ ★ ☆ ☆</span>     </li>
                        <li>NextJS                              <span className={utilStyles.rating}>★ ★ ★ ☆ ☆</span>     </li>
                        <li>SQL                                 <span className={utilStyles.rating}>★ ★ ☆ ☆ ☆</span>     </li>
                        <li>CCNA 1 (attesté) et 2 (attestation a passer)</li>
                        <li>Git                                 <span className={utilStyles.rating}>★ ★ ★ ★ ★</span>     </li>
                        <li>Gestion de Projet                   <span className={utilStyles.rating}>★ ★ ★ ☆ ☆</span>     </li>
                        <li>Admin système (Windows et Linux)    <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>API Rest                            <span className={utilStyles.rating}>★ ★ ☆ ☆ ☆</span>     </li>
                    </p>

                </ul>
            </section>
        </Layout>
    )
}