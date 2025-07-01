import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Target, Calendar } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Education & Academic Goals</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Completed Education - Left Side */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Completed Education</h3>
              <div className="w-16 h-0.5 bg-blue-600 lg:mx-0 mx-auto"></div>
            </div>
            
            <Card className="hover-lift border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-xl text-foreground mb-1">MBBS</h4>
                    <p className="text-sm text-muted-foreground mb-3">Bachelor of Medicine, Bachelor of Surgery</p>
                    <p className="text-blue-600 font-medium text-sm">Acharya Shri Chander College of Medical Sciences</p>
                    <p className="text-muted-foreground text-sm">Jammu, J&K, India</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Completed</Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Graduated August 2022</span>
                </div>
              </CardContent>
            </Card>

            {/* Test Scores */}
            <Card className="hover-lift border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Test Scores</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950/50 rounded-lg">
                    <div>
                      <div className="font-medium text-foreground">TOEFL iBT</div>
                      <div className="text-sm text-muted-foreground">August 2024</div>
                    </div>
                    <div className="text-xl font-bold text-blue-600">106</div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-medium text-foreground">GRE</div>
                      <div className="text-sm text-muted-foreground">Planning 2024-2025</div>
                    </div>
                    <div className="text-sm text-muted-foreground">In Progress</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Academic Goals - Right Side */}
          <div className="space-y-6">
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Academic Goals</h3>
              <div className="w-16 h-0.5 bg-green-600 lg:ml-auto mx-auto"></div>
            </div>
            
            <Card className="hover-lift border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="lg:text-right">
                    <h4 className="font-semibold text-xl text-foreground mb-1">Masters in Public Health</h4>
                    <p className="text-sm text-muted-foreground mb-3">MPH Program</p>
                    <p className="text-green-600 font-medium text-sm">International Universities</p>
                    <p className="text-muted-foreground text-sm">United States / Canada / Europe</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Goal</Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground lg:justify-end">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Target: Fall 2025 or Spring 2026</span>
                </div>
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/50 rounded-lg">
                  <p className="text-sm text-foreground lg:text-right">
                    <strong>Focus Areas:</strong> Epidemiology, Global Health, Health Policy, Community Health
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}