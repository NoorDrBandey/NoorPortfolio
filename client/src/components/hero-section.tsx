import { Download, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // In a real implementation, this would trigger actual resume download
    window.open("/api/resume/download", "_blank");
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-24 pb-16 medical-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            {/* Professional headshot placeholder */}
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-6 border-4 border-white shadow-lg">
              <div className="text-4xl text-blue-600">👨‍⚕️</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dr. Noor Ul An Bandey
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-medium mb-2">
              MBBS Graduate & Medical Professional
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Seeking Masters in Public Health Opportunities
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Jammu, J&K, India</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>noorulanbandey@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91-9596626581</span>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Button 
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700"
              size="lg"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button 
              onClick={handleDownloadResume}
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 hover:bg-blue-50"
              size="lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button 
              asChild
              className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700"
              size="lg"
            >
              <a href="https://linkedin.com/in/noorulanbandey" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </a>
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">1+ Year</div>
                <div className="text-gray-600">ICU Experience</div>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-cyan-600 mb-2">2 Papers</div>
                <div className="text-gray-600">Published Research</div>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-green-600 mb-2">TOEFL 106</div>
                <div className="text-gray-600">International Ready</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
