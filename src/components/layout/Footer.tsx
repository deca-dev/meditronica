import Container from './Container';
import styles from './Footer.module.css';
import logo from '../../assets/images/logo-meditronica.png';

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 4l8 5 8-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s7-4.44 7-11a7 7 0 10-14 0c0 6.56 7 11 7 11z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 10a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactBar}>
        <Container>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <span className={styles.icon}><PhoneIcon /></span>
              <div>
                <div className={styles.label}>CONTÁCTANOS</div>
                <div className={styles.value}>+52 55 0000 0000</div>
              </div>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.icon}><MailIcon /></span>
              <div>
                <div className={styles.label}>MÁNDANOS UN MENSAJE</div>
                <div className={styles.value}>contacto@meditronica.mx</div>
              </div>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.icon}><PinIcon /></span>
              <div>
                <div className={styles.label}>VISÍTANOS</div>
                <div className={styles.value}>Ciudad de México</div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.bottom}>
        <Container>
          <div className={styles.bottomRow}>
            <div className={styles.brandBlock}>
              <img src={logo} className={styles.logo} alt="Meditronica logo" />
              <div className={styles.copy}>
                <div>Meditronica</div>
                <div>© {new Date().getFullYear()} Todos los derechos reservados.</div>
              </div>
            </div>

            <div className={styles.miniLinks}>
              <a href="#" onClick={(e) => e.preventDefault()}>Política de Privacidad</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Devoluciones</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Envío</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Preguntas Frecuentes</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
