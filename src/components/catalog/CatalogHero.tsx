import styles from './CatalogHero.module.css';

export default function CatalogHero(props: {
  kicker: string;
  title: string;
  description: string;
  backgroundImage: string;
}) {
  const { kicker, title, description, backgroundImage } = props;

  return (
    <section className={styles.hero}>
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.kicker}>{kicker}</div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{description}</p>
      </div>

      {/* Decorative shapes inspired by your screenshot */}
      <div className={styles.shapeLeft} aria-hidden="true" />
      <div className={styles.shapeRight} aria-hidden="true" />
    </section>
  );
}
