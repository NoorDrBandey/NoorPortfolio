import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Stethoscope, 
  Search, 
  Computer, 
  Users, 
  Brain,
  Heart,
  Database,
  MessageSquare,
  Calendar,
  Award
} from "lucide-react";
import { useSkills } from "@/hooks/use-portfolio-data";

const skillIcons = {
  clinical: Stethoscope,
  research: Search,
  technical: Computer,
  interpersonal: Users,
};

const skillLevels = {
  beginner: { value: 25, label: "Beginner", color: "bg-gray-400" },
  intermediate: { value: 50, label: "Intermediate", color: "bg-blue-400" },
  advanced: { value: 75, label: "Advanced", color: "bg-green-400" },
  expert: { value: 90, label: "Expert", color: "bg-purple-400" },
};

const skillCategoryColors = {
  clinical: "bg-green-100 text-green-700 border-green-200",
  research: "bg-blue-100 text-blue-700 border-blue-200",
  technical: "bg-purple-100 text-purple-700 border-purple-200",
  interpersonal: "bg-orange-100 text-orange-700 border-orange-200",
};

export default function SkillsSection() {
  const { data: skills } = useSkills();

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of technical and professional competencies developed through medical practice and research experience.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const IconComponent = skillIcons[category as keyof typeof skillIcons];
            
            return (
              <Card key={category} className="hover-lift border-none shadow-lg bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground capitalize">
                        {category.replace('_', ' ')} Skills
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category === 'clinical' && 'Medical practice and patient care'}
                        {category === 'research' && 'Research methodology and analysis'}
                        {category === 'technical' && 'Digital tools and technologies'}
                        {category === 'interpersonal' && 'Communication and collaboration'}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {categorySkills.map((skill) => {
                      const level = skillLevels[skill.level];
                      return (
                        <div key={skill.id} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <Badge 
                              className={`${skillCategoryColors[skill.category]} text-xs`}
                              variant="outline"
                            >
                              {level.label}
                            </Badge>
                          </div>
                          <div className="relative">
                            <Progress 
                              value={level.value} 
                              className="h-2"
                            />
                            <div 
                              className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-700 ease-out ${level.color}`}
                              style={{ width: `${level.value}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center hover-lift border-none shadow-lg bg-white/70 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Patient Care</h4>
              <p className="text-sm text-muted-foreground">
                1+ year ICU experience with comprehensive patient management
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift border-none shadow-lg bg-white/70 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Research Impact</h4>
              <p className="text-sm text-muted-foreground">
                2 published papers contributing to medical knowledge
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift border-none shadow-lg bg-white/70 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">International Ready</h4>
              <p className="text-sm text-muted-foreground">
                TOEFL 106 - Prepared for global opportunities
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 