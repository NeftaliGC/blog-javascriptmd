import styles from '../styles/Home.module.css';

import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/Tjs-Logo.jpg" alt="Toluca js" width={100} height={100} />
      </div>
      <div className={styles.headerTitle}>
        <h1 >
          <Link href="../pages/index.js">
            <a>Toluca-JS Blog!</a>
          </Link>
        </h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href="/quienes-somos">
              <a>Quiénes somos</a>
            </Link>
          </li>
          <li>
            <Link href="/articulos">
              <a>Artículos</a>
            </Link>
          </li>
          <li>
            <Link href="/conferencias">
              <a>Conferencias</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
