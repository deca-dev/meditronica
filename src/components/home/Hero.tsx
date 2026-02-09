import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import styles from './Hero.module.css';
import heroImage from '../../assets/images/anesthesia-gas-machine.png';
import circles from '../../assets/images/bg-medical-equipment.png';

export default function Hero() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.cardWrap}>
            <div className={styles.card}>
              <div className={styles.cardBg} aria-hidden="true">
                <img className={styles.circles} src={circles} alt="" />
              </div>

              <div className={styles.content}>
                <div className={styles.kicker}>SOLUCIONES TÉCNICAS</div>
                <h1 className={styles.title}>
                  Mantenimiento y Venta de
                  <br />
                  equipo médico
                  <br />
                  y refacciones.
                </h1>
                <p className={styles.subtitle}>
                  Para su seguridad y confianza continua, Meditronica ofrece mantenimiento, reparación y suministro de equipo médico y refacciones.
                </p>

                <div className={styles.actions}>
                  <Link to="/services" className={styles.primaryBtn}>SERVICIOS</Link>
                  <Link to="/products" className={styles.secondaryBtn}>PRODUCTOS</Link>
                </div>
              </div>
            </div>

            <div className={styles.backPlate} aria-hidden="true" />
          </div>

          <div className={styles.visual}>
            <img className={styles.heroImage} src={heroImage} alt="Anesthesia machine" />
          </div>
        </div>
      </Container>
    </section>
  );
}
