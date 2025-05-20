
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

const projects = [
  {
    title: "Divergence Analysis Python Library",
    description: "Built an open-source library to automate convergence/divergence testing for infinite series, integrating SymPy to handle complex functions and reduce manual calculation time.",
    technologies: ["Python", "NumPy", "SymPy"],
    link: "#"
  },
  {
    title: "AI Calendar Extension",
    description: "Built a Chrome extension that parses natural language from any text input using AI, then auto-schedules events via Google Calendar API. Integrated context-aware API to extract time, location, and intent, reducing manual scheduling effort.",
    technologies: ["JavaScript", "Gemini API", "Google Calendar API", "Chrome Extensions"],
    link: "#"
  },
  {
    title: "DiscoverEU Predictive Model",
    description: "Designed a keyword-weighted regression model using Pandas and Numpy to predict Erasmus applicants, won 5 monthly train tickets as an award from the European Union Erasmus Programme.",
    technologies: ["Python", "Google Analytics"],
    link: "#"
  },
  {
    title: "Unity 2D Survival Game",
    description: "Led a team of 3 to develop a 2D survival game in 72 hours, featuring resource management, building features, player mechanics, custom graphics and music using C# and Unity.",
    technologies: ["C#", "Unity", "Egitijam Competition (2022)"],
    link: "#"
  },
  {
    title: "Financial Portfolio Optimization Model",
    description: "Built a financial model leveraging yfinance API, MPT, and CAPM to optimize risk-adjusted returns, using Monte Carlo simulations and rebalancing strategies.",
    technologies: ["Python", "yfinance", "Modern Portfolio Theory (MPT)", "CAPM"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-5 w-5 text-primary" />
                  <CardTitle>{project.title}</CardTitle>
                </div>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
