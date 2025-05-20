
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skillCategories = [
  {
    id: "programming",
    label: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C", "C#", "Kotlin", "Dart", "HTML", "CSS", "x86 Assembly", "Scheme"]
  },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    skills: ["React", "React Native", "TailwindCSS", "Flutter", "TensorFlow", "Keras", "Pandas", "NumPy", "SymPy", "ThreeJS", "Unity", "Scikit Learn"]
  },
  {
    id: "tools",
    label: "Tools & Others",
    skills: ["Git", "Selenium", "Mathematica", "GDB", "R", "SQL", "Google Analytics", "Chrome Extensions", "Xcode", "Swift", "Excel", "CAPM"]
  },
  {
    id: "languages",
    label: "Human Languages",
    skills: ["English (fluent)", "Turkish (fluent)", "German (intermediate)"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Skills</h2>
        
        <Card className="mt-10">
          <CardContent className="p-6">
            <Tabs defaultValue="programming" className="w-full">
              <div className="flex justify-center mb-6">
                <TabsList className="grid grid-cols-2 md:grid-cols-4">
                  {skillCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {skillCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-2">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="skill-tag hover-scale"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
