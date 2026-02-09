import Container from '../components/layout/Container';
import styles from './Nosotros.module.css';
import aboutVideo from '../assets/video/about-meditronica.mp4';
import aboutPoster from '../assets/images/preview.jpg'

export default function Nosotros() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrap}>
          {/* Video grande */}
          <div className={styles.videoFrame}>
            <video className={styles.video} 
            controls 
            preload="metadata"
            poster={aboutPoster}
            playsInline>
              <source src={aboutVideo} type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>

          {/* Texto minimal, centrado */}
          <div className={styles.content}>
            <div className={styles.kicker}>NOSOTROS</div>
            <h1 className={styles.title}>Meditrónica</h1>
            <p className={styles.lead}>
              Especialistas en mantenimiento biomédico, diagnóstico y compatibilidad de refacciones y accesorios.
              Nos enfocamos en continuidad operativa, trazabilidad y calidad técnica.
            </p>

            <div className={styles.gridText}>
              <div>
                <h2 className={styles.h2}>Lo que hacemos</h2>
                <p className={styles.p}>
                  Preventivo y correctivo para equipo médico, validación funcional, y soporte técnico con evidencia.
                  Nuestro proceso reduce reincidencias y evita cambios innecesarios.
                </p>
              </div>

              <div>
                <h2 className={styles.h2}>Cómo trabajamos</h2>
                <p className={styles.p}>
                  Identificamos marca/modelo, confirmamos compatibilidad, diagnosticamos, intervenimos y validamos.
                  Cerramos con un reporte claro y recomendaciones preventivas.
                </p>
              </div>
            </div>

            {/* Misión / Visión */}
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Misión</div>
                <div className={styles.cardText}>
                  Garantizar que la tecnología médica opere de forma segura y confiable, reduciendo riesgos y evitando paros operativos.
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Visión</div>
                <div className={styles.cardText}>
                  Ser un aliado biomédico de referencia para hospitales y clínicas, reconocido por calidad técnica y trazabilidad.
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className={styles.ctaRow}>
              <a className={styles.btnPrimary} href="/contact">Contactar</a>
              <a className={styles.btnGhost} href="/products">Ver catálogo</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
