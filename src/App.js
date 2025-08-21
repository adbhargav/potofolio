import ProjectsSection from './components/ProjectsSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import About from './components/About';
import ExperienceSection from './components/ExperienceSection';

function App() {
  return (
    <>
     
      
      <Header />
      <HeroSection />
       <About />
      <ProjectsSection /> {/* Add here */}
      <SkillsSection />
      <ExperienceSection />
     
      <ContactSection />
      <Footer />
    </>
  );
}
export default App