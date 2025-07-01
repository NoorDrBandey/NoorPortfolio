import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, GraduationCap } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Certification } from "@shared/schema";

export default function CertificationsSection() {
  const { data: certifications, isLoading } = useQuery<Certification[]>({
    queryKey: ["/api/certifications"],
  });

  const getBadgeColor = (category: string) => {
    switch (category) {
      case "medical":
        return "bg-red-100 text-red-700 hover:bg-red-100";
      case "research":
        return "bg-blue-100 text-blue-700 hover:bg-blue-100";
      case "training":
        return "bg-green-100 text-green-700 hover:bg-green-100";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100";
    }
  };

  const getBadgeLabel = (category: string) => {
    switch (category) {
      case "medical":
        return "Medical";
      case "research":
        return "Research";
      case "training":
        return "Training";
      default:
        return "Certification";
    }
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Training</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg h-32"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Training</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications?.map((certification) => (
            <Card key={certification.id} className="bg-gray-50 border border-gray-100 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{certification.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{certification.issuer}</p>
                    {certification.description && (
                      <p className="text-sm text-gray-600">{certification.description}</p>
                    )}
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <Badge className={getBadgeColor(certification.category)}>
                      {getBadgeLabel(certification.category)}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Completed {certification.completedDate}</span>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Add Certification Placeholder */}
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 hover:border-blue-300 transition-colors hover-lift">
            <CardContent className="p-6">
              <div className="text-center">
                <Plus className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <h3 className="font-medium text-gray-700 mb-2">Add New Certification</h3>
                <p className="text-sm text-gray-500">Easy content management for future certifications</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover-lift">
            <CardContent className="p-6">
              <div className="text-center">
                <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">Continuous Learning</h3>
                <p className="text-sm text-gray-600">Actively pursuing additional medical and public health certifications</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
