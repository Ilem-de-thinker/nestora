export interface CourseLesson {
  title: string;
  duration: string;
  summary: string;
}

export interface Course {
  slug: string;
  title: string;
  category: 'Frontend' | 'Backend' | 'Design Systems' | 'Cloud & DevOps' | 'AI & Data';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  weeklyEffort: string;
  price: string;
  rating: number;
  studentsCount: number;
  instructor: string;
  instructorRole: string;
  shortDescription: string;
  description: string;
  skills: string[];
  prerequisites: string[];
  projectsBuilt: string[];
  syllabus: {
    sectionTitle: string;
    lessons: CourseLesson[];
  }[];
}

export const COURSES: Course[] = [
  {
    slug: 'react-typescript-architecture',
    title: 'Enterprise React & TypeScript Architecture',
    category: 'Frontend',
    level: 'Intermediate',
    duration: '6 Weeks',
    weeklyEffort: '6–8 hrs/week',
    price: '$280',
    rating: 4.95,
    studentsCount: 420,
    instructor: 'Kemi Adebayo',
    instructorRole: 'Staff Frontend Engineer at Moniepoint',
    shortDescription: 'Master modern React 19, strict TypeScript patterns, state machines, virtualization, and testing strategies for scalable client applications.',
    description: 'Stop building toy apps. This course equips you to write maintainable, performant frontend code that passes scrutiny at leading global tech firms. You will explore low-level rendering optimizations, architectural design patterns, headless UI components, and accessible design system implementations.',
    skills: ['React 19', 'TypeScript', 'XState', 'TanStack Query', 'Tailwind CSS', 'Vitest'],
    prerequisites: ['Basic JavaScript (ES6+)', 'HTML & CSS fundamentals', 'Basic familiarity with React components'],
    projectsBuilt: [
      'High-performance virtualized stock ticker with real-time WebSocket feeds',
      'Multi-tenant dashboard with dynamic role-based access control (RBAC)',
      'Custom accessible design component library with automated unit tests',
    ],
    syllabus: [
      {
        sectionTitle: 'Module 1: Strict TypeScript for Modern Web',
        lessons: [
          { title: 'Generics, Discriminated Unions & Utility Types', duration: '45 mins', summary: 'Typing polymorphic props, API response unwrappers, and eliminating runtime bugs.' },
          { title: 'Type-Safe Data Fetching with TanStack Query', duration: '60 mins', summary: 'Optimistic updates, infinite queries, cache invalidation strategies.' },
        ],
      },
      {
        sectionTitle: 'Module 2: Advanced React Patterns & Profiling',
        lessons: [
          { title: 'React 19 Server Actions & Suspense Lifecycles', duration: '55 mins', summary: 'Transition hooks, asynchronous boundaries, and preventing layout shifts.' },
          { title: 'Rendering Performance & Memory Leak Auditing', duration: '75 mins', summary: 'Using React DevTools Profiler, flame graphs, memoization boundaries.' },
        ],
      },
      {
        sectionTitle: 'Module 3: Production Testing & CI Pipelines',
        lessons: [
          { title: 'Vitest, React Testing Library & MSW Mocking', duration: '60 mins', summary: 'Writing user-centric integration tests that do not break during refactors.' },
          { title: 'Automated GitHub Actions CI & Bundle Analysis', duration: '50 mins', summary: 'Linting, type-checking, and bundle size budget enforcement.' },
        ],
      },
    ],
  },
  {
    slug: 'figma-tokens-design-systems',
    title: 'Scalable Figma Tokens & Multi-Brand Systems',
    category: 'Design Systems',
    level: 'Intermediate',
    duration: '4 Weeks',
    weeklyEffort: '5 hrs/week',
    price: '$240',
    rating: 4.92,
    studentsCount: 380,
    instructor: 'Aisha Bello',
    instructorRole: 'Lead Product Designer at Paystack',
    shortDescription: 'Build enterprise-grade design systems with Figma variables, token taxonomy, responsive components, and developer handoff workflows.',
    description: 'Learn how modern global product teams organize and scale design systems. You will construct a complete design token architecture spanning light/dark modes, multi-brand themes, and accessible color scales with automated contrast verification.',
    skills: ['Figma Variables', 'Design Tokens', 'Auto-Layout 5.0', 'WCAG AAA Accessibility', 'Style Dictionary'],
    prerequisites: ['Proficiency with basic Figma tools', 'Basic understanding of UI typography and layout'],
    projectsBuilt: [
      'Multi-theme banking app UI system with light/dark/high-contrast modes',
      'Production token documentation file synchronized with GitHub repository',
      'Accessible form and data visualization component library',
    ],
    syllabus: [
      {
        sectionTitle: 'Module 1: Token Architecture & Semantic Naming',
        lessons: [
          { title: 'Global, Semantic & Component Token Hierarchies', duration: '45 mins', summary: 'Designing clear naming conventions that match engineering mental models.' },
          { title: 'Figma Variables, Modes & Color Math', duration: '60 mins', summary: 'Creating automated theme switching across brands and modes.' },
        ],
      },
      {
        sectionTitle: 'Module 2: Resilient Component Construction',
        lessons: [
          { title: 'Advanced Auto-Layout & Slot Component Patterns', duration: '55 mins', summary: 'Building flexible components that adapt to any screen width.' },
          { title: 'Accessibility Auditing & Focus States', duration: '50 mins', summary: 'Ensuring color contrast ratios and keyboard navigation indicators pass WCAG AA.' },
        ],
      },
      {
        sectionTitle: 'Module 3: Developer Handoff & Governance',
        lessons: [
          { title: 'Exporting Tokens to Code with Style Dictionary', duration: '50 mins', summary: 'Translating Figma variables into CSS variables and Tailwind theme files.' },
          { title: 'Version Control & System Release Notes', duration: '40 mins', summary: 'Managing breaking changes and adoption across product squads.' },
        ],
      },
    ],
  },
  {
    slug: 'distributed-backend-nodejs',
    title: 'High-Concurrency Backends with Node.js & Postgres',
    category: 'Backend',
    level: 'Advanced',
    duration: '8 Weeks',
    weeklyEffort: '8 hrs/week',
    price: '$340',
    rating: 4.98,
    studentsCount: 310,
    instructor: 'Chidi Nwosu',
    instructorRole: 'Principal Engineer, Ex-Andela & Remote Fintech',
    shortDescription: 'Build resilient backends handling thousands of queries per second. Learn connection pooling, transaction isolation, and event-driven microservices.',
    description: 'A deep dive into server engineering for developers who want to understand the internals of PostgreSQL, Node event loop mechanics, rate limiters, distributed locks with Redis, and message queues.',
    skills: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Prisma / Drizzle', 'RabbitMQ'],
    prerequisites: ['Solid JavaScript/TypeScript knowledge', 'Basic SQL queries', 'Experience with building simple REST APIs'],
    projectsBuilt: [
      'Financial ledger with ACID compliant transactions and audit logs',
      'Rate-limited payment gateway webhook dispatcher',
      'High-throughput notification engine processing 50k queued messages',
    ],
    syllabus: [
      {
        sectionTitle: 'Module 1: PostgreSQL Internals & Performance',
        lessons: [
          { title: 'Indexing Strategies: B-Tree, GIN, Partial & Covering', duration: '60 mins', summary: 'Eliminating sequential scans on tables with millions of rows.' },
          { title: 'Transaction Isolation Levels & Concurrency Anomalies', duration: '65 mins', summary: 'Handling race conditions, dirty reads, and phantom writes.' },
        ],
      },
      {
        sectionTitle: 'Module 2: Event-Driven Architecture & Caching',
        lessons: [
          { title: 'Redis Cache-Aside, Write-Through & Distributed Locking', duration: '55 mins', summary: 'Redlock algorithms and cache stampede prevention.' },
          { title: 'Message Brokers with RabbitMQ & Dead-Letter Queues', duration: '70 mins', summary: 'Reliable message delivery with consumer acknowledgments.' },
        ],
      },
      {
        sectionTitle: 'Module 3: Hardening & Cloud Deployment',
        lessons: [
          { title: 'Observability with Prometheus Metrics & Structured Logs', duration: '50 mins', summary: 'Correlating request IDs across distributed services.' },
          { title: 'Zero-Downtime Blue-Green Deployments on Linux', duration: '60 mins', summary: 'Managing database schema migrations safely during deployments.' },
        ],
      },
    ],
  },
  {
    slug: 'cloud-native-kubernetes',
    title: 'Cloud-Native Kubernetes & AWS Infrastructure',
    category: 'Cloud & DevOps',
    level: 'Advanced',
    duration: '6 Weeks',
    weeklyEffort: '7 hrs/week',
    price: '$360',
    rating: 4.94,
    studentsCount: 220,
    instructor: 'David Okonkwo',
    instructorRole: 'Staff Infrastructure Architect, London / Remote',
    shortDescription: 'Master container orchestration, Terraform automation, Ingress controllers, and cloud disaster recovery from scratch to production.',
    description: 'Infrastructure engineering from the perspective of modern remote teams. Learn how to provision secure AWS VPC environments, configure auto-scaling Kubernetes clusters, and automate security hardening.',
    skills: ['Kubernetes', 'Terraform', 'AWS EKS', 'Helm', 'ArgoCD', 'Prometheus'],
    prerequisites: ['Linux terminal proficiency', 'Docker container basics', 'Basic networking understanding'],
    projectsBuilt: [
      'Multi-tier production EKS cluster with automated node scaling',
      'GitOps deployment pipeline with ArgoCD and Slack notifications',
      'Automated disaster failover scenario with simulated region outage',
    ],
    syllabus: [
      {
        sectionTitle: 'Module 1: Infrastructure as Code with Terraform',
        lessons: [
          { title: 'Modular VPCs, Security Groups & Remote State Locking', duration: '60 mins', summary: 'Structuring enterprise-grade Terraform repositories.' },
          { title: 'IAM Least-Privilege & Secrets Manager Integration', duration: '50 mins', summary: 'Securing cloud credentials without hardcoded values.' },
        ],
      },
      {
        sectionTitle: 'Module 2: Production Kubernetes Operations',
        lessons: [
          { title: 'Deployments, Services, ConfigMaps & Ingress Routing', duration: '65 mins', summary: 'Managing stateless and stateful applications in production.' },
          { title: 'Horizontal Pod Autoscaling & Cluster Overprovisioning', duration: '55 mins', summary: 'Cost-optimized scaling responding to traffic spikes.' },
        ],
      },
      {
        sectionTitle: 'Module 3: GitOps & Continuous Delivery',
        lessons: [
          { title: 'Declarative GitOps with ArgoCD', duration: '60 mins', summary: 'Self-healing deployments driven entirely by git commits.' },
          { title: 'Prometheus AlertManager & Incident Runbooks', duration: '50 mins', summary: 'Crafting actionable alerts and high-severity playbooks.' },
        ],
      },
    ],
  },
  {
    slug: 'applied-rag-llm-engineering',
    title: 'Applied RAG Systems & LLM Engineering',
    category: 'AI & Data',
    level: 'Intermediate',
    duration: '6 Weeks',
    weeklyEffort: '6 hrs/week',
    price: '$320',
    rating: 4.96,
    studentsCount: 290,
    instructor: 'Folake Adeyemi',
    instructorRole: 'Senior AI Engineer, Research Labs',
    shortDescription: 'Build reliable generative AI applications using Python, semantic search, vector embeddings, rerankers, and automated evaluation frameworks.',
    description: 'Move past superficial wrapper apps. Learn the technical mechanics of chunking strategies, hybrid search algorithms, query expansion, cross-encoder rerankers, and synthetic evaluation pipelines.',
    skills: ['Python', 'Vector DBs (Qdrant)', 'RAG Pipelines', 'LlamaIndex', 'LangChain', 'FastAPI'],
    prerequisites: ['Intermediate Python programming', 'Basic familiarity with REST APIs'],
    projectsBuilt: [
      'Grounded enterprise knowledge assistant with exact PDF source attribution',
      'Semantic code search engine for large open-source repositories',
      'Automated RAG benchmark test suite assessing faithfulness and hallucination',
    ],
    syllabus: [
      {
        sectionTitle: 'Module 1: Embeddings & Vector Search Foundations',
        lessons: [
          { title: 'Vector Geometry, Distance Metrics & Indexing (HNSW)', duration: '55 mins', summary: 'How embeddings work under the hood and choosing models.' },
          { title: 'Hybrid Search: Combining BM25 Keyword & Dense Vectors', duration: '60 mins', summary: 'Achieving high precision on specialized technical terms.' },
        ],
      },
      {
        sectionTitle: 'Module 2: Advanced Retrieval & Reranking',
        lessons: [
          { title: 'Recursive Chunking & Context-Enriched Metadata', duration: '50 mins', summary: 'Preserving document hierarchy and table representations.' },
          { title: 'Cross-Encoder Rerankers & Query Decomposition', duration: '65 mins', summary: 'Boosting recall and precision before final context ingestion.' },
        ],
      },
      {
        sectionTitle: 'Module 3: Evaluation & Production Serving',
        lessons: [
          { title: 'Ragas & Automated Groundedness Benchmarks', duration: '60 mins', summary: 'Continuous evaluation metrics in CI to detect regression.' },
          { title: 'FastAPI Streaming Endpoint with Semantic Caching', duration: '55 mins', summary: 'Sub-second first-token latency with Redis vector cache.' },
        ],
      },
    ],
  },
];
