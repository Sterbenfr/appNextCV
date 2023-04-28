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
                    <span className={utilStyles.listItem}>Programmation :</span>
                    <p>
                        <li>Python                              <span className={utilStyles.rating}>★ ★ ★ ★ ★</span>     </li>
                        <li>C                                   <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>Html/CSS                            <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>Java                                <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>JavaScript                          <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>NextJS                              <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>nodeJS                              <span className={utilStyles.rating}>★ ★ ★ ☆ ☆</span>     </li>
                        <li>SQL                                 <span className={utilStyles.rating}>★ ★ ★ ☆ ☆</span>     </li>
                        <li>API Rest                            <span className={utilStyles.rating}>★ ★ ★ ☆ ☆</span>     </li>
                    </p>
                    <span className={utilStyles.listItem}>Réseau/cours :</span>
                    <p>
                        <li>CCNA 1 (attesté)                    <span className={utilStyles.rating}>★ ★ ★ ★ ★</span>     </li>
                        <li>Git/GitHub                          <span className={utilStyles.rating}>★ ★ ★ ★ ★</span>     </li>
                        <li>Admin système Linux                 <span className={utilStyles.rating}>★ ★ ★ ★ ★</span>     </li>
                        <li>CCNA 2 (cours finis)                <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>Admin système Windows               <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>Gestion de Projet                   <span className={utilStyles.rating}>★ ★ ★ ☆ ☆</span>     </li>

                    </p>
                </ul>
            </section>
        </Layout>
    )
}