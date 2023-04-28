import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Home() {
    return (
        <Layout compétences>
            <section className={utilStyles.headingMd}>
                <ul className={utilStyles.list}>
                    <span className={utilStyles.listItem}>Language :</span>
                    <p>
                        <li>English <span className={utilStyles.rating}>C1</span></li>
                        <li>German <span className={utilStyles.rating}>B1</span></li>
                    </p>
                    <span className={utilStyles.listItem}>Programming :</span>
                    <p>
                        <li>Python                              <span className={utilStyles.rating}>★ ★ ★ ★ ★</span>     </li>
                        <li>C                                   <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>Html/CSS                            <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>Java                                <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>JavaScript                          <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>NextJS                              <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>nodeJS                              <span className={utilStyles.rating}>★ ★ ★ ☆ ☆</span>     </li>
                        <li>SQL                                 <span className={utilStyles.rating}>★ ★ ★ ☆ ☆</span>     </li>
                        <li>Rest API                            <span className={utilStyles.rating}>★ ★ ★ ☆ ☆</span>     </li>
                    </p>
                    <span className={utilStyles.listItem}>Network/courses :</span>
                    <p>
                        <li>CCNA 1 (attested)                   <span className={utilStyles.rating}>★ ★ ★ ★ ★</span>     </li>
                        <li>Git/GitHub                          <span className={utilStyles.rating}>★ ★ ★ ★ ★</span>     </li>
                        <li>Linux System Admin                  <span className={utilStyles.rating}>★ ★ ★ ★ ★</span>     </li>
                        <li>CCNA 2 (Courses ended)              <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>Windows System Admin                <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>SEO/Web-Marketing                   <span className={utilStyles.rating}>★ ★ ★ ★ ☆</span>     </li>
                        <li>Project management                  <span className={utilStyles.rating}>★ ★ ★ ☆ ☆</span>     </li>

                    </p>
                </ul>
            </section>
        </Layout>
    )
}