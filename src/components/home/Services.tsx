import Container from '../layout/Container';
import styles from './Services.module.css';

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2v3M17 2v3M3 8h18M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function DollarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2v20M16.5 6.5c0-1.66-2.02-3-4.5-3s-4.5 1.34-4.5 3 2.02 3 4.5 3 4.5 1.34 4.5 3-2.02 3-4.5 3-4.5-1.34-4.5-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function HourglassIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 2h12M6 22h12M7 2c0 6 5 6 5 10s-5 4-5 10M17 2c0 6-5 6-5 10s5 4 5 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const cards = [
  {
    icon: <CalendarIcon />,
    title: 'Ofrecemos una amplia gama de servicios de calidad y una atención al cliente eficiente, lo que nos convierte en una preferencia para los servicios de equipo médico.',
    button: 'SERVICIOS DE EQUIPO MÉDICO'
  },
  {
    icon: <DollarIcon />,
    title: 'Ya sea que esté buscando una pieza, reemplazar una de sus máquinas o agregar un nuevo equipo, estaremos allí para encontrar lo que necesita.',
    button: 'VENTA DE EQUIPO MÉDICO'
  },
  {
    icon: <HourglassIcon />,
    title: 'Proveemos equipo en renta para asistir a nuestros clientes a cubrir picos en la demanda, situaciones imprevistas o evaluaciones.',
    button: 'RENTA DE EQUIPO MÉDICO'
  }
];

export default function Services() {
  return (
    <section className={styles.section}>
      <Container>
        <h3 className={styles.heading}>Nuestros Servicios</h3>

        <div className={styles.grid}>
          {cards.map((c) => (
            <div key={c.button} className={styles.card}>
              <div className={styles.icon}>{c.icon}</div>
              <p className={styles.text}>{c.title}</p>
              <button className={styles.btn} type="button">{c.button}</button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
