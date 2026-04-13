import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WaveLoader from "@/components/WaveLoader";
import ScrollToTop from "@/components/ScrollToTop";
import WaveDivider from "@/components/WaveDivider";

const Index = () => {
  return (
    <>
      <WaveLoader />
      <div className="min-h-screen bg-background text-foreground relative">
        <div className="cursor-spotlight" aria-hidden="true" />
        {/* SEO-compliant structure */}
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />
        <main id="home">
          <Hero />
          <WaveDivider />
          <About />
          <WaveDivider flip />
          <Skills />
          <WaveDivider />
          <Projects />
          <WaveDivider flip />
          <Testimonials />
          <WaveDivider />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
