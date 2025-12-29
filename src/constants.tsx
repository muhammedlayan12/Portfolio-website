
import { Project, ExperienceItem, EducationItem, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Agentic AI Research Hub',
    description: 'A platform built with LangGraph and Next.js for orchestrating multi-agent workflows in enterprise environments.',
    tech: ['Python', 'LangChain', 'Next.js', 'PostgreSQL'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Web3 Marketplace Protocol',
    description: 'Developing a decentralized commerce layer using Solidity smart contracts for secure asset exchange.',
    tech: ['Solidity', 'React', 'Ethers.js', 'Hardhat'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Enterprise MERN Dashboard',
    description: 'Highly scalable administrative system with real-time analytics and role-based access control.',
    tech: ['MongoDB', 'Express', 'React', 'Node'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bbdac8626ad1?q=80&w=2070&auto=format&fit=crop'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp1',
    company: 'DotClick',
    role: 'MERN Stack Developer',
    period: '2024 - Present',
    description: [
      'Architecting high-performance web architectures using the MERN stack.',
      'Optimizing database performance and implementing secure authentication layers.',
      'Integrating AI features into existing web applications.'
    ]
  },
  {
    id: 'exp2',
    company: 'CodeAlpha',
    role: 'Full Stack Intern (Remote)',
    period: '2024 (Summer)',
    description: [
      'Collaborated on full-cycle development of web applications.',
      'Refined frontend experiences with modern CSS frameworks.',
      'Participated in code reviews and agile sprint cycles.'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu1',
    institution: 'Allama Iqbal College',
    degree: 'Intermediate in Computer Science',
    period: '2024 - Present',
    description: 'Currently pursuing advanced studies with a focus on algorithms and mathematical modeling.'
  },
  {
    id: 'edu2',
    institution: 'Kemal Atatürk School',
    degree: 'Matriculation (CS)',
    period: '2020 - 2024',
    description: 'Completed secondary education with high honors in Science and Information Technology.'
  }
];

export const SKILLS = [
  { name: "React / Next.js", level: 95, category: "Frontend", icon: "MonitorCheck" },
  { name: "TypeScript", level: 92, category: "Languages", icon: "Code2" },
  { name: "Node / Express", level: 90, category: "Backend", icon: "Server" },
  { name: "Python", level: 88, category: "AI & Scripting", icon: "Terminal" },
  { name: "Generative AI", level: 85, category: "Intelligence", icon: "BrainCircuit" },
  { name: "LangChain", level: 82, category: "AI Framework", icon: "Cpu" },
  { name: "MongoDB", level: 88, category: "Database", icon: "Database" },
  { name: "PostgreSQL", level: 85, category: "Database", icon: "Layers" },
  { name: "Solidity / Web3", level: 80, category: "Blockchain", icon: "Blocks" },
  { name: "Blockchain Dev", level: 78, category: "Decentralized", icon: "ShieldCheck" },
];