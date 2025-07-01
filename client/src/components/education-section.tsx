import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Target, Calendar } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education & Academic Goals</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {/* Current Education */}
            <div className="relative flex items-center">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <div className="ml-16 md:ml-0 md:pl-8 md:w-1/2">
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">MBBS (Bachelor of Medicine, Bachelor of Surgery)</h3>
                        <p className="text-blue-600 font-medium">Acharya Shri Chander College of Medical Sciences and Hospital</p>
                        <p className="text-gray-600">Jammu, J&K</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Completed</Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Graduated August 2022</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Future Goal */}
            <div className="relative flex items-center">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-cyan-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              <div className="ml-16 md:ml-0 md:pr-8 md:w-1/2 md:text-right">
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="md:text-right">
                        <h3 className="font-semibold text-lg text-gray-900">Masters in Public Health (MPH)</h3>
                        <p className="text-cyan-600 font-medium">Target Universities - International Programs</p>
                        <p className="text-gray-600">United States / Canada / Europe</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Goal</Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 md:justify-end">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Target: Fall 2025 or Spring 2026</span>
                    </div>
                    <div className="mt-3 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Focus Areas:</strong> Epidemiology, Global Health, Health Policy, Community Health
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* Test Scores */}
        <Card className="mt-12 hover-lift">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Standardized Test Scores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">TOEFL iBT</div>
                  <div className="text-sm text-gray-600">August 2024</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">106</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg opacity-60">
                <div>
                  <div className="font-medium text-gray-900">GRE (Planned)</div>
                  <div className="text-sm text-gray-600">2024-2025</div>
                </div>
                <div className="text-sm text-gray-600">In Progress</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
