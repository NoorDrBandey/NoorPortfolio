import { 
  users, type User, type InsertUser,
  publications, type Publication, type InsertPublication,
  certifications, type Certification, type InsertCertification,
  experiences, type Experience, type InsertExperience,
  contactMessages, type ContactMessage, type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Publication methods
  getPublications(): Promise<Publication[]>;
  getPublication(id: number): Promise<Publication | undefined>;
  createPublication(publication: InsertPublication): Promise<Publication>;
  updatePublication(id: number, publication: Partial<InsertPublication>): Promise<Publication | undefined>;
  deletePublication(id: number): Promise<boolean>;
  
  // Certification methods
  getCertifications(): Promise<Certification[]>;
  getCertification(id: number): Promise<Certification | undefined>;
  createCertification(certification: InsertCertification): Promise<Certification>;
  updateCertification(id: number, certification: Partial<InsertCertification>): Promise<Certification | undefined>;
  deleteCertification(id: number): Promise<boolean>;
  
  // Experience methods
  getExperiences(): Promise<Experience[]>;
  getExperience(id: number): Promise<Experience | undefined>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  updateExperience(id: number, experience: Partial<InsertExperience>): Promise<Experience | undefined>;
  deleteExperience(id: number): Promise<boolean>;
  
  // Contact message methods
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  markMessageAsRead(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private publications: Map<number, Publication>;
  private certifications: Map<number, Certification>;
  private experiences: Map<number, Experience>;
  private contactMessages: Map<number, ContactMessage>;
  private currentUserId: number;
  private currentPublicationId: number;
  private currentCertificationId: number;
  private currentExperienceId: number;
  private currentMessageId: number;

  constructor() {
    this.users = new Map();
    this.publications = new Map();
    this.certifications = new Map();
    this.experiences = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentPublicationId = 1;
    this.currentCertificationId = 1;
    this.currentExperienceId = 1;
    this.currentMessageId = 1;
    
    // Initialize with Dr. Noor's data
    this.initializeData();
  }

  private initializeData() {
    // Initialize publications
    const publication1: Publication = {
      id: this.currentPublicationId++,
      title: "Bilateral Giant subcostal lipoma-A case report",
      journal: "International Journal of Medical Sciences and Advanced Clinical Research",
      publishedDate: "December 2022",
      type: "case_study",
      description: "A comprehensive case report analyzing the clinical presentation and treatment of a rare giant lipoma case.",
      contributions: [
        "Collaborated with a multidisciplinary team to analyze and document the clinical presentation and treatment of a rare giant lipoma case",
        "Conducted a comprehensive review of literature to support the case findings and contribute to medical knowledge on lipoma treatment and recurrence prevention",
        "Published the research in the International Journal of Medical Sciences and Advanced Clinical Research, enhancing the understanding of surgical interventions for benign tumors"
      ],
      impact: "This case report contributes valuable insights to the medical community regarding rare presentations of giant lipomas and their surgical management.",
      isVisible: true
    };

    const publication2: Publication = {
      id: this.currentPublicationId++,
      title: "A prospective study of the outcome of traumatic Dorsolumbar fractures treated with posterior stabilization by pedicle screw fixation",
      journal: "Medical Journal - Case Study",
      publishedDate: "September 2024",
      type: "research",
      description: "A prospective study evaluating outcomes of dorsolumbar fractures treated with posterior pedicle screw fixation.",
      contributions: [
        "A study to evaluate outcomes of dorsolumbar fractures treated with posterior pedicle screw fixation",
        "Key findings include significant improvement in kyphotic angle, vertebral height, and functional outcomes",
        "Concluded that posterior pedicle screw fixation effectively improves alignment, height restoration, and neurological recovery in dorsolumbar fractures"
      ],
      impact: "This research provides evidence-based support for surgical approaches in spinal trauma management, contributing to improved patient outcomes.",
      isVisible: true
    };

    this.publications.set(publication1.id, publication1);
    this.publications.set(publication2.id, publication2);

    // Initialize certifications
    const cert1: Certification = {
      id: this.currentCertificationId++,
      title: "Understanding Clinical Research: Behind the Statistics",
      issuer: "Advanced Medical Research Training",
      completedDate: "October 2022",
      description: "Comprehensive training in clinical research methodologies and statistical analysis",
      category: "research",
      isVisible: true
    };

    const cert2: Certification = {
      id: this.currentCertificationId++,
      title: "COVID-19 Training for Healthcare Workers",
      issuer: "Healthcare Training Institute",
      completedDate: "July 2021",
      description: "Pandemic response and safety protocols for healthcare workers",
      category: "medical",
      isVisible: true
    };

    this.certifications.set(cert1.id, cert1);
    this.certifications.set(cert2.id, cert2);

    // Initialize experiences
    const exp1: Experience = {
      id: this.currentExperienceId++,
      title: "Junior Resident",
      organization: "Government Medical College & AH",
      location: "Rajouri, India",
      startDate: "September 2023",
      endDate: "September 2024",
      isCurrent: false,
      type: "professional",
      responsibilities: [
        "Efficiently manage patients in both the ICU and ward settings",
        "Regularly coordinate with multidisciplinary team, consult with senior colleagues to ensure optimal treatment plans and outcomes",
        "Conduct thorough patient assessments, perform complex procedures and interpret diagnostic tests"
      ],
      isVisible: true
    };

    const exp2: Experience = {
      id: this.currentExperienceId++,
      title: "Medical Intern",
      organization: "Acharya Shri Chander College of Medical Sciences and Hospital",
      location: "Jammu, India",
      startDate: "August 2022",
      endDate: "August 2023",
      isCurrent: false,
      type: "internship",
      responsibilities: [
        "Clinical skills and patient care which involved history taking and examination along with diagnostic and treatment planning",
        "Gain hands-on experience with essential procedure like IV catheterization, suturing and biopsies as well as understanding their roles in diagnosis and treatment",
        "Develop strong communication skills for better patient interaction and interdisciplinary approach for patient management"
      ],
      isVisible: true
    };

    const exp3: Experience = {
      id: this.currentExperienceId++,
      title: "Student Volunteer",
      organization: "Indian Red Cross Society (IRCS)",
      location: "Jammu, India",
      startDate: "May 2022",
      endDate: "August 2023",
      isCurrent: false,
      type: "volunteer",
      responsibilities: [
        "Assisted in organizing blood donation drives and health camps, contributing to community health initiatives",
        "Provided first aid and basic medical care during emergencies and events, enhancing public safety",
        "Engaged in health awareness campaigns, educating the public on topics like hygiene, vaccination, and disease prevention"
      ],
      isVisible: true
    };

    this.experiences.set(exp1.id, exp1);
    this.experiences.set(exp2.id, exp2);
    this.experiences.set(exp3.id, exp3);
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Publication methods
  async getPublications(): Promise<Publication[]> {
    return Array.from(this.publications.values()).filter(pub => pub.isVisible);
  }

  async getPublication(id: number): Promise<Publication | undefined> {
    return this.publications.get(id);
  }

  async createPublication(publication: InsertPublication): Promise<Publication> {
    const id = this.currentPublicationId++;
    const newPublication: Publication = { ...publication, id };
    this.publications.set(id, newPublication);
    return newPublication;
  }

  async updatePublication(id: number, publication: Partial<InsertPublication>): Promise<Publication | undefined> {
    const existing = this.publications.get(id);
    if (!existing) return undefined;
    
    const updated: Publication = { ...existing, ...publication };
    this.publications.set(id, updated);
    return updated;
  }

  async deletePublication(id: number): Promise<boolean> {
    return this.publications.delete(id);
  }

  // Certification methods
  async getCertifications(): Promise<Certification[]> {
    return Array.from(this.certifications.values()).filter(cert => cert.isVisible);
  }

  async getCertification(id: number): Promise<Certification | undefined> {
    return this.certifications.get(id);
  }

  async createCertification(certification: InsertCertification): Promise<Certification> {
    const id = this.currentCertificationId++;
    const newCertification: Certification = { ...certification, id };
    this.certifications.set(id, newCertification);
    return newCertification;
  }

  async updateCertification(id: number, certification: Partial<InsertCertification>): Promise<Certification | undefined> {
    const existing = this.certifications.get(id);
    if (!existing) return undefined;
    
    const updated: Certification = { ...existing, ...certification };
    this.certifications.set(id, updated);
    return updated;
  }

  async deleteCertification(id: number): Promise<boolean> {
    return this.certifications.delete(id);
  }

  // Experience methods
  async getExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values()).filter(exp => exp.isVisible);
  }

  async getExperience(id: number): Promise<Experience | undefined> {
    return this.experiences.get(id);
  }

  async createExperience(experience: InsertExperience): Promise<Experience> {
    const id = this.currentExperienceId++;
    const newExperience: Experience = { ...experience, id };
    this.experiences.set(id, newExperience);
    return newExperience;
  }

  async updateExperience(id: number, experience: Partial<InsertExperience>): Promise<Experience | undefined> {
    const existing = this.experiences.get(id);
    if (!existing) return undefined;
    
    const updated: Experience = { ...existing, ...experience };
    this.experiences.set(id, updated);
    return updated;
  }

  async deleteExperience(id: number): Promise<boolean> {
    return this.experiences.delete(id);
  }

  // Contact message methods
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const newMessage: ContactMessage = { 
      ...message, 
      id, 
      createdAt: new Date().toISOString(),
      isRead: false 
    };
    this.contactMessages.set(id, newMessage);
    return newMessage;
  }

  async markMessageAsRead(id: number): Promise<boolean> {
    const message = this.contactMessages.get(id);
    if (!message) return false;
    
    const updated: ContactMessage = { ...message, isRead: true };
    this.contactMessages.set(id, updated);
    return true;
  }
}

export const storage = new MemStorage();
