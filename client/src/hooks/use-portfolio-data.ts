import { useQuery } from "@tanstack/react-query";
import type { Publication, Certification, Experience } from "@shared/schema";

export function usePortfolioData() {
  const publicationsQuery = useQuery<Publication[]>({
    queryKey: ["/api/publications"],
  });

  const certificationsQuery = useQuery<Certification[]>({
    queryKey: ["/api/certifications"],
  });

  const experiencesQuery = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
  });

  return {
    publications: publicationsQuery.data || [],
    certifications: certificationsQuery.data || [],
    experiences: experiencesQuery.data || [],
    isLoading: publicationsQuery.isLoading || certificationsQuery.isLoading || experiencesQuery.isLoading,
    error: publicationsQuery.error || certificationsQuery.error || experiencesQuery.error,
  };
}

export function usePublications() {
  return useQuery<Publication[]>({
    queryKey: ["/api/publications"],
  });
}

export function useCertifications() {
  return useQuery<Certification[]>({
    queryKey: ["/api/certifications"],
  });
}

export function useExperiences() {
  return useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
  });
}
