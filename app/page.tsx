
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import WhatIDo from '@/components/WhatIDo'
import TechStack from '@/components/TechStack'
import Career from '@/components/Career'



function App() {
  return (
    <section className=''>
    <Hero />
    <Career />
    <Education />
    <WhatIDo />
    <Projects />
    <TechStack />
    <Contact />
    </section>
  );
}

export default App;