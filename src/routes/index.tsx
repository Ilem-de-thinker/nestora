import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import { RootLayout } from '../components/layout/RootLayout';
import { ErrorBoundary } from '../components/layout/ErrorBoundary';

// Route-level code splitting
const HomePage = lazy(() => import('../pages/HomePage').then((m) => ({ default: m.HomePage })));
const ProgramsPage = lazy(() => import('../pages/ProgramsPage').then((m) => ({ default: m.ProgramsPage })));
const ProgramDetailPage = lazy(() => import('../pages/ProgramDetailPage').then((m) => ({ default: m.ProgramDetailPage })));
const ScholarshipPage = lazy(() => import('../pages/ScholarshipPage').then((m) => ({ default: m.ScholarshipPage })));
const CoursesPage = lazy(() => import('../pages/CoursesPage').then((m) => ({ default: m.CoursesPage })));
const CourseDetailPage = lazy(() => import('../pages/CourseDetailPage').then((m) => ({ default: m.CourseDetailPage })));
const ApplyPage = lazy(() => import('../pages/ApplyPage').then((m) => ({ default: m.ApplyPage })));
const MentorsPage = lazy(() => import('../pages/MentorsPage').then((m) => ({ default: m.MentorsPage })));
const MentorDetailPage = lazy(() => import('../pages/MentorDetailPage').then((m) => ({ default: m.MentorDetailPage })));
const AboutPage = lazy(() => import('../pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const CareersOutcomesPage = lazy(() => import('../pages/CareersOutcomesPage').then((m) => ({ default: m.CareersOutcomesPage })));
const FaqPage = lazy(() => import('../pages/FaqPage').then((m) => ({ default: m.FaqPage })));
const ContactPage = lazy(() => import('../pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const LoginPage = lazy(() => import('../pages/LoginPage').then((m) => ({ default: m.LoginPage })));
const DashboardPage = lazy(() => import('../pages/DashboardPage').then((m) => ({ default: m.DashboardPage })));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

const LoadingSpinner = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-[#0F6B4A]/20 border-t-[#0F6B4A] animate-spin" />
  </div>
);

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <RootLayout>
        <NotFoundPage />
      </RootLayout>
    ),
    children: [
      { index: true, element: withSuspense(HomePage) },
      { path: 'programs', element: withSuspense(ProgramsPage) },
      // Note: scholarship explicitly precedes :slug
      { path: 'programs/scholarship', element: withSuspense(ScholarshipPage) },
      { path: 'programs/:slug', element: withSuspense(ProgramDetailPage) },
      { path: 'courses', element: withSuspense(CoursesPage) },
      { path: 'courses/:slug', element: withSuspense(CourseDetailPage) },
      { path: 'apply', element: withSuspense(ApplyPage) },
      { path: 'mentors', element: withSuspense(MentorsPage) },
      { path: 'mentors/:slug', element: withSuspense(MentorDetailPage) },
      { path: 'about', element: withSuspense(AboutPage) },
      { path: 'careers-outcomes', element: withSuspense(CareersOutcomesPage) },
      { path: 'faq', element: withSuspense(FaqPage) },
      { path: 'contact', element: withSuspense(ContactPage) },
      { path: 'login', element: withSuspense(LoginPage) },
      { path: 'dashboard', element: withSuspense(DashboardPage) },
      { path: '*', element: withSuspense(NotFoundPage) },
    ],
  },
]);
