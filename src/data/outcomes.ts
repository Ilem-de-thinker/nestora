export interface AlumniStory {
  id: string;
  name: string;
  previousRole: string;
  newRole: string;
  company: string;
  companyType: 'US Remote Tech' | 'European Startup' | 'African Unicorn' | 'UK Enterprise';
  programTaken: string;
  salaryIncrease: string;
  location: string;
  timeToHire: string;
  quote: string;
  skillsAcquired: string[];
}

export interface MetricHighlight {
  label: string;
  value: string;
  subtext: string;
}

export const OUTCOME_METRICS: MetricHighlight[] = [
  {
    label: 'Remote Placement Rate',
    value: '88.4%',
    subtext: 'Graduates hired into remote roles within 180 days of completion',
  },
  {
    label: 'Average Salary Uplift',
    value: '3.6×',
    subtext: 'Mean pre-program to post-program annual earnings multiplier',
  },
  {
    label: 'Countries With Nestora Alumni',
    value: '22',
    subtext: 'Working for companies across North America, UK, Europe, and Africa',
  },
  {
    label: 'Starter Kits Distributed',
    value: '420+',
    subtext: 'Refurbished high-spec dev laptops and remote power setups delivered',
  },
];

export const HIRING_PARTNERS = [
  { name: 'Moniepoint', sector: 'FinTech Unicorn' },
  { name: 'Paystack', sector: 'Digital Payments' },
  { name: 'Automattic', sector: 'Global 100% Distributed' },
  { name: 'Andela', sector: 'Global Talent Network' },
  { name: 'Piggyvest', sector: 'Consumer FinTech' },
  { name: 'Turing', sector: 'Global Remote Cloud' },
  { name: 'Flutterwave', sector: 'Cross-Border Payments' },
  { name: 'Shopify Partners', sector: 'E-Commerce Infrastructure' },
];

export const ALUMNI_STORIES: AlumniStory[] = [
  {
    id: 'emmanuel-ogundele',
    name: 'Emmanuel Ogundele',
    previousRole: 'University Graduate / Freelance WordPress',
    newRole: 'Full-Stack Software Engineer',
    company: 'FinFlow Global (US Distributed)',
    companyType: 'US Remote Tech',
    programTaken: 'The Nestora Impact Fellowship',
    salaryIncrease: '+320%',
    location: 'Ibadan, Nigeria',
    timeToHire: '42 Days',
    quote: 'Before Nestora, I knew how to write simple scripts, but I had zero concept of production git workflows or architectural resilience. The mentor review sessions completely re-calibrated my standards. I am now shipping features to over 50,000 daily active users from my home office.',
    skillsAcquired: ['TypeScript', 'PostgreSQL', 'Microservices', 'Asynchronous Collaboration'],
  },
  {
    id: 'zainab-ibrahim',
    name: 'Zainab Ibrahim',
    previousRole: 'Junior Graphic Designer ($350/mo)',
    newRole: 'Senior Design Systems Lead',
    company: 'Krea Health (Berlin / Remote)',
    companyType: 'European Startup',
    programTaken: 'Product Design & Design Systems',
    salaryIncrease: '+410%',
    location: 'Kaduna, Nigeria',
    timeToHire: '60 Days',
    quote: 'The design systems track at Nestora taught me the math behind tokens and how to talk to developers in their own language. When my European team interviewed me, they were astonished by my Figma auto-layout and documentation rigor. It completely altered my life trajectory.',
    skillsAcquired: ['Figma Variables', 'Design Tokens', 'Design Ops', 'WCAG AAA Standards'],
  },
  {
    id: 'babatunde-adeleke',
    name: 'Babatunde Adeleke',
    previousRole: 'IT Helpdesk Support Specialist',
    newRole: 'Cloud DevOps Associate',
    company: 'Apex Cloud Solutions (UK Remote)',
    companyType: 'UK Enterprise',
    programTaken: 'Cloud Architecture & DevOps Engineering',
    salaryIncrease: '+290%',
    location: 'Lagos, Nigeria',
    timeToHire: '38 Days',
    quote: 'The hardware starter kit from Nestora gave me a reliable machine that did not overheat during Terraform runs. Combine that with weekly mock architecture interviews with David, and I was calm and composed during all 4 rounds of my international technical interview.',
    skillsAcquired: ['Terraform', 'Kubernetes', 'AWS VPC', 'Prometheus & Grafana'],
  },
  {
    id: 'mary-ochieng',
    name: 'Mary Ochieng',
    previousRole: 'Data Entry Analyst',
    newRole: 'Analytics Engineer & AI Operations',
    company: 'Veloce Logistics (Nairobi / London)',
    companyType: 'European Startup',
    programTaken: 'Applied AI & Modern Data Engineering',
    salaryIncrease: '+340%',
    location: 'Nairobi, Kenya',
    timeToHire: '55 Days',
    quote: 'Nestora cut through the buzzwords and taught me how real data pipelines operate under load with dbt, Airflow, and vector search. I was able to demonstrate a live end-to-end RAG system during my hiring portfolio walkthrough.',
    skillsAcquired: ['dbt', 'DuckDB', 'Python', 'Vector DBs (Qdrant)', 'Airflow'],
  },
];
