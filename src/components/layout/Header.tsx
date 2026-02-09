import { NavLink } from 'react-router-dom';
import Container from './Container';
import styles from './Header.module.css';
import logo from '../../assets/images/logo-meditronica.png';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/catalogo', label: 'Productos' },
  { to: '/book', label: 'Reservar Cita' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' }
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
          <NavLink to="/" className={styles.logoLink} aria-label="Meditronica">
            <img className={styles.logo} src={logo} alt="Meditronica logo" />
          </NavLink>

          <nav className={styles.nav} aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
