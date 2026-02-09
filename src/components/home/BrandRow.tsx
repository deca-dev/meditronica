import Container from '../layout/Container';
import styles from './BrandRow.module.css';

// ✅ import logos from src/assets
import drager from '../../assets/images/brands/drager.png';
import ge from '../../assets/images/brands/general-electric.png';
import welchAllyn from '../../assets/images/brands/welch-allyn.png';
import philips from '../../assets/images/brands/philips.png';
// import amscoSteris from '../../assets/images/brands/amsco-steris.png';
import siemens from '../../assets/images/brands/siemens.png';
// import bionet from '../../assets/images/brands/bionet.png';
import stryker from '../../assets/images/brands/stryker.png';
import hillrom from '../../assets/images/brands/hillrom.png';
import baxter from '../../assets/images/brands/baxter.png';
import mindray from '../../assets/images/brands/mindray.png';
// import medison from '../../assets/images/brands/medison.png';
// import valleylab from '../../assets/images/brands/valleylab.png';
// import masimo from '../../assets/images/brands/masimo.png';

type Brand = { name: string; src: string };

const BRANDS: Brand[] = [
  { name: 'Dräger (especialistas)', src: drager },
  { name: 'General Electric', src: ge },
  { name: 'Welch Allyn', src: welchAllyn },
  { name: 'Philips', src: philips },
  // { name: 'AMSCO - Steris', src: amscoSteris },
  { name: 'SIEMENS', src: siemens },
  // { name: 'Bionet', src: bionet },
  { name: 'Stryker', src: stryker },
  { name: 'Hillrom', src: hillrom },
  { name: 'Baxter', src: baxter },
  { name: 'Mindray', src: mindray },
  // { name: 'Medison', src: medison },
  // { name: 'Valleylab', src: valleylab },
  // { name: 'Masimo', src: masimo }
];

const ROW_A = BRANDS.slice(0, Math.ceil(BRANDS.length / 2));
const ROW_B = BRANDS.slice(Math.ceil(BRANDS.length / 2));
const LOOP_A = [...ROW_A, ...ROW_A];
const LOOP_B = [...ROW_B, ...ROW_B];

function BrandItem({ b }: { b: Brand }) {
  return (
    <div className={styles.item}>
      <div className={styles.logoWrap}>
        <img
          className={styles.logo}
          src={b.src}
          alt={b.name}
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget;
            img.style.display = 'none';
            img.parentElement?.classList.add(styles.fallback);
          }}
        />
        <span className={styles.fallbackText}>{b.name}</span>
      </div>
    </div>
  );
}

export default function BrandRow() {
  return (
    <section className={styles.section} aria-label="Marcas">
      <Container>
        <div className={styles.carousel} role="region" aria-roledescription="carousel" aria-label="Carrusel de marcas">
          <div className={styles.viewport}>
            <div className={`${styles.track} ${styles.left}`} aria-hidden="true">
              {LOOP_A.map((b, idx) => <BrandItem key={`${b.name}-a-${idx}`} b={b} />)}
            </div>
          </div>

          <div className={styles.viewport}>
            <div className={`${styles.track} ${styles.right}`} aria-hidden="true">
              {LOOP_B.map((b, idx) => <BrandItem key={`${b.name}-b-${idx}`} b={b} />)}
            </div>
          </div>

          <p className={styles.srOnly}>
            Carrusel automático de logos en dos filas. Pasa el mouse o enfoca para pausar.
          </p>
        </div>
      </Container>
    </section>
  );
}
