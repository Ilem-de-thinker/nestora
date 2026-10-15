export interface LiveSession {
  id: string;
  title: string;
  mentor: string;
  date: string;
  time: string;
  meetingUrl: string;
  status: 'upcoming' | 'live' | 'completed';
}

export interface Assignment {
  id: string;
  title: string;
  deadline: string;
  status: 'submitted' | 'pending' | 'graded';
  grade?: string;
  feedback?: string;
}

export interface StarterKitTracker {
  kitId: string;
  trackingNumber: string;
  carrier: string;
  destination: string;
  status: 'Delivered' | 'In Transit' | 'Processing';
  estimatedArrival: string;
  items: { name: string; serial: string; status: string }[];
  timeline: { step: string; date: string; completed: boolean }[];
}

export interface StudentDashboardData {
  user: {
    name: string;
    email: string;
    avatarInitials: string;
    studentId: string;
    cohort: string;
    programTitle: string;
    programSlug: string;
    track: string;
    overallProgress: number; // percentage
  };
  starterKit: StarterKitTracker;
  upcomingSessions: LiveSession[];
  assignments: Assignment[];
  resources: { title: string; category: string; format: string; size: string }[];
}

export const INITIAL_STUDENT_DASHBOARD: StudentDashboardData = {
  user: {
    name: 'Adebayo Ogunlesi',
    email: 'adebayo.ogunlesi@example.com',
    avatarInitials: 'AO',
    studentId: 'NST-2026-F892',
    cohort: 'Fellowship Cohort 04 · Autumn 2026',
    programTitle: 'The Nestora Impact Fellowship',
    programSlug: 'scholarship',
    track: 'Full-Stack Software Engineering',
    overallProgress: 68,
  },
  starterKit: {
    kitId: 'KIT-NST-4421',
    trackingNumber: 'GLS-NG-88910244',
    carrier: 'GIG Logistics Express Air',
    destination: 'Admiralty Way, Lekki Phase 1, Lagos, Nigeria',
    status: 'Delivered',
    estimatedArrival: 'Delivered Oct 12, 2026',
    items: [
      { name: 'ThinkPad T14s Dev Laptop (16GB RAM, 512GB NVMe)', serial: 'TP-9921-X', status: 'Verified & Deployed' },
      { name: 'Sony WH-1000XM4 Noise-Canceling Headset', serial: 'SNY-4029-A', status: 'Verified' },
      { name: 'Nestora Linen Bound Dev Journal & Brass Pen', serial: 'NST-PR-01', status: 'Delivered' },
      { name: 'LTE Cat-6 High-Speed Router + 120GB Data Voucher', serial: 'ZTE-8812', status: 'Activated' },
    ],
    timeline: [
      { step: 'Application Admitted & Grant Approved', date: 'Sep 28, 2026', completed: true },
      { step: 'Residential Address Verified', date: 'Oct 02, 2026', completed: true },
      { step: 'Hardware Packaged & Quality Audited', date: 'Oct 06, 2026', completed: true },
      { step: 'Dispatched via Express Courier', date: 'Oct 09, 2026', completed: true },
      { step: 'Delivered to Doorstep & Confirmed', date: 'Oct 12, 2026', completed: true },
    ],
  },
  upcomingSessions: [
    {
      id: 'sess-1',
      title: '1:1 Architecture Review: Resilient PostgreSQL Caching',
      mentor: 'Chidi Nwosu (Principal Architect)',
      date: 'Tomorrow, Oct 16',
      time: '6:30 PM WAT',
      meetingUrl: 'https://meet.google.com/nst-arch-demo',
      status: 'upcoming',
    },
    {
      id: 'sess-2',
      title: 'Cohort Masterclass: Distributed Tracing & OpenTelemetry',
      mentor: 'David Okonkwo (Staff SRE)',
      date: 'Saturday, Oct 18',
      time: '11:00 AM WAT',
      meetingUrl: 'https://meet.google.com/nst-live-master',
      status: 'upcoming',
    },
    {
      id: 'sess-3',
      title: 'Mock International Technical Interview Simulation',
      mentor: 'Kemi Adebayo (Staff Engineer)',
      date: 'Tuesday, Oct 21',
      time: '7:00 PM WAT',
      meetingUrl: 'https://meet.google.com/nst-interview-sim',
      status: 'upcoming',
    },
  ],
  assignments: [
    {
      id: 'asg-1',
      title: 'Sprint 2 Deliverable: Idempotent Payment Webhook Service',
      deadline: 'Oct 14, 2026',
      status: 'graded',
      grade: '98 / 100 (Exceptional)',
      feedback: 'Flawless Redis locking implementation and comprehensive edge test cases.',
    },
    {
      id: 'asg-2',
      title: 'Sprint 3 Deliverable: Real-Time Collaborative Canvas Engine',
      deadline: 'Oct 22, 2026 · 11:59 PM',
      status: 'pending',
    },
    {
      id: 'asg-3',
      title: 'Capstone Proposal: Multi-Region Micro-Invoicing Gateway',
      deadline: 'Nov 04, 2026',
      status: 'pending',
    },
  ],
  resources: [
    { title: 'Nestora Remote Developer Setup & Git Standards (PDF)', category: 'Guides', format: 'PDF', size: '2.4 MB' },
    { title: 'Global Contractor Tax & W-8BEN Playbook for Africans', category: 'Career', format: 'PDF', size: '1.8 MB' },
    { title: 'Production Distributed Systems Architecture Blueprint', category: 'Technical', format: 'ZIP', size: '14.2 MB' },
    { title: 'Nestora Figma Tokens and UI System Kit 2026', category: 'Design', format: 'FIG', size: '8.6 MB' },
  ],
};
