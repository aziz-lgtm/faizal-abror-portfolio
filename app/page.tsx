
import Hero from '@/components/Hero'
import Project from '@/components/Project';
import WhatIDo from '@/components/WhatIDo';
import CareerSection from '@/components/Career';
import EducationSection from '@/components/Education';
import TechSection from '@/components/Tech';
import ValuePropsSection from '@/components/Value';
import ContactSection from '@/components/Contac';

function App() {
  return (
    <section className=''>
      <Hero />
      <WhatIDo />
    <CareerSection />
    <EducationSection />
    <TechSection />
    <Project />
    <ValuePropsSection />
    <ContactSection />
    </section>
  );
}

export default App;