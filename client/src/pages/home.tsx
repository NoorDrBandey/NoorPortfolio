import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import PublicationsSection from "@/components/publications-section";
import CertificationsSection from "@/components/certifications-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <PublicationsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Dr. Noor Ul An Bandey</h3>
            <p className="text-gray-400 mb-6">MBBS Graduate | Medical Professional | MPH Aspirant</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:noorulanbandey@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="https://linkedin.com/in/noorulanbandey" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="tel:+919596626581" className="text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-phone text-xl"></i>
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm">
                © 2024 Dr. Noor Ul An Bandey. Professional Portfolio.
                <span className="block mt-2">Designed for LinkedIn reach and MPH program applications.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
