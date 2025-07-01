import { Download, Mail, MapPin, Phone, ExternalLink, Star, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGSAPAnimations } from "@/hooks/use-gsap-animations";
import { usePersonalInfo } from "@/hooks/use-portfolio-data";
import profileImage from "@assets/1704128477041_1751344244247.jpeg";

export default function HeroSection() {
  const { addSectionRef } = useGSAPAnimations();
  const { data: personalInfo } = usePersonalInfo();
  
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
    <section ref={addSectionRef} className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="mb-8">
            {/* Professional headshot with enhanced styling */}
            <div className="gsap-hero w-40 h-40 mx-auto rounded-full mb-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full p-1 animate-pulse">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img 
                    src={profileImage} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="gsap-hero text-4xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <p className="gsap-hero text-xl md:text-2xl text-blue-600 font-semibold mb-2">
              {personalInfo.title}
            </p>
            <p className="gsap-hero text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {personalInfo.subtitle}
            </p>
            
            {/* Contact Information with enhanced design */}
            <div className="gsap-hero flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8 text-muted-foreground mb-8">
              <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200/50">
                <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200/50">
                <Mail className="w-4 h-4 mr-2 text-blue-500" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200/50">
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Action Buttons */}
          <div className="gsap-hero flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              onClick={handleDownloadResume}
              variant="outline" 
              className="border-2 border-blue-400 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button 
              asChild
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
            </Button>
          </div>

          {/* Enhanced Key Stats with animations */}
          <div className="gsap-hero grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="gsap-card hover-lift bg-white/60 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">1+ Year</div>
                <div className="text-muted-foreground font-medium">ICU Experience</div>
                <div className="text-sm text-muted-foreground mt-1">Medical ICU & Ward Management</div>
              </CardContent>
            </Card>
            
            <Card className="gsap-card hover-lift bg-white/60 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">2 Papers</div>
                <div className="text-muted-foreground font-medium">Published Research</div>
                <div className="text-sm text-muted-foreground mt-1">International Medical Journals</div>
              </CardContent>
            </Card>
            
            <Card className="gsap-card hover-lift bg-white/60 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">TOEFL 106</div>
                <div className="text-muted-foreground font-medium">International Ready</div>
                <div className="text-sm text-muted-foreground mt-1">MPH Program Qualified</div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action for MPH Goals */}
          <div className="gsap-hero mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-200/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-foreground mb-2">🎯 Academic Goal</h3>
            <p className="text-muted-foreground mb-4">
              Actively seeking <strong>Masters in Public Health (MPH)</strong> opportunities for Fall 2025 or Spring 2026
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Epidemiology</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Global Health</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Health Policy</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Community Health</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
