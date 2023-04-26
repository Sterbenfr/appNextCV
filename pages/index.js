import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>
          Bonjour, je m'appelle Pierre Caudreliez et je suis étudiant dans le domaine de l'informatique chez ENIGMA.
        </p>
        <p>
          Je suis en première année et je cherche actuellement un stage,
          de préférence en tant que dévelopeur FullStack/ BackEnd. Il est de deux mois minimum
          et trois mois maximum. Je peut commencer dès le 12 juin.
        </p>
        <p>
          Je suis très engagé dans mes projets, que je fait volontier en équipe et
          je posséde une grande créativité.
        </p>
        <p>
          Depuis petit je suis passionné par les minéraux et fossiles, je fait partie d'un club basé a Wasquehal
          (<Link target="_blank" href="https://www.instagram.com/sperkise/">@sperkise</Link>)
          avecc lequel je fait des bourses et des sorties pour en chercher. Je fait de la natation et j'aime les jeux vidéos.
        </p>
      </section>
    </Layout>
  );
}