
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Background grid */}
      <div 
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true" 
      />
      
      {/* Mouse follower blur effect - positioned with lower z-index */}
      <div 
        className="pointer-events-none absolute blur-[100px] bg-blue-200/70 w-80 h-80 rounded-full transition-all duration-300 ease-out -z-5"
        style={{
          left: `${mousePosition.x - 160}px`,
          top: `${mousePosition.y - 160}px`,
          opacity: 0.7,
        }}
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="text-center max-w-3xl mx-auto space-y-6 z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight relative">
          Hi, I'm <span className="text-primary relative inline-block">
            Gencer
            <span className="absolute -inset-1 -z-10 rounded-lg bg-blue-100/40 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-foreground/80 transition-transform hover:scale-105 duration-300">
          Software Developer & Data Scientist
        </p>
        
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
          I'm passionate about building innovative software solutions and analyzing complex data. 
          Currently studying Computer Science and Mathematics at Carleton College.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button 
            size="lg" 
            asChild 
            className="relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <a href="#contact">
              <span className="relative z-10">Get in touch</span>
              <span className="absolute inset-0 bg-primary/20 blur-md group-hover:bg-primary/30 transition-all duration-300"></span>
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className="relative overflow-hidden group transition-all duration-300 hover:shadow-lg"
          >
            <a href="#projects">
              <span className="relative z-10">View my work</span>
              <span className="absolute inset-0 bg-white/10 blur-md group-hover:bg-white/20 transition-all duration-300"></span>
            </a>
          </Button>
        </div>
      </div>
      
      {/* Interactive bounce arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border hover:border-primary hover:scale-110 transition-all duration-300"
        >
          <ChevronDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
