import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, CheckCircle2, Clock, Star, Users, Award, BookOpen, ShieldCheck, PlayCircle } from 'lucide-react';
import { COURSES } from '../data/courses';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';
import { Accordion } from '../components/ui/Accordion';

export const CourseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [enrollSuccess, setEnrollSuccess] = useState(false);

  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-[#0B1F17]">Course Not Found</h1>
        <p className="text-sm text-[#526359]">
          The course you requested does not exist or may have been updated.
        </p>
        <Button variant="primary" onClick={() => navigate('/courses')}>
          Browse All Courses
        </Button>
      </div>
    );
  }

  const syllabusAccordionItems = course.syllabus.map((section, idx) => ({
    id: `syllabus-section-${idx}`,
    title: section.sectionTitle,
    subtitle: `${section.lessons.length} core technical lessons`,
    defaultOpen: idx === 0,
    content: (
      <div className="space-y-3 pt-2">
        {section.lessons.map((lesson, lIdx) => (
          <div
            key={lIdx}
            className="p-3 bg-white/70 rounded-lg border border-[#E8E3D6] space-y-1"
          >
            <div className="flex items-center justify-between text-xs font-semibold text-[#0B1F17]">
              <span className="flex items-center gap-2">
                <PlayCircle className="w-3.5 h-3.5 text-[#0F6B4A]" />
                {lesson.title}
              </span>
              <span className="text-[#64736B] font-mono">{lesson.duration}</span>
            </div>
            <p className="text-[11px] text-[#526359] pl-5">{lesson.summary}</p>
          </div>
        ))}
      </div>
    ),
  }));

  const handleSimulateEnroll = () => {
    setEnrollSuccess(true);
    setTimeout(() => {
      setIsEnrollModalOpen(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      <div>
        <Link
          to="/courses"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F6B4A] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Courses Catalog
        </Link>
      </div>

      {/* Hero Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="green">{course.category}</Badge>
            <span className="text-xs text-[#64736B]">{course.level} Level</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F17] [text-wrap:balance]">
            {course.title}
          </h1>

          <p className="text-base text-[#526359] leading-relaxed">
            {course.description}
          </p>

          {/* Instructor citation */}
          <div className="p-4 bg-[#F3EFE6] border border-[#E8E3D6] rounded-xl flex items-center gap-4 text-xs">
            <div className="w-10 h-10 rounded-full bg-[#0F6B4A] text-white flex items-center justify-center font-bold text-xs shrink-0">
              {course.instructor.split(' ').map((n) => n[0]).join('')}
            </div>
            <div>
              <p className="font-bold text-[#0B1F17]">Taught by {course.instructor}</p>
              <p className="text-[#64736B]">{course.instructorRole}</p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E8E3D6] text-xs">
            <div>
              <span className="text-[#64736B] block">Course Rating</span>
              <span className="font-bold text-sm text-[#0B1F17] flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#0F6B4A] text-[#0F6B4A]" /> {course.rating.toFixed(2)}
              </span>
            </div>
            <div>
              <span className="text-[#64736B] block">Duration</span>
              <span className="font-bold text-sm text-[#0B1F17] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#0F6B4A]" /> {course.duration}
              </span>
            </div>
            <div>
              <span className="text-[#64736B] block">Enrolled Fellows</span>
              <span className="font-bold text-sm text-[#0B1F17] flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#0F6B4A]" /> {course.studentsCount}
              </span>
            </div>
          </div>
        </div>

        {/* Enrollment Box */}
        <div className="lg:col-span-4">
          <Card variant="surface" className="p-6 space-y-5 sticky top-24">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#64736B] uppercase tracking-wider">Tuition Access</span>
              <p className="text-3xl font-extrabold text-[#0B1F17] tabular-nums">{course.price}</p>
              <p className="text-xs text-[#526359]">Lifetime access including all future updates and code templates.</p>
            </div>

            <div className="space-y-2 text-xs text-[#2D3A34] pt-2 border-t border-[#E8E3D6]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F6B4A]" />
                <span>Weekly live Q&A office hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F6B4A]" />
                <span>Production repository templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F6B4A]" />
                <span>Nestora Certificate of Completion</span>
              </div>
            </div>

            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => setIsEnrollModalOpen(true)}
            >
              Enroll in Course
            </Button>
          </Card>
        </div>
      </div>

      {/* Projects Built */}
      <section className="space-y-4 pt-8 border-t border-[#E8E3D6]">
        <h2 className="text-xl font-bold text-[#0B1F17]">Real Production Systems You Build</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {course.projectsBuilt.map((proj, idx) => (
            <Card key={idx} variant="canvas" className="p-4 space-y-2">
              <span className="text-[11px] font-bold text-[#0F6B4A]">Project 0{idx + 1}</span>
              <p className="text-xs font-semibold text-[#0B1F17] leading-snug">{proj}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Syllabus Accordion */}
      <section className="space-y-4 pt-8 border-t border-[#E8E3D6]">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-[#0B1F17]">Curriculum Breakdown</h2>
          <p className="text-xs text-[#526359]">Step-by-step technical modules with code demonstrations.</p>
        </div>
        <Accordion items={syllabusAccordionItems} allowMultiple />
      </section>

      {/* Prerequisites & Skills */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#E8E3D6]">
        <Card variant="surface" className="p-6 space-y-3">
          <h3 className="font-bold text-sm text-[#0B1F17]">Required Prerequisites</h3>
          <ul className="space-y-2 text-xs text-[#526359]">
            {course.prerequisites.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F6B4A] shrink-0 mt-0.5" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card variant="surface" className="p-6 space-y-3">
          <h3 className="font-bold text-sm text-[#0B1F17]">Skills & Tools Verified</h3>
          <div className="flex flex-wrap gap-2">
            {course.skills.map((skill) => (
              <Badge key={skill} variant="neutral">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </section>

      {/* Enrollment Simulation Modal */}
      <Modal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        title={`Enroll in ${course.title}`}
        description="Instant enrollment into the Nestora virtual campus."
      >
        <div className="space-y-5">
          {enrollSuccess ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#E6F2EA] text-[#0F6B4A] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#0B1F17] text-base">Enrollment Confirmed!</h4>
              <p className="text-xs text-[#526359]">
                Redirecting you to your active student learning portal...
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-3 bg-[#F3EFE6] rounded-lg text-xs space-y-1">
                <div className="flex justify-between font-semibold text-[#0B1F17]">
                  <span>{course.title}</span>
                  <span>{course.price}</span>
                </div>
                <p className="text-[#64736B]">Instructor: {course.instructor}</p>
                <p className="text-[#64736B]">Access: Immediate & Lifetime</p>
              </div>

              <p className="text-xs text-[#526359] leading-relaxed">
                As this is a client demonstration instance, clicking below grants instantaneous mock student enrollment without requiring actual billing credentials.
              </p>

              <div className="flex justify-end gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEnrollModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleSimulateEnroll}
                >
                  Confirm Mock Enrollment
                </Button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};
