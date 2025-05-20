
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, School } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <p className="text-lg">
              I am a Computer Science and Mathematics student at Carleton College with a passion for software development, 
              data science, and problem-solving. My diverse experience spans web development, mobile applications, 
              data analysis, and machine learning.
            </p>
            
            <p className="text-lg">
              I'm currently working as a Software Developer at Carleton College, where I develop websites 
              tailored to faculty research needs using modern web technologies. I'm also contributing to 
              the optimization of Carleton College's student app "CarlsApp".
            </p>
            
            <p className="text-lg">
              Beyond programming, I'm passionate about solving complex problems and leveraging technology 
              to create meaningful solutions. I've won competitions in data analytics and cybersecurity, 
              demonstrating my versatility across multiple domains of computer science.
            </p>
            
            <p className="text-lg">
              As a visiting student at the University of Oxford for the 2025-2026 academic year, I'm excited to expand 
              my academic horizons and engage with new perspectives in computer science and mathematics.
            </p>
          </div>
          
          <div className="col-span-1 space-y-6">
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Software Development</h3>
                    <p className="text-muted-foreground mt-1">
                      Building web applications, mobile apps, and automation tools to solve real-world problems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <School className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Data Science</h3>
                    <p className="text-muted-foreground mt-1">
                      Analyzing data and building models to extract meaningful insights and support decision-making.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Multilingual</h3>
                    <p className="text-muted-foreground mt-1">
                      Fluent in English and Turkish, with intermediate German language skills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
