import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="https://cirronex.com/wp-content/uploads/2024/11/CIRRONEX.svg" alt="Cirronex" />
      </Link>
      <nav className={styles.nav}>
        <Link to="/services">Services</Link>
        <Link to="/industries">Industries</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/about">About</Link>
        <Link to="/contact" className={styles.cta}>Contact</Link>
      </nav>
    </header>
  );
}
