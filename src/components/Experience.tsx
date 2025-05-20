
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Carleton College",
    location: "Minnesota",
    period: "Jan 2025 - Current",
    description: [
      "Developing websites tailored to faculty research needs, using JavaScript, Typescript, React, HTML, CSS, TailwindCSS, Git",
      "Building and optimizing Carleton College's student app 'CarlsApp'",
      "Developed a chrome extension that uses AI to understand calendar events, and adds to calendar using API calls"
    ]
  },
  {
    title: "iOS Developer",
    company: "Youphoria App",
    location: "Remote",
    period: "Apr 2025 - Current",
    description: [
      "Assisting in the development of an iOS app using Swift and Xcode",
      "Testing app functionality on various devices and reporting bugs and collaborating with team members through Git"
    ]
  },
  {
    title: "Data Scientist",
    company: "Minnemudac Analytics Competition, 1st Place",
    location: "Minnesota",
    period: "Mar 2025 - Apr 2025",
    description: [
      "Won $1,600 in a team of 4 by analyzing mentorship program efficacy for Big Brothers Big Sisters (BBBS) over a month",
      "Built statistical models to correlate mentor-mentee interactions with long-term success metrics, informing BBBS's national strategy, using Python and R"
    ]
  },
  {
    title: "Software Developer",
    company: "Altera Telecom and Trade Company",
    location: "Turkey",
    period: "Apr 2023 – Sept 2023",
    description: [
      "Engineered Python automation scripts with Selenium to scrape and analyze 2,000+ records monthly, reducing manual data entry and errors by 70%+",
      "Revamped Java-based telecom systems, optimizing database queries to cut waiting times by 30%"
    ]
  },
  {
    title: "Project Assistant",
    company: "Istanbul Technical University",
    location: "Turkey",
    period: "June 2022 – July 2022",
    description: [
      "Implemented a 3D medical image segmentation pipeline using Python, TensorFlow, and U-NET, achieving 92% accuracy in liver boundary detection across 500+ MRI scans, which reduces the time spent per doctor on segmentation by 80% compared to traditional non-computational methods",
      "Applied data augmentation (rotation, flipping) and hyperparameter tuning (learning rate, batch size) to improve model robustness by 15%, preprocessed 3D images to trainable 2D slices"
    ]
  },
  {
    title: "Software Developer",
    company: "Lenovo Kitextreme",
    location: "Turkey",
    period: "Summer 2021 & 2022",
    description: [
      "Enhanced Java-based lesson scheduling software, optimizing resource allocation for 200+ people over the summer",
      "Streamlined financial planning workflows using Excel functions, cutting monthly reporting time by 4 hours"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="space-y-10 mt-10">
          {experiences.map((job, index) => (
            <div key={index} className="timeline-item fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="timeline-dot" />
              <Card className="hover-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center gap-2 mb-2 md:mb-0">
                      <Briefcase className="h-5 w-5 text-primary icon-hover" />
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {job.period}
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-lg font-medium">{job.company}</p>
                    <p className="text-muted-foreground">{job.location}</p>
                  </div>
                  
                  <ul className="space-y-2 list-disc pl-5">
                    {job.description.map((item, idx) => (
                      <li key={idx} className="text-foreground/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
