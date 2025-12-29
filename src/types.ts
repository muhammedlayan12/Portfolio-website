
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  icon: string;
  level: number; // 0-100 proficiency
}
