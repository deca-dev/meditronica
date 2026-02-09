import Hero from '../components/home/Hero';
import Experience from '../components/home/Experience';
import Services from '../components/home/Services';
import Discipline from '../components/home/Discipline';
import AcrossCanada from '../components/home/AcrossCanada';
import Preventative from '../components/home/Preventative';
import BrandRow from '../components/home/BrandRow';

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Services />
      <Discipline />
      <AcrossCanada />
      <Preventative />
      <BrandRow />
    </>
  );
}
