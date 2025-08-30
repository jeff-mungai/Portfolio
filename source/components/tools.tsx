import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Terminal, Shield, Search, Key, Network, Eye, Box, Globe } from "lucide-react";

const Tools = () => {
  const toolCategories = [
    {
      title: "Operating Systems",
      icon: Terminal,
      tools: [
        { name: "Kali Linux", description: "Primary penetration testing distribution" }
      ]
    },
    {
      title: "Vulnerability Assessment",
      icon: Search,
      tools: [
        { name: "Nessus", description: "Comprehensive vulnerability scanner" }
      ]
    },
    {
      title: "Web Application Testing",
      icon: Globe,
      tools: [
        { name: "Burp Suite", description: "Web application security testing platform" }
      ]
    },
    {
      title: "Password & Credential Testing",
      icon: Key,
      tools: [
        { name: "Hydra", description: "Network login cracker" },
        { name: "John the Ripper", description: "Password hash cracking tool" }
      ]
    },
    {
      title: "Network & Connectivity",
      icon: Network,
      tools: [
        { name: "OpenVPN", description: "Secure tunneling and connectivity" }
      ]
    },
    {
      title: "Security Monitoring",
      icon: Eye,
      tools: [
        { name: "Splunk", description: "Security information and event management" }
      ]
    },
    {
      title: "Virtualization",
      icon: Box,
      tools: [
        { name: "Oracle VirtualBox", description: "Virtual machine management" }
      ]
    },
    {
      title: "Training Platforms",
      icon: Shield,
      tools: [
        { name: "TryHackMe", description: "Cybersecurity learning platform" }
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 px-6 bg-cyber-dark/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Tools & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for cybersecurity assessment, penetration testing, and security analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {toolCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-cyber transition-all duration-300 hover:border-primary/50 bg-gradient-cyber"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <category.icon className="w-6 h-6 text-primary group-hover:animate-pulse" />
                  <CardTitle className="text-sm font-semibold text-foreground">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="mb-3 last:mb-0">
                    <h4 className="font-medium text-primary text-sm">{tool.name}</h4>
                    <p className="text-xs text-muted-foreground">{tool.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-cyber border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-bold text-foreground">TryHackMe Profile</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Track my progress and achievements on TryHackMe as I complete new challenges and earn badges.
              </p>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://tryhackme.com/p/jeffmungai', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View TryHackMe Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tools;
