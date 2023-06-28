import styles from '../styles/Home.module.css';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image src="/tolucaCup.jpg" alt="Toluca js" width={200} height={120} />
      </div>
      <div className={styles.container}>
        <p>© 2023 Toluca JS. Un espacio de codigo abierto.</p>
      </div>
    </footer>
  );
};
