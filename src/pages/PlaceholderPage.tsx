import Container from '../components/layout/Container';
import styles from './PlaceholderPage.module.css';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <Container>
      <div className={styles.wrap}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>
          Esta página está preparada para enrutamiento y desarrollo incremental. Por ahora, el enfoque principal es la página de inicio.
        </p>
      </div>
    </Container>
  );
}
