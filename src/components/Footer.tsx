
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/50 py-12 px-4 relative overflow-hidden">
      {/* Decorative blurred elements */}
      <div 
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-200/20 blur-3xl"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-200/20 blur-3xl"
        aria-hidden="true"
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold">Gencer</h3>
            <p className="text-muted-foreground text-sm">
              Software Developer & Data Scientist
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-colors relative group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
              <span className="absolute inset-0 rounded-full bg-blue-100/0 group-hover:bg-blue-100/30 transition-colors duration-300 scale-0 group-hover:scale-150 blur-sm"></span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors relative group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
              <span className="absolute inset-0 rounded-full bg-blue-100/0 group-hover:bg-blue-100/30 transition-colors duration-300 scale-0 group-hover:scale-150 blur-sm"></span>
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors relative group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              <span className="absolute inset-0 rounded-full bg-blue-100/0 group-hover:bg-blue-100/30 transition-colors duration-300 scale-0 group-hover:scale-150 blur-sm"></span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Gencer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
