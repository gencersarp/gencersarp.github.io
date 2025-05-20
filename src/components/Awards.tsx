
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const awards = [
  {
    title: "Underbrink Scholar",
    organization: "Carleton College",
    year: "2024 - 2028",
    description: "A selective need and merit based scholarship in Carleton College, total amounting $250000+."
  },
  {
    title: "2nd Place in Colleges",
    organization: "MetaCTF Cybersecurity Competition",
    year: "2024",
    description: "Among 20+ college teams."
  },
  {
    title: "Honorable Mention",
    organization: "NCS Math Contest",
    year: "2024",
    description: "Solved 7/10 hard math problems with a group of 3."
  },
  {
    title: "National Finalist",
    organization: "Gencbizz Entrepreneurship Competition",
    year: "2023",
    description: "Pitched a foldable cup design to reduce waste and production cost."
  },
  {
    title: "TUBITAK Grant Recipient",
    organization: "TUBITAK",
    year: "2022",
    description: "Recognized for innovative physics project on mechanics of traditional toys."
  }
];

const Awards = () => {
  return (
    <section id="awards" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Awards & Honors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {awards.map((award, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                      <h3 className="font-semibold text-lg">{award.title}</h3>
                      <span className="text-sm text-muted-foreground">{award.year}</span>
                    </div>
                    <p className="text-sm font-medium text-foreground/80 mb-2">{award.organization}</p>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
