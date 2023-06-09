import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>
          Bonjour, je m'appelle Pierre Caudreliez, je suis étudiant dans le domaine de l'informatique chez ENIGMA.
        </p>
        <p>
          Je suis en première année d'un Bac +3 et je cherche actuellement un stage,
          de préférence en tant que développeur FullStack/ BackEnd. Il est de deux mois minimum
          et trois mois maximum. Je peux commencer dès le 12 juin.
        </p>
        <p>
          Je suis très engagé dans mes projets que je conduis volontier en équipe,
          je possède une grande créativité.
        </p>
        <p>
          Je suis passionné par les minéraux et fossiles, je fais parti d'un club basé à Wasquehal
          (<Link target="_blank" href="https://www.instagram.com/sperkise/">@sperkise</Link>)
          avec lequel je fais des salons et des sorties terrains.
          À coté de cette passion, je me suis intéressé au développement et j'ai commencé à apprendre
          le python. J'ai ensuite suivi une option informatique en seconde puis, plus tard, intégré mon
          école actuelle, ENIGMA.
          Je fais de la natation et j'aime le monde de la musique en général.
        </p>
      </section>
    </Layout>
  );
}