import Link from 'next/link';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, my name is Pierre Caudreliez, I am studying computer science in ENIGMA.
        </p>
        <p>
          I am in my first year of a Bac +3 and I am currently looking for an internship,
          preferably as a FullStack/ BackEnd developer. It is a minimum of two months
          and three months maximum. I can start as soon as June 12.
        </p>
        <p>
          I am very committed to my projects and I like to work in teams,
          I have a great creativity.
        </p>
        <p>
          I have a passion for minerals and fossils, I am part of a club based in Wasquehal
          (<Link target="_blank" href="https://www.instagram.com/sperkise/">@sperkise</Link>)
          with which I do shows and field trips.
          Beside this passion, I got interested in development and started to learn
          python. I then followed a computer science option in high school and later integrated my current
          current school, ENIGMA.
          I swim and I like listening and playing music.
        </p>
      </section>
    </Layout>
  );
}