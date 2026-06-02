import { About, Contact, Experience, Hero, Navbar, Works, Skills, Achievements, Certifications, Footer } from "./components";

const App = () => {
  return (
    <div className='relative z-0 bg-primary min-h-screen'>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Works />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
