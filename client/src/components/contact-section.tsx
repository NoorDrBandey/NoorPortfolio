import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, ExternalLink, User, MessageCircle, Calendar } from "lucide-react";
import { usePersonalInfo } from "@/hooks/use-portfolio-data";

export default function ContactSection() {
  const { data: personalInfo } = usePersonalInfo();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio");
    const body = encodeURIComponent(
      `Hello Dr. Noor,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n\nEmail: ${formData.email}`
    );
    
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Let's connect for MPH opportunities, research collaboration, or professional discussions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover-lift border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-blue-500" />
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <Mail className="text-blue-600 w-8 h-8 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-green-50 rounded-lg border border-green-100">
                    <Phone className="text-green-600 w-8 h-8 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a 
                        href={`tel:${personalInfo.phone}`} 
                        className="text-green-600 hover:text-green-700 font-medium transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-purple-50 rounded-lg border border-purple-100">
                    <MapPin className="text-purple-600 w-8 h-8 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-purple-600 font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Professional Networks */}
            <Card className="hover-lift border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <ExternalLink className="w-6 h-6 mr-3 text-purple-500" />
                  Professional Networks
                </h3>
                <div className="space-y-4">
                  <a 
                    href={personalInfo.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 border border-blue-100"
                  >
                    <ExternalLink className="text-blue-600 w-6 h-6 mr-4" />
                    <div>
                      <p className="font-semibold text-foreground">LinkedIn</p>
                      <p className="text-sm text-blue-600">Professional networking and updates</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center p-4 bg-green-50 rounded-lg border border-green-100">
                    <User className="text-green-600 w-6 h-6 mr-4" />
                    <div>
                      <p className="font-semibold text-foreground">ORCID</p>
                      <p className="text-sm text-green-600">Academic identifier and publications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <Calendar className="text-orange-600 w-6 h-6 mr-4" />
                    <div>
                      <p className="font-semibold text-foreground">Available for</p>
                      <p className="text-sm text-orange-600">MPH program discussions & research collaboration</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="hover-lift border-none shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Send className="w-6 h-6 mr-3 text-blue-500" />
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <Input 
                      placeholder="Your full name" 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="border-2 border-gray-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-2 border-gray-200 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <Select onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MPH Program Opportunity">MPH Program Opportunity</SelectItem>
                      <SelectItem value="Research Collaboration">Research Collaboration</SelectItem>
                      <SelectItem value="Professional Consultation">Professional Consultation</SelectItem>
                      <SelectItem value="Professional Networking">Professional Networking</SelectItem>
                      <SelectItem value="Other Inquiry">Other Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Your message here..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message via Email
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  This will open your email client to send the message directly to Dr. Noor
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="hover-lift border-none shadow-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Connect?</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                I'm actively seeking MPH program opportunities and research collaborations. 
                Let's discuss how we can work together to advance public health initiatives.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  asChild
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    Email Directly
                  </a>
                </Button>
                <Button 
                  asChild
                  className="bg-white/20 text-white border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
