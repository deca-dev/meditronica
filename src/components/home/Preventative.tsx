import Container from '../layout/Container';
import styles from './Preventative.module.css';
import wrench from '../../assets/images/wrench-300x300.png';

export default function Preventative() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.panel}>
          <div className={styles.left}>
            <img className={styles.wrench} src={wrench} alt="" />
          </div>

          <div className={styles.right}>
            <h3 className={styles.title}>Mantenimiento Preventivo</h3>
            <p className={styles.subtitle}>Los servicios de mantenimiento en equipo médico incluyen:</p>
            <ul className={styles.list}>
              <li>Verificación de salida</li>
              <li>Inspecciones de seguridad</li>
              <li>Inspecciones físicas</li>
            </ul>

            <button className={styles.btn} type="button">MANTENIMIENTO PREVENTIVO</button>
          </div>
        </div>
      </Container>
    </section>
  );
}
