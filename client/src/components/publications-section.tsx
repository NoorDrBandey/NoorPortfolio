import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, BookOpen, Users, Target, Star } from "lucide-react";
import { usePublications } from "@/hooks/use-portfolio-data";

const publicationTypeColors = {
  case_study: "bg-green-100 text-green-700 border-green-200",
  research: "bg-blue-100 text-blue-700 border-blue-200", 
  review: "bg-purple-100 text-purple-700 border-purple-200",
};

const publicationIcons = {
  case_study: Target,
  research: Star,
  review: BookOpen,
};

export default function PublicationsSection() {
  const { data: publications } = usePublications();

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Research Publications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Contributing to medical knowledge through research, case studies, and evidence-based practice
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-6"></div>
        </div>

        <div className="space-y-8">
          {publications.map((publication, index) => {
            const IconComponent = publicationIcons[publication.type];
            
            return (
              <Card key={publication.id} className="hover-lift border-none shadow-xl bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                            {publication.title}
                          </h3>
                          <p className="text-lg font-semibold text-cyan-600 mb-2">
                            {publication.journal}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                              <span className="font-medium">{publication.publishedDate}</span>
                            </div>
                            <Badge 
                              className={`${publicationTypeColors[publication.type]} capitalize`}
                              variant="outline"
                            >
                              {publication.type.replace('_', ' ')}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {publication.description}
                    </p>
                  </div>

                  {/* Contributions */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-cyan-500" />
                      Key Contributions
                    </h4>
                    <ul className="space-y-3">
                      {publication.contributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  {publication.impact && (
                    <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-100">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Target className="w-4 h-4 mr-2 text-cyan-600" />
                        Research Impact
                      </h4>
                      <p className="text-cyan-700 leading-relaxed">{publication.impact}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Research Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center hover-lift border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Case Studies</h4>
              <p className="text-sm text-muted-foreground">
                Real-world clinical cases contributing to medical knowledge
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Research Studies</h4>
              <p className="text-sm text-muted-foreground">
                Evidence-based research advancing medical practice
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-full mb-4">
                <ExternalLink className="w-6 h-6 text-cyan-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Published Work</h4>
              <p className="text-sm text-muted-foreground">
                Peer-reviewed publications in international journals
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Research Goals */}
        <div className="mt-16">
          <Card className="hover-lift border-none shadow-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Future Research Interests</h3>
              <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
                Continuing to contribute to medical literature through MPH studies, focusing on public health research, 
                epidemiological studies, and evidence-based healthcare policy development.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Epidemiological Research</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Public Health Policy</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Clinical Outcomes</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Community Health</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
