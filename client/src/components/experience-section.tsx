import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Heart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Experience } from "@shared/schema";

export default function ExperienceSection() {
  const { data: experiences, isLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
  });

  if (isLoading) {
    return (
      <section id="experience" className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg h-48"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "professional":
        return { className: "bg-blue-600 text-white hover:bg-blue-600", label: "Professional" };
      case "volunteer":
        return { className: "bg-green-600 text-white hover:bg-green-600", label: "Community Service" };
      case "internship":
        return { className: "bg-gray-200 text-gray-700 hover:bg-gray-200", label: "Internship" };
      default:
        return { className: "bg-gray-200 text-gray-700 hover:bg-gray-200", label: "Experience" };
    }
  };

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case "professional":
        return "bg-gray-50";
      case "volunteer":
        return "bg-green-50 border-green-100";
      case "internship":
        return "bg-white border-gray-200";
      default:
        return "bg-white border-gray-200";
    }
  };

  return (
    <section id="experience" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences?.map((experience) => {
            const badgeInfo = getBadgeVariant(experience.type);
            const bgColor = getBackgroundColor(experience.type);
            
            return (
              <Card key={experience.id} className={`${bgColor} border hover-lift`}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                      <p className={`font-medium ${experience.type === 'professional' ? 'text-blue-600' : experience.type === 'volunteer' ? 'text-green-600' : 'text-cyan-600'}`}>
                        {experience.organization}
                      </p>
                      <p className="text-gray-600">{experience.location}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={badgeInfo.className}>
                        {badgeInfo.label}
                      </Badge>
                      <p className="text-sm text-gray-600 mt-2">
                        {experience.startDate} – {experience.endDate || "Present"}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {experience.responsibilities.map((responsibility, index) => (
                      <div key={index} className="flex items-start">
                        {experience.type === 'volunteer' ? (
                          <Heart className={`${experience.type === 'professional' ? 'text-blue-600' : experience.type === 'volunteer' ? 'text-green-600' : 'text-cyan-600'} mt-1 mr-3 flex-shrink-0`} size={16} />
                        ) : (
                          <CheckCircle className={`${experience.type === 'professional' ? 'text-blue-600' : experience.type === 'volunteer' ? 'text-green-600' : 'text-cyan-600'} mt-1 mr-3 flex-shrink-0`} size={16} />
                        )}
                        <p className="text-gray-700">{responsibility}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
