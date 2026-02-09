import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import PlaceholderPage from '../pages/PlaceholderPage';
import Catalog from '../pages/Catalog';
import Nosotros from '../pages/Nosotros';
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<PlaceholderPage title="Servicios" />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/book" element={<PlaceholderPage title="Reservar" />} />
        <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
        <Route path="/contacto" element={<PlaceholderPage title="Contacto" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
