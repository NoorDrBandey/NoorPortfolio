import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Heart, 
  BookOpen, 
  Mountain, 
  Target,
  Globe,
  Stethoscope,
  GraduationCap
} from "lucide-react";
import { usePersonalInfo } from "@/hooks/use-portfolio-data";

export default function AboutSection() {
  const { data: personalInfo } = usePersonalInfo();

  const interests = [
    { name: "Trekking", icon: Mountain },
    { name: "Adventure Sports", icon: Target },
    { name: "Reading Books", icon: BookOpen },
    { name: "Medical Research", icon: Stethoscope },
    { name: "Public Health", icon: Globe },
    { name: "Continuous Learning", icon: GraduationCap }
  ];

  const personalValues = [
    { title: "Hardworking", description: "Dedicated to excellence in every task" },
    { title: "Self-Driven", description: "Proactive and motivated individual" },
    { title: "Disciplined", description: "Structured approach to professional growth" },
    { title: "Compassionate", description: "Passionate about helping society through medicine" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6">
            <User className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">About Dr. Noor</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get to know the person behind the medical expertise - passion, values, and aspirations that drive my journey.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-8">
            <Card className="hover-lift border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">My Story</h3>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {personalInfo.summary}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Personal Values */}
            <Card className="hover-lift border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {personalValues.map((value, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
                      <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interests & Goals */}
          <div className="space-y-8">
            {/* Interests */}
            <Card className="hover-lift border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Interests & Hobbies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => {
                    const IconComponent = interest.icon;
                    return (
                      <div key={index} className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                        <IconComponent className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-sm font-medium text-foreground">{interest.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Career Goals */}
            <Card className="hover-lift border-none shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 mr-4" />
                  <h3 className="text-2xl font-semibold">Future Aspirations</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <h4 className="font-semibold mb-2">🎓 Academic Goal</h4>
                    <p className="text-sm opacity-90">
                      Pursuing Masters in Public Health (MPH) to deepen expertise in epidemiology, global health, and health policy.
                    </p>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <h4 className="font-semibold mb-2">🌍 Professional Vision</h4>
                    <p className="text-sm opacity-90">
                      Contributing to global health initiatives and improving healthcare systems through evidence-based research and policy development.
                    </p>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <h4 className="font-semibold mb-2">💡 Research Focus</h4>
                    <p className="text-sm opacity-90">
                      Advancing medical knowledge through clinical research, case studies, and innovative approaches to patient care.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center hover-lift border-none shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-blue-600 mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Years Medical Training</div>
                </CardContent>
              </Card>
              <Card className="text-center hover-lift border-none shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-purple-600 mb-1">2+</div>
                  <div className="text-sm text-muted-foreground">Research Publications</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <Card className="hover-lift border-none shadow-xl bg-gradient-to-r from-green-50 to-teal-50 border border-green-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Professional Vision</h3>
              <blockquote className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
                "To leverage my medical expertise and research experience in pursuing advanced education in public health, 
                ultimately contributing to global health initiatives and improving healthcare systems for underserved communities."
              </blockquote>
              <div className="mt-6 flex justify-center space-x-4">
                <Badge className="bg-green-100 text-green-700 px-4 py-2">Patient-Centered Care</Badge>
                <Badge className="bg-blue-100 text-blue-700 px-4 py-2">Evidence-Based Practice</Badge>
                <Badge className="bg-purple-100 text-purple-700 px-4 py-2">Global Health Focus</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
