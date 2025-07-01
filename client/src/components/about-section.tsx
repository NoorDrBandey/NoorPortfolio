import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, BookOpen } from "lucide-react";

export default function AboutSection() {
  const skills = [
    { name: "Clinical Practices", level: 90, color: "bg-blue-600" },
    { name: "Research Skills", level: 85, color: "bg-cyan-600" },
    { name: "Public Health", level: 70, color: "bg-green-600" },
    { name: "Communication", level: 95, color: "bg-blue-600" },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Professional Summary</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  I'm an MBBS graduate with one year of working experience in the Medical ICU. I'd describe myself as hardworking, 
                  self-driven and disciplined. I've always had a strong passion for medicine and learning the human body. 
                  Becoming a doctor has allowed me to use my passion to help society.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Target className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">MPH Aspirations</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  I am actively seeking opportunities to pursue a Masters in Public Health to expand my impact beyond clinical practice. 
                  My goal is to contribute to community health initiatives, policy development, and health research on a broader scale.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Core Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <Badge variant="secondary">{skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}</Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${skill.color} h-2 rounded-full skill-bar`} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <Card className="mt-8 bg-yellow-50 border-yellow-200">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-yellow-600 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900">Personal Interests</h4>
                    <p className="text-sm text-gray-700 mt-1">Trekking, adventurous outdoor sports, and reading books</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
