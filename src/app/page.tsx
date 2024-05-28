import Header from '../components/Header';
import About from '../components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Project';
import Resume from '../components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


const Home: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
