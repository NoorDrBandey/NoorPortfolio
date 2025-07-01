import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Microscope, BookOpen, Award, Plus } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Publication } from "@shared/schema";

export default function PublicationsSection() {
  const [expandedPublications, setExpandedPublications] = useState<Set<number>>(new Set());
  
  const { data: publications, isLoading } = useQuery<Publication[]>({
    queryKey: ["/api/publications"],
  });

  const toggleExpanded = (id: number) => {
    const newExpanded = new Set(expandedPublications);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedPublications(newExpanded);
  };

  const getBadgeInfo = (type: string) => {
    switch (type) {
      case "case_study":
        return { className: "bg-blue-100 text-blue-700 hover:bg-blue-100", label: "Case Study" };
      case "research":
        return { className: "bg-green-100 text-green-700 hover:bg-green-100", label: "Prospective Study" };
      case "review":
        return { className: "bg-purple-100 text-purple-700 hover:bg-purple-100", label: "Review" };
      default:
        return { className: "bg-gray-100 text-gray-700 hover:bg-gray-100", label: "Publication" };
    }
  };

  if (isLoading) {
    return (
      <section id="publications" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Publications</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg h-40"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="publications" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Publications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Contributing to medical knowledge through research and case studies</p>
        </div>
        
        <div className="space-y-6">
          {publications?.map((publication) => {
            const isExpanded = expandedPublications.has(publication.id);
            const badgeInfo = getBadgeInfo(publication.type);
            
            return (
              <Card key={publication.id} className="hover-lift bg-white shadow-sm border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div className="mb-4 md:mb-0 flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{publication.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{publication.journal}</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <span>{publication.publishedDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={badgeInfo.className}>
                        {badgeInfo.label}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpanded(publication.id)}
                        className="text-gray-700 hover:bg-gray-100"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-4 h-4 mr-1" />
                            Hide Details
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4 mr-1" />
                            Details
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Research Contribution</h4>
                        <div className="space-y-2 text-gray-700">
                          {publication.contributions.map((contribution, index) => (
                            <div key={index} className="flex items-start">
                              {publication.type === "case_study" ? (
                                <Microscope className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={16} />
                              ) : (
                                <BookOpen className="text-green-600 mt-1 mr-3 flex-shrink-0" size={16} />
                              )}
                              <p>{contribution}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      {publication.impact && (
                        <div className={`${publication.type === 'case_study' ? 'bg-blue-50' : 'bg-green-50'} p-4 rounded-lg`}>
                          <div className="flex items-start">
                            <Award className={`${publication.type === 'case_study' ? 'text-blue-600' : 'text-green-600'} mt-1 mr-3 flex-shrink-0`} size={16} />
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">Impact</h4>
                              <p className="text-sm text-gray-700">{publication.impact}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
          
          {/* Add Publication CTA */}
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-gray-200 text-center hover-lift">
            <CardContent className="p-6">
              <Plus className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">More Research Coming Soon</h3>
              <p className="text-gray-600 mb-4">Currently working on additional research projects and case studies</p>
              <div className="text-sm text-gray-500">
                Dynamic content management enabled for future additions
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
