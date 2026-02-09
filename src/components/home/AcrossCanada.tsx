import Container from '../layout/Container';
import styles from './AcrossCanada.module.css';
import autoclave from '../../assets/images/autoclave-medical-equipment.png';

export default function AcrossCanada() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrap}>
          <div className={styles.textCol}>
            <h2 className={styles.title}>Trabajamos con clientes en todo México</h2>
            <p className={styles.text}>
              Estamos ubicados en Ciudad de México y ofrecemos servicio y ventas en todo México. Nuestro compromiso con la reparación rápida
              y de calidad nos permite mantener relaciones duraderas con nuestros clientes, sin importar dónde se encuentren en México.
            </p>
            <button className={styles.btn} type="button">CONOCER MÁS DE MEDITRONICA</button>
          </div>

          <div className={styles.imageCol}>
            <img className={styles.image} src={autoclave} alt="Autoclave" />
          </div>
        </div>

        <div className={styles.rule} aria-hidden="true" />
      </Container>
    </section>
  );
}
