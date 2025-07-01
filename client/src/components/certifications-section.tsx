import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Star, BookOpen, Users, Target } from "lucide-react";
import { useCertifications } from "@/hooks/use-portfolio-data";

const certificationCategoryColors = {
  medical: "bg-green-100 text-green-700 border-green-200",
  research: "bg-blue-100 text-blue-700 border-blue-200",
  training: "bg-purple-100 text-purple-700 border-purple-200",
};

const certificationIcons = {
  medical: Award,
  research: Star,
  training: BookOpen,
};

export default function CertificationsSection() {
  const { data: certifications } = useCertifications();

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Certifications & Training</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Continuous professional development through specialized training and certifications
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((certification, index) => {
            const IconComponent = certificationIcons[certification.category];
            
            return (
              <Card key={certification.id} className="hover-lift border-none shadow-xl bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                        {certification.title}
                      </h3>
                      <p className="text-lg font-semibold text-purple-600 mb-3">
                        {certification.issuer}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                          <span className="font-medium">{certification.completedDate}</span>
                        </div>
                        <Badge 
                          className={`${certificationCategoryColors[certification.category]} capitalize`}
                          variant="outline"
                        >
                          {certification.category}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  {certification.description && (
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                      <p className="text-purple-700 leading-relaxed">{certification.description}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certification Categories Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center hover-lift border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Medical Certifications</h4>
              <p className="text-sm text-muted-foreground">
                Specialized medical training and professional certifications
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Research Training</h4>
              <p className="text-sm text-muted-foreground">
                Advanced research methodologies and statistical analysis
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Professional Development</h4>
              <p className="text-sm text-muted-foreground">
                Continuous learning and skill enhancement programs
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Professional Development Goals */}
        <div className="mt-16">
          <Card className="hover-lift border-none shadow-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Commitment to Excellence</h3>
              <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
                Dedicated to continuous professional development and staying current with the latest medical practices, 
                research methodologies, and public health approaches through ongoing training and certification.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Medical Education</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Research Methods</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Clinical Excellence</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Professional Ethics</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
