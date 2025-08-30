import { Button } from "@/components/ui/button";
import { Shield, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-darker border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Jeff Mungai</span>
            </div>
            <p className="text-muted-foreground">
              Cybersecurity Student & Aspiring Penetration Tester
            </p>
            <p className="text-sm text-muted-foreground">
              Building a safer digital world through ethical hacking and security awareness.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {['About', 'Tools', 'Achievements', 'Projects'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex flex-col space-y-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary"
                onClick={() => window.open('https://github.com/jeffmungai', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary"
                onClick={() => window.open('https://tryhackme.com/p/jeffmungai', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                TryHackMe
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary"
                onClick={() => window.open('mailto:jeff.mungai@example.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Jeff Mungai. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Built with passion for cybersecurity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
