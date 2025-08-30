import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Building, CheckCircle } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "ISC2 Certified in Cyber Security",
      organization: "International Information System Security Certification Consortium",
      date: "2024",
      type: "Professional Certification",
      description: "Entry-level cybersecurity certification covering fundamental security principles, incident response, access controls, and security operations.",
      badge: "CC",
      verified: true
    }
  ];

  const skills = [
    "Risk Assessment",
    "Incident Response", 
    "Access Controls",
    "Security Operations",
    "Network Security",
    "Business Continuity"
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and accomplishments in cybersecurity education and training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-cyber transition-all duration-300 hover:border-primary/50 bg-gradient-cyber"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-primary group-hover:animate-pulse" />
                    <div>
                      <CardTitle className="text-lg text-foreground">{achievement.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Building className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{achievement.organization}</span>
                      </div>
                    </div>
                  </div>
                  {achievement.verified && (
                    <CheckCircle className="w-6 h-6 text-primary" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {achievement.badge}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="border-accent text-accent">
                    {achievement.type}
                  </Badge>
                  
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-cyber border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Core Competencies</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-secondary/20 text-foreground border-primary/20 hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
