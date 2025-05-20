
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { School } from "lucide-react";

const education = [
  {
    institution: "Carleton College",
    degree: "(Prospective) BA in Computer Science and Mathematics",
    location: "Minnesota, USA",
    gpa: "4.00",
    period: "2024 - 2028 (Expected)",
    details: [
      "Underbrink Scholar",
      "Relevant Coursework: Data Structures, Computer Systems, Calculus 3, Linear Algebra, Discrete Mathematics, Programming"
    ]
  },
  {
    institution: "University of Oxford",
    degree: "Visiting Student",
    location: "Oxford, United Kingdom",
    period: "Oct 2025 - June 2026",
    details: []
  }
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-8 mt-10">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="timeline-dot" />
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center gap-2 mb-2 md:mb-0">
                      <School className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{edu.institution}</h3>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {edu.period}
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-lg font-medium">{edu.degree}</p>
                    <p className="text-muted-foreground">{edu.location}</p>
                    {edu.gpa && (
                      <p className="text-sm font-medium text-primary mt-1">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                  
                  {edu.details.length > 0 && (
                    <ul className="space-y-2 list-disc pl-5">
                      {edu.details.map((item, idx) => (
                        <li key={idx} className="text-foreground/80">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
