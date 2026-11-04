export interface HeroData {
  greeting: string;
  title: string;
  subtitle: string;
  description: string;
  workLocation: string;
  workTimeZone: string;
  cta: { button1: string; button2: string }[];
  photo: string;
}

export interface CareerItem {
  title: string;
  year: string;
  place: string[];
  description: string;
  skills: string[];
}

export interface CareerData {
  title: string;
  subtitle: string;
  generalSkills: CareerItem[];
  deepSkills: CareerItem[];
}

export interface ContactData {
  title: string;
  description: string;
  link: { email: string; linkedin: string; github: string }[];
}

export interface EducationItem {
  title: string;
  institution: string;
  year: string;
  description: string | string[];
  skills: string[];
}

export interface EducationData {
  title: string;
  subtitle: string;
  journey: EducationItem[];
}

export interface ProjectItem {
  title: string;
  status: string;
  role: string;
  description: string;
  stack: string[];
  see?: string;
  seeFigma?: string;
}

export interface ProjectsData {
  title: string;
  subtitle: string;
  listOfProjects: ProjectItem[];
}

export interface TechData {
  title: string;
  subtitle: string;
}

export interface SkillsData {
  frontend: { name: string }[];
  backend: { name: string} [];
  tools: { name: string }[];
}

export interface WhatIDoCategory {
  id: string;
  title: string;
  points: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
  year: string;
  pdfLink: string;
}

export interface WhatIDoData {
  title: string;
  categories: WhatIDoCategory[];
  certificates: CertificateItem[];
}

export interface ValueData {
  title: string;
  description: string[];
}