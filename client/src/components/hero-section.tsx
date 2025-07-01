import { Download, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGSAPAnimations } from "@/hooks/use-gsap-animations";

export default function HeroSection() {
  const { addSectionRef } = useGSAPAnimations();
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/Dr_Noor_Ul_An_Bandey_Resume.pdf';
    link.download = 'Dr_Noor_Ul_An_Bandey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={addSectionRef} className="pt-24 pb-16 bg-gradient-to-br from-medical-50 to-healthcare-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            {/* Professional headshot placeholder */}
            <div className="gsap-hero w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 border-4 border-border/50 shadow-lg backdrop-blur-sm">
              <div className="text-4xl text-blue-400">👨‍⚕️</div>
            </div>
            <h1 className="gsap-hero text-4xl md:text-5xl font-bold text-foreground mb-4">
              Dr. Noor Ul An Bandey
            </h1>
            <p className="gsap-hero text-xl md:text-2xl text-blue-400 font-medium mb-2">
              MBBS Graduate & Medical Professional
            </p>
            <p className="gsap-hero text-lg text-muted-foreground mb-6">
              Seeking Masters in Public Health Opportunities
            </p>
            <div className="gsap-hero flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                <span>Jammu, J&K, India</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <span>noorulanbandey@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <span>+91-9596626581</span>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="gsap-hero flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Button 
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 border border-blue-600"
              size="lg"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button 
              onClick={handleDownloadResume}
              variant="outline" 
              className="border-2 border-blue-400 text-blue-400 px-8 py-3 hover:bg-blue-600/10"
              size="lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button 
              asChild
              className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 border border-blue-600"
              size="lg"
            >
              <a href="https://www.linkedin.com/in/noorbandey/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </a>
            </Button>
          </div>

          {/* Key Stats */}
          <div className="gsap-hero grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="gsap-card hover-lift bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-blue-400 mb-2">1+ Year</div>
                <div className="text-muted-foreground">ICU Experience</div>
              </CardContent>
            </Card>
            <Card className="gsap-card hover-lift bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-cyan-400 mb-2">2 Papers</div>
                <div className="text-muted-foreground">Published Research</div>
              </CardContent>
            </Card>
            <Card className="gsap-card hover-lift bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-green-400 mb-2">TOEFL 106</div>
                <div className="text-muted-foreground">International Ready</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
