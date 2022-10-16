import Image from 'next/image';
import styles from '../styles/Home.module.css';

export const Footer = () => {
    return (
      <footer className={styles.footer}>
        <a href="https://www.uaemex.mx/" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/Logo_de_la_UAEMex.svg" alt="UAEMEX Logo" width={50} height={40} />
          </span>
        </a>
      </footer>
    );
}