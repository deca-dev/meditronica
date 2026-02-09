import Container from '../layout/Container';
import styles from './Discipline.module.css';

export default function Discipline() {
  return (
    <section className={styles.section}>
      <Container>
        <h3 className={styles.title}>Servicios de equipo por disciplina médica</h3>
        <p className={styles.text}>
          Clínicas Dentales, Clínicas Médicas, Hogares de Ancianos / Cuidados de Enfermería, Hospitales, Laboratorios, Clínicas de Partería,
          Clínicas de Fisioterapia, Clínicas Quiroprácticas, Clínicas de Investigación, Unidades Quirúrgicas, Clínicas Veterinarias, Centros
          de Bienestar Laboral
        </p>
      </Container>
    </section>
  );
}
