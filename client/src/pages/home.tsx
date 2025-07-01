import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import PublicationsSection from "@/components/publications-section";
import CertificationsSection from "@/components/certifications-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <PublicationsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dr. Noor Ul An Bandey
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                MBBS Graduate | Medical Professional | MPH Aspirant
              </p>
              
              {/* Contact Links */}
              <div className="flex justify-center space-x-8 mb-8">
                <a 
                  href="mailto:noorulanbandey@gmail.com" 
                  className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/40 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <span className="hidden sm:block">Email</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/noorbandey/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/40 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="hidden sm:block">LinkedIn</span>
                </a>
                
                <a 
                  href="tel:+919596626581" 
                  className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/40 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <span className="hidden sm:block">Phone</span>
                </a>
              </div>
            </div>
            
            {/* Achievement Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-blue-400 mb-1">1+ Year</div>
                <div className="text-gray-300 text-sm">ICU Experience</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-purple-400 mb-1">2 Papers</div>
                <div className="text-gray-300 text-sm">Published Research</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-green-400 mb-1">TOEFL 106</div>
                <div className="text-gray-300 text-sm">International Ready</div>
              </div>
            </div>
            
            {/* Divider */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-400 text-sm">
                  © 2024 Dr. Noor Ul An Bandey. Professional Portfolio.
                </p>
                <p className="text-gray-400 text-sm">
                  Designed for LinkedIn reach and MPH program applications.
                </p>
              </div>
              
              {/* Professional Focus Areas */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">
                  Public Health
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                  Clinical Research
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-500/30">
                  Medical ICU
                </span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs border border-orange-500/30">
                  Epidemiology
                </span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs border border-pink-500/30">
                  Global Health
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
