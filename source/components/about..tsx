import { Card, CardContent } from "@/components/ui/card";
import { Shield, Code2, Target, Brain } from "lucide-react";

const About = () => {
  const passions = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protecting digital assets and identifying security vulnerabilities"
    },
    {
      icon: Code2,
      title: "Programming",
      description: "Building secure applications and automation tools"
    },
    {
      icon: Target,
      title: "Penetration Testing",
      description: "Ethical hacking to improve security postures"
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description: "Staying updated with the latest security trends and techniques"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As a dedicated cybersecurity student, I am passionate about protecting digital infrastructures 
            and continuously expanding my knowledge in ethical hacking and security practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {passions.map((passion, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-cyber transition-all duration-300 hover:border-primary/50 bg-gradient-cyber"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <passion.icon className="w-12 h-12 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {passion.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {passion.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-cyber border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Mission</h3>
              <p className="text-lg text-foreground/90 leading-relaxed">
                To contribute to the cybersecurity community by identifying vulnerabilities, 
                developing secure solutions, and helping organizations strengthen their security posture. 
                I believe in ethical hacking as a force for good, using technical skills to build 
                a safer digital world.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
