import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Flag, Github, ExternalLink, Shield, Terminal } from "lucide-react";

const Projects = () => {
  const projectCategories = [
    {
      title: "Penetration Testing Reports",
      icon: Shield,
      description: "Comprehensive security assessments and vulnerability reports",
      projects: [
        {
          name: "Network Security Assessment",
          description: "Full network penetration test with vulnerability analysis and remediation recommendations",
          tags: ["Network Security", "Vulnerability Assessment", "Report Writing"]
        },
        {
          name: "Web Application Security Audit", 
          description: "OWASP-based security testing of web applications with detailed findings",
          tags: ["Web Security", "OWASP", "Burp Suite"]
        },
        {
          name: "Wireless Network Penetration Test",
          description: "WiFi security assessment including WPA/WEP testing and rogue AP detection",
          tags: ["Wireless Security", "WiFi Testing", "Kali Linux"]
        }
      ]
    },
    {
      title: "Capture The Flag (CTF)",
      icon: Flag,
      description: "TryHackMe challenges and CTF competition writeups",
      projects: [
        {
          name: "TryHackMe Room Completions",
          description: "Successfully completed various rooms covering different security domains",
          tags: ["CTF", "TryHackMe", "Problem Solving"]
        },
        {
          name: "OSINT Challenges",
          description: "Open Source Intelligence gathering exercises and methodology documentation",
          tags: ["OSINT", "Information Gathering", "Investigation"]
        },
        {
          name: "Reverse Engineering Tasks",
          description: "Binary analysis and reverse engineering challenge solutions",
          tags: ["Reverse Engineering", "Binary Analysis", "Malware Analysis"]
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-cyber-dark/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Projects & Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical cybersecurity work including penetration testing reports, CTF challenges, and security assessments.
          </p>
        </div>

        <div className="space-y-12">
          {projectCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center mb-8">
                <category.icon className="w-8 h-8 text-primary mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, projectIndex) => (
                  <Card 
                    key={projectIndex}
                    className="group hover:shadow-cyber transition-all duration-300 hover:border-primary/50 bg-gradient-cyber"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex}
                            variant="secondary" 
                            className="text-xs bg-secondary/20 text-foreground border-primary/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          View Report
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-cyber border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Github className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-bold text-foreground">GitHub Repository</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Access my complete portfolio of penetration testing reports, CTF writeups, 
                and cybersecurity projects on GitHub.
              </p>
              <div className="space-y-3">
                <Button 
                  variant="default"
                  size="lg"
                  className="w-full shadow-cyber hover:shadow-cyber-strong"
                  onClick={() => window.open('https://github.com/jeffmungai', '_blank')}
                >
                  <Github className="w-5 h-5 mr-2" />
                  View All Projects on GitHub
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() => window.open('https://tryhackme.com/p/jeffmungai', '_blank')}
                >
                  <Flag className="w-5 h-5 mr-2" />
                  TryHackMe CTF Progress
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
