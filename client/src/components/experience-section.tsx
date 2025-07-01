import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  MapPin, 
  Calendar,
  Stethoscope,
  Users,
  Heart,
  TrendingUp,
  Clock
} from "lucide-react";
import { useExperiences } from "@/hooks/use-portfolio-data";

const experienceTypeColors = {
  professional: "bg-blue-100 text-blue-700 border-blue-200",
  internship: "bg-green-100 text-green-700 border-green-200",
  volunteer: "bg-purple-100 text-purple-700 border-purple-200",
};

const experienceIcons = {
  professional: Briefcase,
  internship: TrendingUp,
  volunteer: Heart,
};

export default function ExperienceSection() {
  const { data: experiences } = useExperiences();

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-6">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A journey through medical practice, research, and community service - building expertise and making a difference.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mt-6"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-blue-400 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const IconComponent = experienceIcons[experience.type];
              const isEven = index % 2 === 0;
              
              return (
                <div key={experience.id} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                  
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <Card className="hover-lift border-none shadow-xl bg-white/80 backdrop-blur-sm group">
                      <CardContent className="p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-foreground mb-1">{experience.title}</h3>
                              <p className="text-lg font-semibold text-blue-600">{experience.organization}</p>
                            </div>
                          </div>
                          <Badge 
                            className={`${experienceTypeColors[experience.type]} capitalize`}
                            variant="outline"
                          >
                            {experience.type}
                          </Badge>
                        </div>

                        {/* Location and Duration */}
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-green-500" />
                            <span className="font-medium">{experience.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                            <span className="font-medium">
                              {experience.startDate} - {experience.endDate || 'Present'}
                            </span>
                          </div>
                          {experience.isCurrent && (
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-orange-500" />
                              <span className="text-orange-600 font-medium">Current</span>
                            </div>
                          )}
                        </div>

                        {/* Responsibilities */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground flex items-center">
                            <Users className="w-4 h-4 mr-2 text-purple-500" />
                            Key Responsibilities & Achievements
                          </h4>
                          <ul className="space-y-3">
                            {experience.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Experience highlights based on type */}
                        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-100">
                          {experience.type === 'professional' && (
                            <div className="flex items-center text-sm text-green-700">
                              <Stethoscope className="w-4 h-4 mr-2" />
                              <span className="font-medium">Clinical Excellence & Patient Care</span>
                            </div>
                          )}
                          {experience.type === 'internship' && (
                            <div className="flex items-center text-sm text-green-700">
                              <TrendingUp className="w-4 h-4 mr-2" />
                              <span className="font-medium">Professional Development & Skill Building</span>
                            </div>
                          )}
                          {experience.type === 'volunteer' && (
                            <div className="flex items-center text-sm text-purple-700">
                              <Heart className="w-4 h-4 mr-2" />
                              <span className="font-medium">Community Service & Social Impact</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for the other half on larger screens */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center hover-lift border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Stethoscope className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Clinical Practice</h4>
              <p className="text-sm text-muted-foreground">
                ICU & ward management with comprehensive patient care
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Professional Growth</h4>
              <p className="text-sm text-muted-foreground">
                From internship to junior resident with expanding responsibilities
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Community Impact</h4>
              <p className="text-sm text-muted-foreground">
                Volunteer work in health awareness and emergency response
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
