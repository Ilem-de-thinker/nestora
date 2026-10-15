export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  bio: string;
  expertise: string[];
  track: string;
  experienceYears: number;
  alumniMentored: number;
  officeHours: string;
  quote: string;
  initials: string;
}

export const MENTORS: Mentor[] = [
  {
    id: 'kemi-adebayo',
    name: 'Kemi Adebayo',
    role: 'Staff Frontend Engineer',
    company: 'Moniepoint',
    location: 'Lagos & Remote',
    bio: 'Kemi has spent 9+ years scaling mission-critical web applications for over 10 million active African banking customers. She focuses on frontend runtime architecture, design token synchronization, and mentorship for engineers transitioning to global distributed roles.',
    expertise: ['React 19 & TypeScript', 'Micro-frontends', 'Web Performance Optimization', 'International Career Transition'],
    track: 'Full-Stack Software Engineering',
    experienceYears: 9,
    alumniMentored: 74,
    officeHours: 'Tuesdays & Thursdays, 6:00 PM – 8:00 PM WAT',
    quote: 'African talent does not need sympathy; it needs high-standard technical rigor and direct exposure to global engineering expectations.',
    initials: 'KA',
  },
  {
    id: 'chidi-nwosu',
    name: 'Chidi Nwosu',
    role: 'Principal Software Architect',
    company: 'Ex-Andela & FinTech Global',
    location: 'Nairobi & Remote (Berlin time)',
    bio: 'Chidi is a seasoned systems architect who has designed core transaction ledgers and distributed services processing hundreds of millions in volume. A vocal advocate for African engineering excellence, he mentors fellows on high-throughput backend architecture and system design interviews.',
    expertise: ['Distributed Systems', 'PostgreSQL & Database Internals', 'Golang & Node.js', 'System Design Interviews'],
    track: 'Full-Stack & Special Initiative',
    experienceYears: 12,
    alumniMentored: 110,
    officeHours: 'Mondays & Wednesdays, 7:00 PM – 9:00 PM EAT',
    quote: 'When you understand database locks and asynchronous queues at first principles, no technical interview in London or San Francisco can intimidate you.',
    initials: 'CN',
  },
  {
    id: 'aisha-bello',
    name: 'Aisha Bello',
    role: 'Lead Product Designer',
    company: 'Paystack / Stripe Partner Network',
    location: 'Lagos / Remote',
    bio: 'Aisha specializes in multi-brand design systems, token architecture, and complex user flows for enterprise B2B software. She has guided dozens of self-taught designers into senior roles at international remote startups.',
    expertise: ['Figma Variables & Tokens', 'Design System Governance', 'UX Research & Usability Testing', 'Product Storytelling'],
    track: 'Product Design & Design Systems',
    experienceYears: 8,
    alumniMentored: 65,
    officeHours: 'Wednesdays & Saturdays, 4:00 PM – 6:00 PM WAT',
    quote: 'Great product design is not about trendy aesthetics; it is about reducing cognitive strain and delivering unmistakable value to users.',
    initials: 'AB',
  },
  {
    id: 'david-okonkwo',
    name: 'David Okonkwo',
    role: 'Staff Infrastructure Architect',
    company: 'Cloud Native Global Consult',
    location: 'London & Remote (GMT)',
    bio: 'David leads cloud migrations and Kubernetes modernization for Fortune 500 enterprises. He teaches fellows how to automate multi-region cloud environments with Terraform and build resilient disaster recovery setups.',
    expertise: ['Kubernetes & Docker', 'Terraform & CloudFormation', 'AWS Multi-Region Networking', 'Site Reliability Engineering'],
    track: 'Cloud Architecture & DevOps',
    experienceYears: 11,
    alumniMentored: 82,
    officeHours: 'Fridays, 5:00 PM – 8:00 PM GMT',
    quote: 'Cloud automation gives an engineer leverage. A team of three can orchestrate infrastructure that once required an entire data center department.',
    initials: 'DO',
  },
  {
    id: 'folake-adeyemi',
    name: 'Dr. Folake Adeyemi',
    role: 'Senior Applied AI Researcher',
    company: 'Autonomous Systems & Deep Tech',
    location: 'Abuja & Remote',
    bio: 'Folake holds a PhD in computer science and works on retrieval-augmented generation, synthetic data generation, and enterprise LLM alignment. She guides learners in cutting through AI marketing noise to build durable software.',
    expertise: ['Vector Embeddings & RAG', 'Python & PyTorch', 'Model Evaluation & Benchmarking', 'Data Engineering Pipelines'],
    track: 'Applied AI & Modern Data',
    experienceYears: 7,
    alumniMentored: 48,
    officeHours: 'Thursdays & Sundays, 5:00 PM – 7:00 PM WAT',
    quote: 'AI will not replace great engineers; engineers who build reliable AI systems with deep domain grounding will lead the next decade.',
    initials: 'FA',
  },
  {
    id: 'tunde-bakare',
    name: 'Tunde Bakare',
    role: 'Head of Engineering',
    company: 'Venture-Backed Remote Studio',
    location: 'Kigali & Remote',
    bio: 'Tunde has managed high-performing distributed engineering squads spanning 14 countries. He teaches engineering leadership, async team culture, and effective written technical communication.',
    expertise: ['Async Engineering Culture', 'Engineering Leadership', 'Agile & Sprint Velocity', 'Technical Writing'],
    track: 'Career & Engineering Leadership',
    experienceYears: 14,
    alumniMentored: 95,
    officeHours: 'Tuesdays, 6:00 PM – 8:00 PM CAT',
    quote: 'The single highest-leverage skill in remote work is clear, empathetic, and asynchronous written technical communication.',
    initials: 'TB',
  },
];
