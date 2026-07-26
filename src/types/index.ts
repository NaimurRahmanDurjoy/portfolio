export interface Profile {
  id: string;
  name: string;
  title: string;
  headline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
  resumeUrl: string;
  availability: boolean;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: {
    start: string;
    end: string | "Present";
  };
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  metrics: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  type: "Personal" | "Company" | "Client";
  category: string;
  description: string;
  problemStatement?: string;
  solution?: string;
  thumbnail: string;
  gallery: string[];
  technologies: string[];
  features: string[];
  challenges: string[];
  architecture?: string;
  databaseDesign?: string;
  deployment?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  id: string;
  category: string;
  items: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  grade?: string;
  description?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  category: string;
  publishedDate: string;
  readingTime: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
  logo?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  openGraphImage: string;
  canonicalUrl: string;
}

export interface ClientService {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}
