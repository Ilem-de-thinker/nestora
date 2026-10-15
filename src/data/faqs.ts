export interface FAQItem {
  id: string;
  category: 'Scholarship' | 'Admissions' | 'Starter Kit & Hardware' | 'Career & Remote Work' | 'Tuition & Payment';
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Scholarship',
    question: 'How does the fully funded Scholarship Program selection work?',
    answer: 'The Nestora Impact Fellowship is awarded based on merit, grit, and demonstrable baseline commitment. Our selection committee reviews your written application, short technical logic challenge, and a 15-minute video interview. We look for builders who have already taken initial steps to teach themselves basic concepts and need high-leverage mentorship and physical infrastructure to go pro.',
  },
  {
    id: 'faq-2',
    category: 'Scholarship',
    question: 'Are scholarship recipients required to repay tuition or give equity?',
    answer: 'No. The Nestora Impact Fellowship is 100% grant-funded by philanthropic foundations, technology partners, and alumni endowments. There is zero debt, zero tuition repayment, and zero equity clawback. Our only expectation is your active, respectful participation in all cohort sprints and mentorship sessions.',
  },
  {
    id: 'faq-3',
    category: 'Starter Kit & Hardware',
    question: 'What is included in the Nestora Remote Starter Kit?',
    answer: 'The Starter Kit includes a business-class refurbished developer laptop (minimum 16GB RAM, quad-core processor, SSD), active noise-canceling headphones for clear remote meetings, a branded linen notebook with high-grade pen, a portable backup power bank for routers/modems, and a dedicated monthly internet stipend during the active fellowship.',
  },
  {
    id: 'faq-4',
    category: 'Starter Kit & Hardware',
    question: 'How and when is the starter kit delivered?',
    answer: 'Once your admission is confirmed and your residential verification is completed, our logistics partners dispatch the sealed hardware bundle directly to your doorstep anywhere in Nigeria, Ghana, Kenya, or Rwanda. Deliveries are scheduled to arrive at least 3 business days prior to your cohort kickoff date.',
  },
  {
    id: 'faq-5',
    category: 'Admissions',
    question: 'Can I apply if I currently have a full-time job or university studies?',
    answer: 'Yes. Our standard tracks require approximately 12–15 hours of focused commitment per week. Live masterclasses and mentor review sessions are scheduled on weekday evenings (after 6:00 PM WAT/CAT) and Saturday mornings. All sessions are recorded and indexed for asynchronous catch-up.',
  },
  {
    id: 'faq-6',
    category: 'Admissions',
    question: 'What is the acceptance rate and how many students are in each cohort?',
    answer: 'To preserve intimate 1:1 mentorship and meaningful code review, we cap each cohort at 35–45 fellows per discipline. For the Impact Fellowship, our acceptance rate currently sits at approximately 7.8% due to high applicant volume across the continent.',
  },
  {
    id: 'faq-7',
    category: 'Career & Remote Work',
    question: 'How does Nestora help me get hired by international remote companies?',
    answer: 'We operate an active Talent Placement Desk. In weeks 10–16, every fellow works with a dedicated Career Coach to optimize their GitHub, craft high-signal technical case studies, simulate live international technical rounds, and understand cross-border contractor invoicing (W-8BEN, Deel, Remote.com). Admitted alumni gain direct introduction to our partner hiring network.',
  },
  {
    id: 'faq-8',
    category: 'Tuition & Payment',
    question: 'What flexible payment options exist for self-sponsored programs?',
    answer: 'For our paid flagship programs, students can pay in 3 to 4 interest-free monthly installments. We also partner with vetted education finance providers in Nigeria and Kenya to offer low-interest deferred tuition options for qualifying candidates.',
  },
];
