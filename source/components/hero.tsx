import { Button } from "@/components/ui/button";
import { Shield, Code, Terminal, Github, ExternalLink } from "lucide-react";
import cyberHeroBg from "@/assets/cyber-hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${cyberHeroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center mb-6">
          <Shield className="w-16 h-16 text-primary mr-4 animate-pulse" />
          <div className="flex space-x-2">
            <Code className="w-8 h-8 text-accent" />
            <Terminal className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Jeff Mungai
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Cybersecurity Student & Aspiring Penetration Tester
        </p>
        
        <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
          Passionate about cybersecurity and programming, dedicated to securing digital infrastructures
          and identifying vulnerabilities through ethical hacking practices.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="default" 
            size="lg" 
            className="shadow-cyber hover:shadow-cyber-strong transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Terminal className="w-5 h-5 mr-2" />
            View Projects
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => window.open('https://github.com/jeffmungai', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub Profile
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-ping" />
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-accent rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-20 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;
