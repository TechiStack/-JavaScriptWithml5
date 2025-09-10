import styles from './Hero.module.css';

export default function Hero({ title, subtitle }) {
  return (
    <section className={styles.hero}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
}
