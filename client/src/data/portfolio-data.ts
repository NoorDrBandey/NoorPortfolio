// Static portfolio data extracted from Dr. Noor's resume
export interface Publication {
  id: number;
  title: string;
  journal: string;
  publishedDate: string;
  type: 'case_study' | 'research' | 'review';
  description: string;
  contributions: string[];
  impact?: string;
  isVisible: boolean;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  completedDate: string;
  description?: string;
  category: 'medical' | 'research' | 'training';
  isVisible: boolean;
}

export interface Experience {
  id: number;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  type: 'professional' | 'volunteer' | 'internship';
  responsibilities: string[];
  isVisible: boolean;
}

export interface Skill {
  id: number;
  name: string;
  category: 'clinical' | 'research' | 'technical' | 'interpersonal';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  status: 'completed' | 'in_progress' | 'planned';
  gpa?: string;
  honors?: string[];
}

export interface TestScore {
  id: number;
  test: string;
  score: string;
  date: string;
  details?: string;
}

// Dr. Noor's Portfolio Data
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Dr. Noor Ul An Bandey",
    title: "MBBS Graduate & Medical Professional",
    subtitle: "Seeking Masters in Public Health Opportunities",
    email: "noorulanbandey@gmail.com",
    phone: "+91-9596626581",
    location: "Jammu, J&K, India",
    linkedin: "https://www.linkedin.com/in/noorbandey/",
    summary: "I'm an MBBS graduate with one year of working experience in the Medical ICU. I'd describe myself as hardworking, self-driven and disciplined. I've always had a strong passion for medicine and learning the human body. Becoming a doctor has allowed me to use my passion to help the society. Aside from my studies, I thoroughly enjoy trekking, adventurous outside sports and reading books."
  },

  // Education
  education: [
    {
      id: 1,
      degree: "MBBS",
      field: "Bachelor of Medicine, Bachelor of Surgery",
      institution: "Acharya Shri Chander College of Medical Sciences and Hospital (ASCOMS)",
      location: "Jammu, JK",
      startDate: "2017",
      endDate: "August 2022",
      status: "completed" as const,
      honors: ["Medical Graduate"]
    }
  ],

  // Test Scores
  testScores: [
    {
      id: 1,
      test: "TOEFL-106",
      score: "106",
      date: "August 2024",
      details: "International English proficiency certification"
    }
  ],

  // Skills from resume
  skills: [
    {
      id: 1,
      name: "Clinical Practices",
      category: "clinical" as const,
      level: "expert" as const
    },
    {
      id: 2,
      name: "Research Skills",
      category: "research" as const,
      level: "advanced" as const
    },
    {
      id: 3,
      name: "Public Health",
      category: "clinical" as const,
      level: "intermediate" as const
    },
    {
      id: 4,
      name: "Data Collection",
      category: "research" as const,
      level: "advanced" as const
    },
    {
      id: 5,
      name: "Communication",
      category: "interpersonal" as const,
      level: "expert" as const
    },
    {
      id: 6,
      name: "Organization Skills",
      category: "interpersonal" as const,
      level: "expert" as const
    }
  ],

  // Professional Experience
  experiences: [
    {
      id: 1,
      title: "Junior Resident",
      organization: "Government Medical College & AH",
      location: "Rajouri, India",
      startDate: "Sept 2023",
      endDate: "Sept 2024",
      isCurrent: false,
      type: "professional" as const,
      responsibilities: [
        "Efficiently manage patients in both the ICU and ward settings",
        "Regularly coordinate with multidisciplinary team, consult with senior colleagues to ensure optimal treatment plans and outcomes",
        "Conduct thorough patient assessments, perform complex procedures and interpret diagnostic tests"
      ],
      isVisible: true
    },
    {
      id: 2,
      title: "Medical Intern",
      organization: "Acharya Shri Chander College of Medical Sciences and Hospital",
      location: "Jammu, India",
      startDate: "Aug 2022",
      endDate: "Aug 2023",
      isCurrent: false,
      type: "internship" as const,
      responsibilities: [
        "Clinical skills and patient care which involved history taking and examination along with diagnostic and treatment planning",
        "Gain hands-on experience with essential procedure like IV catheterization, suturing and biopsies as well as understanding their roles in diagnosis and treatment",
        "Develop strong communication skills for better patient interaction and interdisciplinary approach for patient management"
      ],
      isVisible: true
    },
    {
      id: 3,
      title: "Student Volunteer",
      organization: "Indian Red Cross Society (IRCS)",
      location: "Jammu, India",
      startDate: "May 2022",
      endDate: "Aug 2023",
      isCurrent: false,
      type: "volunteer" as const,
      responsibilities: [
        "Assisted in organizing blood donation drives and health camps, contributing to community health initiatives",
        "Provided first aid and basic medical care during emergencies and events, enhancing public safety",
        "Engaged in health awareness campaigns, educating the public on topics like hygiene, vaccination, and disease prevention"
      ],
      isVisible: true
    }
  ],

  // Publications from resume
  publications: [
    {
      id: 1,
      title: "Bilateral Giant subcostal lipoma-A case report",
      journal: "International Journal of Medical Sciences and Advanced Clinical Research",
      publishedDate: "Dec 2022",
      type: "case_study" as const,
      description: "Collaborated with a multidisciplinary team to analyze and document the clinical presentation and treatment of a rare giant lipoma case.",
      contributions: [
        "Collaborated with a multidisciplinary team to analyze and document the clinical presentation and treatment of a rare giant lipoma case",
        "Conducted a comprehensive review of literature to support the case findings and contribute to medical knowledge on lipoma treatment and recurrence prevention",
        "Published the research in the International Journal of Medical Sciences and Advanced Clinical Research, enhancing the understanding of surgical interventions for benign tumors"
      ],
      impact: "Enhanced understanding of surgical interventions for benign tumors",
      isVisible: true
    },
    {
      id: 2,
      title: "A prospective study of the outcome of traumatic Dorsolumbar fractures treated with posterior stabilization by pedicle screw fixation-A case study",
      journal: "Medical Research Publication",
      publishedDate: "Sept 2024",
      type: "research" as const,
      description: "A study to evaluate outcomes of dorsolumbar fractures treated with posterior pedicle screw fixation.",
      contributions: [
        "A study to evaluate outcomes of dorsolumbar fractures treated with posterior pedicle screw fixation",
        "Key findings include significant improvement in kyphotic angle, vertebral height, and functional outcomes",
        "Concluded that posterior pedicle screw fixation effectively improves alignment, height restoration, and neurological recovery in dorsolumbar fractures"
      ],
      impact: "Contributed to improved surgical techniques for spinal trauma management",
      isVisible: true
    }
  ],

  // Certifications from resume
  certifications: [
    {
      id: 1,
      title: "Understanding Clinical Research: Behind the Statistics",
      issuer: "Medical Research Institute",
      completedDate: "Oct 2022",
      description: "Comprehensive training in clinical research methodologies and statistical analysis",
      category: "research" as const,
      isVisible: true
    },
    {
      id: 2,
      title: "Covid-19 training for Healthcare Workers",
      issuer: "Healthcare Training Authority",
      completedDate: "July 2021",
      description: "Pandemic response protocols and safety measures for healthcare professionals",
      category: "medical" as const,
      isVisible: true
    }
  ]
};

export type PortfolioData = typeof portfolioData; 