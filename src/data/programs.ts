export interface ProgramModule {
  week: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface Program {
  slug: string;
  title: string;
  badge?: string;
  track: 'Engineering' | 'Design' | 'Cloud & AI' | 'Special Initiative';
  level: 'Beginner to Intermediate' | 'Intermediate to Advanced' | 'All Experience Levels';
  duration: string;
  format: string;
  nextCohort: string;
  seatsLeft: number;
  tuition: string;
  tuitionSubtext: string;
  scholarshipAvailable: boolean;
  shortDescription: string;
  overview: string;
  outcomes: string[];
  keyFeatures: string[];
  curriculum: ProgramModule[];
  starterKitIncluded: boolean;
  mentors: string[]; // mentor ids
}

export const PROGRAMS: Program[] = [
  {
    slug: 'scholarship',
    title: 'The Nestora Impact Fellowship',
    badge: '100% Fully Funded',
    track: 'Special Initiative',
    level: 'All Experience Levels',
    duration: '6 Weeks Intensive',
    format: 'Remote (Live sessions + Asynchronous sprints)',
    nextCohort: 'November 10, 2026',
    seatsLeft: 35,
    tuition: '$0 (Fully Funded)',
    tuitionSubtext: 'Sponsored by global venture partners & Nestora Foundation',
    scholarshipAvailable: true,
    starterKitIncluded: true,
    shortDescription: 'A fully funded 6-week remote accelerator designed for resilient African talent to master high-demand engineering and design skills, complete with 1:1 mentorship and physical hardware kits.',
    overview: 'The Nestora Impact Fellowship is not a casual online course. It is an intensive, hyper-selective crucible designed to bridge the opportunity divide. We identify high-potential African builders and equip them with international-standard technical mastery, direct mentorship from senior global engineers, and the physical infrastructure required to work reliably without power or connectivity hurdles.',
    outcomes: [
      'Build and deploy 2 production-grade applications evaluated by senior staff engineers at tier-1 tech firms.',
      'Receive a fully equipped Nestora Remote Starter Kit delivered to your address before Week 1.',
      'Master remote async communication, international code review etiquette, and architectural documentation.',
      'Direct fast-track interviews with hiring partners across Europe, North America, and top African unicorns.',
    ],
    keyFeatures: [
      '100% tuition coverage for all admitted fellows',
      'Physical starter kit: refurbished dev laptop, noise-canceling headset, high-speed backup data stipend',
      'Dedicated senior industry mentor for weekly 1:1 architecture reviews',
      'Lifetime alumni access to global remote job board and talent pool',
    ],
    curriculum: [
      {
        week: 'Weeks 1–2',
        title: 'Foundations of Global Product Delivery',
        description: 'Modern TypeScript architectures, automated testing pipelines, and standard git workflow for distributed teams.',
        deliverable: 'Ship an end-to-end resilient micro-service with CI/CD and comprehensive test coverage.',
      },
      {
        week: 'Weeks 3–4',
        title: 'High-Throughput Systems & Edge Computing',
        description: 'State synchronization, distributed databases, caching tiers, and low-latency edge functions.',
        deliverable: 'Architect a real-time collaborative application with optimistic UI updates.',
      },
      {
        week: 'Weeks 5–6',
        title: 'Capstone Production Sprint & Interview Readiness',
        description: 'Complete capstone project under mentor review, live portfolio teardowns, and mock technical whiteboard interviews.',
        deliverable: 'Live public capstone presentation to partner engineering managers and hiring panels.',
      },
    ],
    mentors: ['kemi-adebayo', 'chidi-nwosu', 'aisha-bello'],
  },
  {
    slug: 'fullstack-engineering',
    title: 'Full-Stack Software Engineering',
    track: 'Engineering',
    level: 'Intermediate to Advanced',
    duration: '16 Weeks',
    format: 'Hybrid Remote · 15 hrs/week',
    nextCohort: 'November 24, 2026',
    seatsLeft: 18,
    tuition: '$1,200',
    tuitionSubtext: 'Flexible 4-month installment plan ($300/mo) or income share agreement',
    scholarshipAvailable: true,
    starterKitIncluded: true,
    shortDescription: 'Master production TypeScript, Node.js, distributed databases, and cloud deployment. Graduate as an autonomous engineer capable of shipping at global startup velocity.',
    overview: 'Designed for ambitious developers ready to leap from tutorial-hell to production engineering. You will build enterprise-grade web applications, learn system design patterns that scale to millions of users, and develop the instincts required to pass rigorous global technical screens.',
    outcomes: [
      'Architect robust full-stack applications with TypeScript, React, Node.js, and PostgreSQL.',
      'Deploy containerized workloads to AWS and Cloudflare Edge with automated CI/CD.',
      'Understand concurrency, indexing, query optimization, and distributed caching.',
      'Graduate with a verified portfolio of 3 enterprise-grade systems deployed live.',
    ],
    keyFeatures: [
      'Weekly live code review by senior engineers at Moniepoint, Stripe, and Paystack',
      'Curriculum updated monthly based on global hiring team requirements',
      'Includes Nestora Developer Hardware Bundle option',
      'Dedicated career mentor for salary negotiation and international contracts',
    ],
    curriculum: [
      {
        week: 'Module 1 (Weeks 1–4)',
        title: 'Advanced React, TypeScript & State Machines',
        description: 'Deep dive into rendering lifecycles, memory profiling, headless UI components, and accessible design systems.',
        deliverable: 'Build a complex enterprise data grid with virtualized scrolling and keyboard navigation.',
      },
      {
        week: 'Module 2 (Weeks 5–8)',
        title: 'Scalable Backend Services & API Architecture',
        description: 'REST, GraphQL, and event-driven architectures with Express, Fastify, and PostgreSQL. Connection pooling and transaction isolation.',
        deliverable: 'High-concurrency billing and ledger service with idempotent payment processing.',
      },
      {
        week: 'Module 3 (Weeks 9–12)',
        title: 'Distributed Systems & Cloud Infrastructure',
        description: 'Docker containers, Redis caching, message queues (RabbitMQ/Kafka), and automated infrastructure deployment.',
        deliverable: 'Distributed task processing queue with retry mechanisms and dead-letter handling.',
      },
      {
        week: 'Module 4 (Weeks 13–16)',
        title: 'Capstone, System Design & Career Launch',
        description: 'Full team-based product development sprint following agile ceremonies, followed by technical interview prep.',
        deliverable: 'Complete production capstone deployed to custom domain with monitoring telemetry.',
      },
    ],
    mentors: ['chidi-nwosu', 'david-okonkwo', 'kemi-adebayo'],
  },
  {
    slug: 'product-design-systems',
    title: 'Product Design & Design Systems',
    track: 'Design',
    level: 'Beginner to Intermediate',
    duration: '12 Weeks',
    format: 'Remote · 12 hrs/week',
    nextCohort: 'December 1, 2026',
    seatsLeft: 12,
    tuition: '$950',
    tuitionSubtext: '3 installments of $325 or partial scholarship upon qualification',
    scholarshipAvailable: true,
    starterKitIncluded: true,
    shortDescription: 'Go beyond visual styling. Master design tokens, multi-brand Figma libraries, user research methodologies, and seamless developer handoff.',
    overview: 'Modern high-paying remote design roles demand deep product thinking and technical fluency. This program teaches you to craft scalable design systems, analyze real user telemetry, and design user-centered products that drive measurable business outcomes.',
    outcomes: [
      'Build scalable, accessible component libraries and design tokens in Figma.',
      'Conduct rigorous usability studies and synthesize qualitative insights.',
      'Collaborate fluently with frontend teams using tokens, git-backed specs, and Storybook.',
      'Create 2 comprehensive case studies showcasing measurable metric improvement.',
    ],
    keyFeatures: [
      'Portfolio teardown sessions with design directors from fintech and healthtech',
      'Access to premium Figma plugins and enterprise design kits',
      'Includes high-end mechanical stylus and design sprint starter pack',
      'Career coaching focused on US and European remote design agencies',
    ],
    curriculum: [
      {
        week: 'Module 1 (Weeks 1–3)',
        title: 'Foundations of Systematic Visual Design',
        description: 'Mathematical spacing grids, typographic scales, accessible color contrast (WCAG AAA), and auto-layout mastery.',
        deliverable: 'Complete multi-device responsive design foundation document.',
      },
      {
        week: 'Module 2 (Weeks 4–6)',
        title: 'Enterprise Design Systems & Component Architecture',
        description: 'Variables, modes, atomic structure, documentation standards, and multi-brand token management.',
        deliverable: 'Fully tokenized design system ready for engineering handoff.',
      },
      {
        week: 'Module 3 (Weeks 7–9)',
        title: 'User Research, Prototyping & Usability Testing',
        description: 'High-fidelity interactive prototyping, usability test scripts, cognitive walkthroughs, and quantitative metrics.',
        deliverable: 'Usability study report with clickable interactive prototype.',
      },
      {
        week: 'Module 4 (Weeks 10–12)',
        title: 'Portfolio Architecture & Client Presentation',
        description: 'Writing compelling product case studies that hiring managers read. Storytelling and salary negotiation.',
        deliverable: 'Polished portfolio website ready for international recruiter review.',
      },
    ],
    mentors: ['aisha-bello', 'folake-adeyemi'],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud Architecture & DevOps Engineering',
    track: 'Cloud & AI',
    level: 'Intermediate to Advanced',
    duration: '14 Weeks',
    format: 'Remote · 14 hrs/week',
    nextCohort: 'November 17, 2026',
    seatsLeft: 10,
    tuition: '$1,350',
    tuitionSubtext: '4 installments of $350 or corporate sponsorship available',
    scholarshipAvailable: false,
    starterKitIncluded: true,
    shortDescription: 'Master Kubernetes, Terraform, AWS multi-region architectures, and zero-downtime CI/CD workflows for distributed cloud environments.',
    overview: 'Cloud engineers and DevOps specialists command some of the highest remote compensation packages globally. In this program, you will transition into an infrastructure engineer capable of managing production clusters, automating security policies, and optimizing cloud costs.',
    outcomes: [
      'Provision multi-tier infrastructure as code using Terraform and GitOps.',
      'Orchestrate microservices with Kubernetes, Helm, and Istio service mesh.',
      'Implement enterprise monitoring and alerting with Prometheus, Grafana, and OpenTelemetry.',
      'Obtain hands-on preparation for AWS Certified Solutions Architect Associate.',
    ],
    keyFeatures: [
      '$500 dedicated AWS & GCP cloud credits for hands-on production labs',
      'Zero-downtime deployment labs simulating live production outages',
      'Physical starter kit with encrypted hardware security keys',
      'Direct pipeline to European and North American cloud consultancies',
    ],
    curriculum: [
      {
        week: 'Module 1 (Weeks 1–4)',
        title: 'Linux Systems, Networking & Containerization',
        description: 'Kernel tuning, systemd, TCP/IP debugging, multi-stage Docker builds, and minimal container images.',
        deliverable: 'Hardened container runtime with automated vulnerability scanning.',
      },
      {
        week: 'Module 2 (Weeks 5–8)',
        title: 'Kubernetes in Production & GitOps',
        description: 'Pods, Deployments, StatefulSets, Ingress controllers, and automated CD with ArgoCD.',
        deliverable: 'Production Kubernetes cluster running automated canary deployments.',
      },
      {
        week: 'Module 3 (Weeks 9–11)',
        title: 'Infrastructure as Code (Terraform) & Cloud Security',
        description: 'Terraform modules, state locking with S3/DynamoDB, IAM least-privilege, and secrets management.',
        deliverable: 'Fully codified multi-environment AWS infrastructure pipeline.',
      },
      {
        week: 'Module 4 (Weeks 12–14)',
        title: 'Observability, Disaster Recovery & Incident Management',
        description: 'Distributed tracing, metrics aggregation, SLO/SLA tracking, and chaos engineering drills.',
        deliverable: 'Comprehensive observability dashboard and chaos recovery post-mortem document.',
      },
    ],
    mentors: ['david-okonkwo', 'tunde-bakare'],
  },
  {
    slug: 'ai-data-engineering',
    title: 'Applied AI & Modern Data Engineering',
    track: 'Cloud & AI',
    level: 'Intermediate to Advanced',
    duration: '14 Weeks',
    format: 'Remote · 14 hrs/week',
    nextCohort: 'December 8, 2026',
    seatsLeft: 14,
    tuition: '$1,300',
    tuitionSubtext: '4 installments of $335 or corporate reimbursement',
    scholarshipAvailable: true,
    starterKitIncluded: true,
    shortDescription: 'Build scalable data pipelines with DuckDB, dbt, Apache Airflow, and operationalize LLM systems using vector databases and RAG.',
    overview: 'Bridge traditional data warehousing with the new frontier of production AI engineering. You will learn to extract, transform, and model massive datasets while deploying production-ready retrieval-augmented generation systems.',
    outcomes: [
      'Design modern data stacks using Python, SQL, dbt, Snowflake/BigQuery.',
      'Deploy production LLM architectures with semantic search, embeddings, and vector stores.',
      'Orchestrate complex DAG workflows with Airflow and automated data validation.',
      'Build end-to-end production AI applications evaluated on latency and accuracy.',
    ],
    keyFeatures: [
      'GPU cloud compute stipends for deep learning and vector index training',
      'Real-world fintech transaction datasets for hands-on anomaly detection',
      'Mentorship from AI research engineers and lead data architects',
      'Portfolio reviewed by US-based AI engineering leaders',
    ],
    curriculum: [
      {
        week: 'Module 1 (Weeks 1–3)',
        title: 'Data Modeling, SQL Optimization & Warehousing',
        description: 'Analytical SQL, window functions, dimensional modeling, and modern columnar databases.',
        deliverable: 'Analytical data mart built with dbt and automated testing schemas.',
      },
      {
        week: 'Module 2 (Weeks 4–7)',
        title: 'Data Pipelines & Workflow Orchestration',
        description: 'Streaming and batch processing with Python, Pandas, Polars, and Apache Airflow.',
        deliverable: 'End-to-end resilient ETL pipeline processing live market feeds.',
      },
      {
        week: 'Module 3 (Weeks 8–11)',
        title: 'Vector Databases, Embeddings & Production RAG',
        description: 'Chunking strategies, hybrid search, Pinecone/Qdrant, and evaluation frameworks for LLMs.',
        deliverable: 'Domain-specific enterprise document assistant with grounded citations.',
      },
      {
        week: 'Module 4 (Weeks 12–14)',
        title: 'Model Serving, Monitoring & Career Launch',
        description: 'FastAPI microservices, rate-limiting, semantic caching, and international technical interviews.',
        deliverable: 'Production AI microservice deployed with automated monitoring and benchmark logs.',
      },
    ],
    mentors: ['folake-adeyemi', 'chidi-nwosu'],
  },
];
