
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Enhanced floating background elements */}
      <div 
        className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"
        style={{animationDuration: '15s'}}
        aria-hidden="true"
      />
      <div 
        className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"
        style={{animationDuration: '20s'}}
        aria-hidden="true"
      />
      <div 
        className="fixed top-2/3 left-1/3 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"
        style={{animationDuration: '25s'}}
        aria-hidden="true"
      />
      
      {/* Enhanced blur follower effect - positioned with lower z-index */}
      <div 
        className="pointer-events-none fixed blur-[120px] bg-blue-300/50 w-96 h-96 rounded-full transition-all duration-500 ease-out z-0"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
          opacity: 0.8,
        }}
        aria-hidden="true"
      />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
