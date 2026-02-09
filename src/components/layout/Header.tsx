import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // Lock scroll when menu open (mobile)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
          <NavLink to="/" className={styles.logoLink} aria-label="Meditronica" onClick={() => setOpen(false)}>
            <img className={styles.logo} src={logo} alt="Meditronica logo" />
          </NavLink>

          {/* Desktop nav */}
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

          {/* Mobile hamburger */}
          <button
            type="button"
            className={styles.burger}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`${styles.burgerLine} ${open ? styles.lineTopOpen : ''}`} />
            <span className={`${styles.burgerLine} ${open ? styles.lineMidOpen : ''}`} />
            <span className={`${styles.burgerLine} ${open ? styles.lineBotOpen : ''}`} />
          </button>
        </div>
      </Container>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
      >
        <nav className={styles.mobileNav} aria-label="Mobile Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.mobileActive : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
