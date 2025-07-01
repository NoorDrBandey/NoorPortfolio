import { portfolioData } from "@/data/portfolio-data";
import type { Publication, Certification, Experience, Skill, Education, TestScore } from "@/data/portfolio-data";

export function usePortfolioData() {
  // Return static data immediately (no loading state needed)
  return {
    publications: portfolioData.publications.filter(pub => pub.isVisible),
    certifications: portfolioData.certifications.filter(cert => cert.isVisible),
    experiences: portfolioData.experiences.filter(exp => exp.isVisible),
    skills: portfolioData.skills,
    education: portfolioData.education,
    testScores: portfolioData.testScores,
    personal: portfolioData.personal,
    isLoading: false,
    error: null,
  };
}

export function usePublications() {
  return {
    data: portfolioData.publications.filter(pub => pub.isVisible),
    isLoading: false,
    error: null
  };
}

export function useCertifications() {
  return {
    data: portfolioData.certifications.filter(cert => cert.isVisible),
    isLoading: false,
    error: null
  };
}

export function useExperiences() {
  return {
    data: portfolioData.experiences.filter(exp => exp.isVisible),
    isLoading: false,
    error: null
  };
}

export function useSkills() {
  return {
    data: portfolioData.skills,
    isLoading: false,
    error: null
  };
}

export function useEducation() {
  return {
    data: portfolioData.education,
    isLoading: false,
    error: null
  };
}

export function useTestScores() {
  return {
    data: portfolioData.testScores,
    isLoading: false,
    error: null
  };
}

export function usePersonalInfo() {
  return {
    data: portfolioData.personal,
    isLoading: false,
    error: null
  };
}
