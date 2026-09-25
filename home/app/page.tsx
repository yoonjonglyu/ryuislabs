import styles from './ryuislabs.module.css';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Status from '@/components/sections/Status';
import Founder from '@/components/sections/Founder';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.gridBg} />
      <Header />
      <Hero />
      <Status />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
}