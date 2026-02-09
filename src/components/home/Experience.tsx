import Container from '../layout/Container';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>Más de 30 años de experiencia</h2>
        <p className={styles.text}>
          Nuestro compromiso con productos, servicios y reparaciones de alta calidad es la razón por la cual mantenemos relaciones duraderas
          con nuestros clientes.
        </p>
      </Container>
    </section>
  );
}
